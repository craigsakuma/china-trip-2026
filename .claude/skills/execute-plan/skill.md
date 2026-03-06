---
name: execute-plan
description: Branch-aware plan execution — accepts subtask description or explicit path, finds the right plan file, works through tasks with progress tracking, ADHD-friendly pause/resume, and expert panel integrations. Use this skill whenever executing /plan output, running implementation plans task-by-task, or when the user says /execute-plan, "run the plan", "start executing", or "continue from where we left off". Includes three panel touchpoints: auto-diagnosis on FAIL (Option A), post-execution code review on annotated high-risk tasks (Option B), and on-demand panel consultation at any checkpoint (Option C).
version: 2026-03-06-b
model: sonnet
---

# /execute-plan - Task-by-Task Plan Execution

Execute a structured implementation plan created by `/plan`, working through tasks incrementally with real-time progress tracking and ADHD-friendly pause/resume.

## Usage

```bash
/execute-plan <subtask description>    # find and execute subtask plan
/execute-plan path/to/plan.md          # explicit path (unchanged)
```

**Parameter:**
- `<subtask description>` or `path/to/plan.md` — Either a freeform description matched against plan file titles, or an explicit file path.

**Path detection:** If the argument ends in `.md` or contains `/`, treat as a file path. Otherwise treat as a subtask description.

**Examples:**
```bash
/execute-plan fix reset-dev-database                              # matches plan by title
/execute-plan update pre-push-check                               # matches plan by title
/execute-plan docs/plans/TRL-5-security-script-patches-subtask1.md  # explicit path
```

## How It Works

1. **Detect Plan** - Auto-detect from branch or accept explicit path
2. **Parse Plan** - Read plan file, extract phases, tasks, dependencies, acceptance criteria
3. **Show Overview** - Display strategic summary, phase breakdown, reviewer warnings, panel cost notice
4. **Execute Task-by-Task** - Work through incomplete tasks in order, checking dependencies
5. **Update Progress** - Mark tasks in progress (🟡), check off acceptance criteria individually, mark complete (✅)
6. **Panel Touchpoints** - Auto-diagnose failures (A), review high-risk task completions (B), on-demand consultation at checkpoints (C) — all conditional on `$PANEL_AVAILABLE`
7. **Pause/Resume** - Stop anytime, resume in fresh session from last checkpoint

---

## Step 0: Detect Plan File

**Accept subtask description, explicit path, or auto-detect from branch.**

### Determine input type

Check the argument:
- If it ends in `.md` or contains `/` → treat as **explicit path**
- If it's a non-empty string without `.md` or `/` → treat as **subtask description**
- If no argument → treat as **branch auto-detection** (legacy fallback)

### If explicit path provided:

1. **Resolve file path:**
   - If relative path: Convert to absolute using current working directory
   - If absolute path: Use as-is
   - Store as `$PLAN_FILE`

2. **Validate file exists:**
   - If not found: Error with clear message
   - Proceed to metadata extraction

### If subtask description provided:

1. **Get current branch:**
   ```bash
   git branch --show-current
   ```

2. **Validate branch format:**
   - Branch must match `trl-XXXX-*` or `tr-XXXX-*` pattern
   - If not: STOP with error:
     ```
     Error: Not on a tracked branch. Cannot find plan files.

     Options:
     - Switch to a feature branch: git checkout trl-XXXX-slug
     - Provide explicit path: /execute-plan path/to/plan.md
     ```

3. **Extract issue number and glob for plans:**
   - `trl-0005-security-script-patches` → strip leading zeros → `TRL-5`
   - Glob for all matching plan files: `docs/plans/TRL-5-*.md`

4. **Match description against plan titles:**
   - Read the first few lines (title/heading) of each matched plan file
   - Case-insensitive keyword matching of the description against plan titles
   - Example: description "fix reset-dev-database" matches plan titled "Fix reset-dev-database.sh"

5. **Handle matches:**
   - **One match:** Use it as `$PLAN_FILE`, display:
     ```
     Matched plan: docs/plans/TRL-5-security-script-patches-subtask1.md
     Title: Fix reset-dev-database.sh
     (from description: "fix reset-dev-database")
     ```
   - **No match:** Error:
     ```
     No plan matches "<description>" for TRL-5.

     Available plans:
     1. docs/plans/TRL-5-security-script-patches-subtask1.md — "Fix reset-dev-database.sh"
     2. docs/plans/TRL-5-security-script-patches-subtask2.md — "Update pre-push-check.sh"

     Pick a number, or run /plan <subtask> to create a plan.
     ```
   - **Multiple matches:** List matching plans and ask user to pick
   - **No plan files at all:** Error:
     ```
     No plans found for TRL-5 in docs/plans/

     Run /plan <subtask description> first to create a plan.
     ```

### If no argument (branch auto-detection — legacy fallback):

1. **Get current branch:**
   ```bash
   git branch --show-current
   ```

2. **Validate branch format:**
   - Branch must match `trl-XXXX-*` or `tr-XXXX-*` pattern
   - If not: STOP with error

3. **Extract issue number and glob:**
   - Glob for `docs/plans/TRL-5-*.md`
   - **One match:** Use it
   - **Multiple matches:** List files and ask user to pick (or suggest using description)
   - **No match:** Error — run `/plan <subtask>` first

### Metadata and confirmation (both paths):

1. **Extract and display plan metadata:**
   - Read first 20 lines of plan file
   - Extract: Status, Estimated Effort, Created date

2. **Request confirmation:**
   ```
   Plan File: plans/TR-42-auth-flow.md
   Status: ⬜ Not Started
   Effort: Medium lift (3-4 hours)
   Created: 2026-02-05

   Execute this plan? (y/n)
   ```
   - If "n": Exit gracefully
   - If "y": Proceed to Clean Context step

3. **Clean Context:**

   Each task executes in a subagent (via Task tool) with a clean context containing only the task spec and relevant file contents. No planning discussion, no prior session state reaches the executor. This happens automatically — no action required.

4. **Panel Availability Check:**

   Attempt to read `.claude/repo_skill_config.json` and check for a `review_config` key. Set `$PANEL_AVAILABLE` based on the result:

   - File **missing**: `$PANEL_AVAILABLE = false`. Silent — panels were never configured. No warning shown.
   - File **present and parseable with `review_config` key**: `$PANEL_AVAILABLE = true`.
   - File **present but malformed** (parse error, `review_config` key absent, or wrong type): `$PANEL_AVAILABLE = false`. Display this warning before proceeding:
     ```
     ⚠️ repo_skill_config.json exists but could not be parsed or has no review_config key.
     Panel review will be skipped for ALL tasks, including tasks annotated post-exec.
     This may indicate a config issue worth investigating.

     Continue without panel review? (y/n)
     ```
     If "n": pause execution. If "y": proceed with `$PANEL_AVAILABLE = false`.

   All panel invocations (Options A, B, C) check `$PANEL_AVAILABLE` first — if false, they are silently skipped. execute-plan must function fully in repos without panel config.

---

## Pre-Work: Parse Plan Structure

The plan file is your complete context. It was audited by reviewer personas during `/plan` — all risk items are embedded in the Reviewer Checklist and per-task warnings.

1. **Read Plan File** (already validated)
   - Parse structure: Strategic Overview, phases, tasks
   - Extract task IDs, status, dependencies, acceptance criteria
   - Build task map for quick lookup

2. **Parse Task Structure:**
   - Identify all tasks with: ID, Status, Dependencies, Acceptance Criteria, Reviewer Checklist items, Risk Warnings
   - Note which tasks are complete (✅), in progress (🟡), not started (⬜)
   - Build dependency graph
   - **Resume detection:** If a task has all acceptance criteria checked `[x]` but status is still 🟡 — do NOT re-execute. Verify the work is present on disk, mark the task ✅, and continue. This handles the case where the session crashed between the final criterion write and the status update.

---

## Step 1: Display Plan Overview

Show strategic summary before starting execution:

1. **Strategic Overview:**
   - Display "Problem Statement" section
   - Display "Approach"
   - Display "Scope" (In Scope / Out of Scope)
   - Display "Success Criteria"

2. **Phase Breakdown:**
   ```
   Phase 1: Foundation (3 tasks)
     ✅ Task 1.1: Create Skill File
     🟡 Task 1.2: Implement Parameter Validation
     ⬜ Task 1.3: Load Context Files

   Phase 2: Core Logic (2 tasks)
     ⬜ Task 2.1: Display Overview
     ⬜ Task 2.2: Execute Tasks
   ```

3. **Parallelization Opportunities:**
   - List tasks marked "Can parallelize: Yes"
   - Note: Claude Code is single-threaded, but this helps planning

4. **Reviewer Warnings Summary:**
   - Count tasks with Reviewer Checklist items (from "Addresses checklist items:" field)
   - Count tasks with Risk Warnings
   - Display:
   ```
   Reviewer Warnings:
     Tasks with checklist items: 3 (Task 1.2, 2.1, 2.3)
     Tasks with risk warnings: 1 (Task 2.3)
     Clean tasks: 7
   ```

5. **Panel Review Cost Warning** (only when `$PANEL_AVAILABLE` is true):
   - Count tasks with `**Panel Review:** post-exec` in the plan file
   - If N > 0, display:
     ```
     panel-reviewed tasks: N (Task X.Y, Task X.Z, ...)
     Each post-exec task will invoke a full two-round Opus panel after the executor returns PASS — significant token cost.
     ```
   - If N == 0, or `$PANEL_AVAILABLE` is false: skip this display entirely.

6. **Next Steps:**
   - "Ready to begin execution. Starting with first incomplete task..."

---

## Step 2: Detect and Select Next Task

Find the next task to execute:

1. **Iterate through tasks in order:**
   - Phase 1.1, 1.2, 1.3, 2.1, 2.2, etc.
   - Skip tasks marked ✅ Completed

2. **Find first incomplete task:**
   - Status: ⬜ Not Started OR 🟡 In Progress
   - If 🟡 In Progress: Resume this task
   - If ⬜ Not Started: Start this task

3. **Check dependencies:**
   - Parse "Dependencies:" field from task
   - Verify all dependency tasks marked ✅ Completed
   - If dependencies not met:
     ```
     ⚠️ WARNING: Dependencies not met for Task 2.3

     Required: Task 2.1 (✅ Complete), Task 2.2 (⬜ Not Started)

     Options:
     1. Skip this task and continue to next
     2. Wait (pause execution)
     3. Override and execute anyway (not recommended)

     Choose: (1/2/3)
     ```

4. **Select task:**
   - Store task details for execution
   - Proceed to Step 3

5. **If no incomplete tasks found:**
   - All tasks complete!
   - Skip to Step 4 (Completion Summary)

---

## Step 3: Execute Selected Task

Work through the task incrementally:

### 3.1 Display Task Details

```
─────────────────────────────────────────
📋 Task 1.2: Implement Parameter Validation
─────────────────────────────────────────

Status: ⬜ Not Started
Dependencies: Task 1.1 (✅ Complete)
Can parallelize: No

Description:
Add Step 0 to skill.md that validates plan file parameter,
converts relative to absolute path, checks file exists, and
displays plan metadata for confirmation.

Specification:
- Accept parameter (required, no default)
- Handle both relative and absolute paths
- Validate file exists
- Extract plan metadata (Status, Effort, Created date)
- Ask user: "Execute this plan? (y/n)"

Acceptance Criteria:
[ ] Parameter required (error if missing)
[ ] Relative paths resolved to absolute
[ ] File existence validated with clear error message
[ ] Plan metadata extracted and displayed
[ ] User confirmation requested before proceeding

Reviewer Checklist Items: None
Risk Warnings: None

Relevant Files:
- tool-library/daily-audit/skill.md lines 30-66
- tool-library/weekly-report/skill.md lines 30-79
─────────────────────────────────────────
```

**Ask:** "Start this task? (y/n/skip)"
- If "n" or "skip": Go back to Step 2 (find next task)
- If "y": Proceed with execution

### 3.2 Mark Task In Progress

Update plan file **immediately before starting work:**
- Change task status from ⬜ to 🟡
- Use Edit tool to update the status line

Example:
```markdown
**Status:** 🟡 In Progress
```

**Write failure:** If this write fails, surface the error and pause. Do not begin task execution with stale plan state.

### 3.3 Prepare Subagent Context

Read the inputs the executor subagent will need:

1. **Read the full task section** from `$PLAN_FILE` — Description, Specification, Acceptance Criteria, Key Design Decisions, Reviewer Checklist items, Risk Warnings
2. **Read each file** listed in "Relevant Files:" for the task
3. **Identify the build and test commands** from the task's acceptance criteria

### 3.4 Launch Executor Subagent

Use the Task tool (`subagent_type: general-purpose`) to launch a clean executor with the following prompt template. The subagent's context contains only what you pass here — no planning history, no prior session state.

```
You are executing Task [ID]: [Name] from an implementation plan.

## Task Specification

[Paste the full task section from the plan verbatim:
 Description, Specification, Acceptance Criteria,
 Risk Warnings, Key Design Decisions]

## Relevant File Contents

[Paste the content of each file from "Relevant Files:",
 labelled with path and line numbers]

## Execution Rules

1. Follow the Specification exactly. It was reviewed by expert personas
   and reflects post-decision guidance. Do not deviate.
2. If a test fails after ONE fix attempt, STOP and report the failure.
   Do not iterate further — escalate to the main session for diagnosis.
3. Do NOT make commits. Report what you changed; the main session
   handles commits after user approval.
4. Verify each acceptance criterion individually after implementation.

## Report Format

Return this structure exactly:

TASK: [ID] [Name]
STATUS: PASS | FAIL | BLOCKED

CRITERIA:
[x] criterion 1
[x] criterion 2
[ ] criterion 3 — FAILED: [reason]

BUILD: PASS | FAIL | N/A
TESTS: [n]/[total] pass

FAILURE DETAIL: (if STATUS is FAIL)
  Test: [test name]
  Error: [error message]
  File: [file:line]

FILES MODIFIED:
  - [actual files changed]

PLAN SYNC NEEDED: yes | no
  [If yes: brief description of any divergence from the plan spec]
```

### 3.5 Handle Subagent Result

**Parse the subagent's report and act accordingly.**

**Report parse failure:** If the subagent returns output that cannot be parsed into the expected format — missing `STATUS:` line, free-form text instead of structured report, no `CRITERIA:` section — do NOT assume PASS or FAIL. Display the raw output to Craig and prompt:

```
Subagent report could not be parsed for Task [ID].

Raw output:
[raw subagent output]

Choose:
1. Treat as PASS — manually verify criteria and continue
2. Treat as FAIL — go to failure recovery
3. Re-launch executor subagent
4. Pause execution
```

#### On PASS:

1. Check off each verified criterion in `$PLAN_FILE`: `[ ]` → `[x]`
   - **Write verification:** After each criterion write, verify the write succeeded before proceeding to the next. If any write fails, surface the error and pause — do not continue with stale state.
2. If `PLAN SYNC NEEDED: yes` — update the task's Description, Specification, and Relevant Files in the plan to match what was actually built. Add a note: `[Updated during execution: original plan assumed X, actual implementation uses Y because Z]`

3. **Option B — Post-execution panel review** (high-risk tasks only):

   **Detection:** Check whether the task block contains `**Panel Review:** post-exec` (exact string). If yes and `$PANEL_AVAILABLE` is true: invoke Option B. If no, or `$PANEL_AVAILABLE` is false: proceed directly to Step 3.6.

   **Cycle persistence — write BEFORE invoking panel:**
   - Read `Panel cycles:` from the task block. Missing line = 0. Malformed/non-integer = treat as 0, emit: "Panel cycle count unreadable — starting at 0."
   - Append/update `Panel cycles: N+1` in the task block **before** invoking the panel. This counter tracks invocations, not outcomes.
   - **Write failure = hard stop:** if this write fails, halt the panel invocation and surface the error to Craig. Do not proceed.

   **Session resume check:** On resume, if a task block contains `Panel cycles: N` but no corresponding panel verdict (session died between write and response): surface to Craig:
   ```
   Panel cycle N was in progress for Task X.Y when the session ended.
   Choose: [1] Re-invoke panel  [2] Mark as unavailable  [3] Skip
   ```
   Do not auto-resolve.

   **2-cycle hard stop:** After 2 cumulative panel invocations (across sessions), pause execution:
   ```
   Maximum panel review cycles reached (2/2) for Task X.Y.
   Last verdict: NEEDS REVISION — [items]
   Choose: [1] Mark APPROVED  [2] Mark BLOCKED
   ```
   No auto-retry. No auto-approve.

   **Cost display before invocation:**
   ```
   Invoking post-execution panel review for Task X.Y (high-risk).
   This uses a full two-round Opus panel — significant token cost.
   Panel Review Reason: [reason from task block]
   Proceed? (y/n)
   ```
   If "n": skip panel, proceed to Step 3.6 (mark ✅ without panel review — log as "Panel review: skipped by Craig (YYYY-MM-DD)").

   **Diff collection:**
   - Executor changes are uncommitted — use: `git diff -- [each file in FILES MODIFIED]` (working tree diff)
   - If changes are staged: use `git diff --staged -- [each file in FILES MODIFIED]`
   - If diff exceeds 500 lines: truncate, append: `[Diff truncated at 500 lines — full diff available via git diff -- [files]]`
   - If diff collection fails or returns empty: proceed with note "Diff unavailable — reviewing from subagent report only"

   **Panel invocation** — follow ask-panel/skill.md steps in the current orchestrating session context — do NOT launch ask-panel via Task tool:

   ```
   ## SECTION 1: Task Specification (human-authored)
   [Full task block from plan: Description, Specification, Acceptance Criteria]

   ## SECTION 2: Risk Annotation (from /plan reviewer panel)
   Panel Review Reason: [Panel Review Reason field from task block]

   ## SECTION 3: Executor Subagent Report (machine-generated — verify against diff below)
   [Full subagent report: STATUS, CRITERIA checklist, FILES MODIFIED, PLAN SYNC NEEDED]

   ## SECTION 4: Git Diff (actual code changes — authoritative source)
   [Diff output, max 500 lines. If truncated, note appears above.]

   Question type: REVIEW
   Focus: Does the implementation match the spec? Are there risks the executor missed?
   IMPORTANT: Review ONLY what is shown in the diff. Do not infer behavior from code not present. If the diff is insufficient to make a determination, state that explicitly.
   ```

   **Thin post-processor (runs after ask-panel returns):**
   - Display the full panel output to Craig first — all persona takes, diagnosed problems, file:line references, severity table.
   - After displaying, run a separate thin Agent call with the full panel output as input:
     ```
     Classify the above panel review. Output exactly one line:
     `VERDICT: APPROVED` if no problems were found requiring fixes, or
     `VERDICT: NEEDS REVISION — [comma-separated list of specific items to address]` if problems were found.
     ```
   - Parse the thin post-processor's output (not ask-panel's raw output).

   **Verdict parsing — three-state:**
   - Use line-anchored pattern: `^VERDICT:\s*(APPROVED|NEEDS REVISION.*)$`
   - **APPROVED branch:** validate capture group is exactly `APPROVED` — no trailing text. "APPROVED with caveats" or any qualified form → treat as PARSE FAILURE.
   - `APPROVED` (exact): proceed to Step 3.6, append audit entry to plan file, emit completion notification.
   - `NEEDS REVISION — [items]`: surface to Craig, emit completion notification (see NEEDS REVISION flow below).
   - `PARSE FAILURE` (no valid VERDICT line, value not in closed vocabulary, or qualified APPROVED): do NOT default to NEEDS REVISION. Display raw panel output inline and prompt:
     ```
     Panel output could not be parsed. Review above and choose:
     [1] Treat as APPROVED  [2] Treat as NEEDS REVISION  [3] Re-invoke panel  [4] Pause
     ```
     Log outcome as chosen by Craig.

   **Completion notification** (fires on APPROVED, NEEDS REVISION, and PARSE FAILURE):
   ```
   Panel review complete for Task X.Y
     Trigger: post-exec (Option B)
     Verdict: [APPROVED / NEEDS REVISION / PARSE FAILURE]
     Cycle: N of 2
     Personas: N
   ```

   **Context window management:** After the verdict is recorded and the completion notification displayed, release the full panel output from working context. Retain only: the verdict, the items list (if NEEDS REVISION), and the audit entry written to the plan file. The full persona responses and cross-examination synthesis are preserved in the audit entry — they do not need to remain in working memory. This prevents context window exhaustion across multi-task plans with several panel-reviewed tasks.

   **NEEDS REVISION flow:**
   ```
   Panel Review: NEEDS REVISION for Task X.Y

   Items flagged:
   - [item 1 from verdict]
   - [item 2 from verdict]

   Review cycle: N of 2 maximum

   Options:
   1. Fix now — re-run executor subagent with panel feedback
   2. Log as known issue — approve task, record panel concern in plan file
   3. Override — approve task, record override decision in plan file
   4. Pause execution
   ```

   **If option 1 chosen — revision executor prompt:** Re-launch via Task tool using the same Step 3.4 template, adding a new section between "Relevant File Contents" and "Execution Rules":

   ```
   ## Panel Feedback (revision pass)

   The previous executor attempt returned PASS, but the post-execution panel review
   identified these issues that must be addressed:

   [items from NEEDS REVISION verdict, verbatim]

   Address each item above. The original specification is unchanged — these are
   corrections to the implementation, not changes to the spec.
   ```

   After the revision executor completes, handle its report through the same Step 3.5 PASS/FAIL/BLOCKED flow. Do NOT auto-invoke a second panel — the cycle counter increments only when a panel is invoked. Only invoke again if the task is still annotated `post-exec`, Craig chooses to re-panel, and cycle count < 2.

   **Panel failure flow** (panel itself fails — never silent auto-approve):
   ```
   Panel review failed for Task X.Y (panel unavailable).
   Executor returned PASS — work is real.

   Options:
   1. Approve — log panel as unavailable in plan file
   2. Run /ask-panel manually before continuing
   3. Pause execution
   ```

   **Plan file writes (all performed by orchestrating instance only):**
   - APPROVED: append `Panel review: APPROVED (YYYY-MM-DD) — N personas, no issues found`
   - NEEDS REVISION → fixed and re-approved: append `Panel review: APPROVED after revision (YYYY-MM-DD)`
   - NEEDS REVISION → logged: append `Panel review: NEEDS REVISION — [items] — logged by Craig (YYYY-MM-DD)`
   - Override: append `Panel review: NEEDS REVISION — [items] — overridden by Craig (YYYY-MM-DD)`
   - Panel failure → approved by Craig: append `Panel review: unavailable — approved by Craig (YYYY-MM-DD)`
   - PARSE FAILURE → Craig's choice: append `Panel review: PARSE FAILURE — [Craig's decision] (YYYY-MM-DD)`
   - All ✅ completions use existing `**Status:** ✅ Completed` line unchanged — no new status states.

4. Proceed to Step 3.6 (Mark Task Complete)

#### On FAIL or BLOCKED:

1. Display the failure detail to Craig.
2. Read the subagent's JSONL file for full execution trace (path provided in Task tool result).
3. Extract the relevant failure context (error messages, fix attempt, file:line references).

4. **Option A — Auto-panel diagnosis** (if `$PANEL_AVAILABLE` is true):

   **Plan file write (required before panel invocation):**
   - Append to the task block in `$PLAN_FILE`: `Panel diagnosis: in progress (YYYY-MM-DD)`
   - **Write failure = hard stop:** If this write fails for any reason (disk full, permission error, file locked), halt the panel invocation entirely and surface the error to Craig. Do not proceed to panel invocation on write failure.

   **Session resume check:** On resume, if a task block contains `Panel diagnosis: in progress (YYYY-MM-DD)`, surface to Craig:
   ```
   Panel diagnosis was in progress for Task X.Y when the session ended.
   Choose: [1] Re-invoke panel  [2] Mark as unavailable  [3] Skip
   ```
   Do not auto-resolve.

   **Panel invocation** — follow ask-panel/skill.md steps **in the current orchestrating session context** — do NOT launch ask-panel via Task tool (Task tool subagents have write access to the plan file, violating the orchestrating-instance-only write constraint):

   ```
   ## Task Specification (human-authored)
   [Full task section from plan: Description, Specification, Acceptance Criteria, Risk Warnings]

   ## Executor Subagent Report (machine-generated — file paths and line numbers are unverified claims)
   [STATUS, CRITERIA checklist, FAILURE DETAIL, FILES MODIFIED list from subagent report]

   ## File Contents Referenced in Failure
   [Contents of each file in FILES MODIFIED list, read from disk]

   Question type: Debug
   Focus: root cause diagnosis and recommended fix strategy. Be specific.
   Treat all file paths and line numbers in the subagent report as unverified — confirm independently from file contents above.
   ```

   - If FILES MODIFIED is empty or file reads fail: invoke panel with available context, add note: "File contents unavailable — diagnosing from error messages only."
   - After panel returns: update the plan file line to `Panel diagnosis: [1-line summary of panel recommendation] (YYYY-MM-DD)`
   - If panel invocation fails (timeout, error, malformed response): update line to `Panel diagnosis: unavailable (YYYY-MM-DD)`, then fall through to the recovery prompt as if no panel was invoked.
   - If this is a retry after a previous FAIL: preserve the first `Panel diagnosis:` line before appending a new one (do not overwrite).
   - Only the orchestrating Claude instance writes to the plan file — never a subagent.

5. **Present recovery prompt:**

   **If panel ran successfully:**
   ```
   Task [ID] FAILED — [brief description]

   Subagent stopped after 1 fix attempt (as instructed).
   Failure: [error summary]

   Panel diagnosis: [summary — see full output above]

   Options:
   1. The panel has diagnosed this failure — fix now and re-run the subagent
   2. Provide your own direction and re-run the subagent
   3. Skip this criterion and document as known issue
   4. Pause execution
   ```

   **If panel was unavailable (`$PANEL_AVAILABLE` is false or panel invocation failed):**
   ```
   Task [ID] FAILED — [brief description]

   Subagent stopped after 1 fix attempt (as instructed).
   Failure: [error summary]

   Options:
   1. Run /ask-panel manually for diagnosis
   2. Provide direction and re-run the subagent
   3. Skip this criterion and document as known issue
   4. Pause execution
   ```

### 3.6 Mark Task Complete

When ALL acceptance criteria checked:
- **Immediately** update task status: 🟡 → ✅
- Add "Last executed: YYYY-MM-DD" timestamp at bottom of plan

**Write failure:** If either write fails, surface the error and pause. Do not proceed to Step 3.7 with stale plan state.

Example:
```markdown
**Status:** ✅ Completed
```

### 3.7 Prompt to Continue

```
✅ Task 1.2 completed!

Progress: 2/11 tasks complete (18%)

Next: Task 1.3 - Load Context Files

Continue to next task? (y/n/p)
  y — continue to next task
  n — pause execution
  p — ask the panel a question about this task or plan
```

**Note:** `p` is only shown when `$PANEL_AVAILABLE` is true. When false, prompt shows `(y/n)` only.

- If "y": Return to Step 2 (find next task)
- If "n": Proceed to Step 4 (Pause Instructions)
- If "p" (Option C — on-demand panel):
  1. **No LLM call is made until Craig presses p.** Only on `p` does the panel invocation begin.
  2. Prompt: "What do you want to ask the panel?"
  3. Pass Craig's question + the current task's full spec (Description, Specification, Acceptance Criteria, Risk Warnings) as context to ask-panel. Let ask-panel's classifier determine question type — this is Craig's choice, not a programmatic invocation.
  4. After panel returns its full response: display it, then return to the same `(y/n/p)` prompt. Craig can ask follow-up questions or continue.
  5. **Panel failure:** display error message, return to the same `(y/n/p)` prompt. Do not abort the task, do not change plan file state.
  6. **Audit trail:** Append a single line to the task block in the plan file: `Panel consultation: [one-sentence question summary] (YYYY-MM-DD)`. This preserves the external-memory contract without VERDICT overhead. Write failure is non-fatal — log the failure and continue.
  7. **Cycle advisory:** Track Option C invocations in the current session. After 3 invocations, display once: `Panel consultation count: N this session — significant token cost.` Do not block or require action.
  8. **Option C does not use VERDICT parsing.** Ask-panel's native output format applies. The VERDICT parsing path (thin post-processor) is exclusive to Option B.

---

## Step 4: Handle Pause or Completion

### If User Pauses (Said "n" to Continue)

1. **Complete current acceptance criterion:**
   - Finish whatever you're in the middle of
   - Update plan file with current state

2. **Display pause summary:**
   ```
   ⏸️ Execution Paused

   ✅ Completed: 2 tasks
     - Task 1.1: Create Skill File
     - Task 1.2: Implement Parameter Validation

   🟡 In Progress: None

   ⬜ Next: Task 1.3 - Load Context Files

   To resume: switch to the feature branch and run /execute-plan
   (or: /execute-plan plans/TR-42-auth-flow.md)

   The skill will automatically detect your progress and
   continue from Task 1.3.

   Before exiting: (y/n/p)
     y — exit now
     n — return to continue prompt (resume this session)
     p — ask the panel a question before exiting
   ```

   **Note:** `p` is only shown when `$PANEL_AVAILABLE` is true. When false, prompt shows `(y/n)` only.

   - If "y": exit (save plan file first)
   - If "n": return to Step 3.7 `(y/n/p)` prompt
   - If "p" (Option C): same flow as Step 3.7 `p` path — prompt Craig for question, invoke panel, display response, return to this `(y/n/p)` prompt. Audit trail write and cycle advisory apply. No VERDICT parsing. Panel failure → return to this prompt.

3. **Save plan file:**
   - Ensure all updates committed to disk

### If All Tasks Complete

1. **Update plan status:**
   - Change plan status to: ✅ Completed
   - Update "Last Updated" timestamp
   - Add "Last executed: YYYY-MM-DD" timestamp

2. **Display completion summary:**
   ```
   🎉 Plan Execution Complete!

   ✅ All tasks completed: 11/11 (100%)

   Phase 1: Foundation - 3/3 tasks ✅
   Phase 2: Core Logic - 5/5 tasks ✅
   Phase 3: Polish - 3/3 tasks ✅

   Commits made: 3
   Files modified: 4

   Next steps:
   - Run tests to verify implementation
   - Test the feature end-to-end
   - Commit changes to repository
   - Run /pr-staging to create PR
   ```

3. **Suggest next steps:**
   - Based on plan content and context
   - Testing, deployment, documentation, code review

---

## Rules

You are executing a detailed implementation plan. Your job is to work through tasks methodically, transparently, and incrementally.

**Execution Principles:**

1. **Task-by-Task Focus:** Execute ONE task at a time completely before moving to next. No skipping ahead.

2. **Real-Time Plan Updates:** Update the plan file **immediately** after every status change. Mark 🟡 before starting. Check each acceptance criterion box individually as verified. Mark ✅ immediately after last criterion passes. The plan is external memory — it must always reflect current state.

3. **Dependency Discipline:** Check dependencies BEFORE starting each task. Warn user if dependencies not met. Offer skip/wait/override options.

4. **Reviewer Awareness:** Display Reviewer Checklist items and Risk Warnings prominently for each task. These were added by domain-specific reviewer personas during `/plan` — treat them as risk flags.

5. **Test-Driven:** Verify acceptance criteria before marking tasks complete. If criteria can't be verified, flag it clearly.

6. **Commit Discipline:** Commits are made by the main session after user approval — never inside the executor subagent. Commit at logical checkpoints (end of phase, significant milestones). Use signature: `Co-authored-by: Claude`

7. **Pause/Resume Ready:** Update plan file continuously so user can pause anytime and resume in fresh session. Progress auto-detected from branch.

8. **Transparency:** Show what you're doing at each step. Display diffs before edits. Explain decisions. Ask when uncertain.

9. **Error Handling:** If a task fails or blocks, don't mark it complete. Update status with notes, ask user how to proceed.

10. **User Control:** User can skip, override, pause, or adapt at any point. You execute, but Craig directs.

---

## Craig's Context

**Who Craig Is:**
- AI-native PM building portfolio as AI engineer / technical entrepreneur
- Career pivot: PM/entrepreneur → AI-augmented product builder
- ADHD + autism spectrum: needs structured workflows, clear next steps, natural breakpoints
- Hyperfocus sessions (12-16 hrs) followed by gaps (days/weeks)

**His Work Patterns:**
- Needs external memory (plans, docs, commits) due to context loss between sessions
- Prefers incremental progress with visible checkboxes and status updates
- Values explicit "what's next" guidance at every decision point
- Appreciates direct, honest feedback without hedging

**Your Role:**
- Execute plans methodically, one task at a time
- Update plan file continuously (external memory)
- Display reviewer warnings and risk flags prominently
- Provide clear "continue or pause?" prompts
- Make it easy to resume after context loss
- Respect his PM control while providing technical execution

**Success Metrics:**
- Tasks completed with verified acceptance criteria
- Plan file accurately reflects current state
- Natural pause/resume points every 1-2 tasks
- Clear visibility into progress and next steps
- Craig feels productive, not overwhelmed

---

Co-authored-by: Claude

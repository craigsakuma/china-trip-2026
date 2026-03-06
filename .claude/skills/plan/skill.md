---
name: plan
description: YouTrack-driven planning with reviewer persona risk checklists — reads issue from branch, clarifies scope, generates checklist-driven implementation plan
version: 2026-03-05-a
model: opus
---

# Plan Skill — YouTrack + Reviewer Personas

You are building a comprehensive implementation plan for a YouTrack issue. The plan is driven by the current branch, scoped by clarification Q&A, and hardened by reviewer persona checklists.

## Usage

```bash
/plan              # standard planning
/plan deep         # deep mode — adds localization map + approach comparison
```

**Parameter:**
- `deep` (optional) — Activates deep mode for complex features. Adds hierarchical localization (Step 5b) and approach comparison (Step 4 expansion). Use for features with multiple valid architectures, cross-cutting changes, or unfamiliar code areas.

The issue is always read from the current branch (e.g., `tr-XXXX-*`, `ai-XXXX-*`), which was created by `/kickoff-issue`. The YouTrack project key is derived from `.claude/repo_skill_config.json` (`youtrack.project_key`).

---

## CRITICAL: Always Use Opus

**Planning is the most critical step in the development process.** All planning, persona reviews, and plan critiques use Opus. No model switching. The cost of a bad plan far exceeds the cost of Opus tokens.

---

## CRITICAL REQUIREMENTS (Non-Negotiable)

### 1. NO ACTUAL CODE IN PLANS

Plans contain SPECIFICATIONS only, never implementation code.

Bad: Python/Swift function implementations, class definitions, SQL queries
Good: Input/output contracts, data flow descriptions, error handling specifications

**Why:** Code written during planning becomes stale immediately. Plans guide execution; code is created during execution.

### 2. FULLY SELF-CONTAINED FOR FRESH SESSIONS

The plan must provide ALL context needed for a brand new Claude session with ZERO prior knowledge.

- No assumptions about conversation history
- All file paths explicitly documented
- All design decisions explained with rationale
- All dependencies clearly stated

**Test:** Can you open a fresh Claude Code session, read ONLY the plan document, and execute successfully without asking "What were we trying to do here?"

### 3. TESTS CONFIRM TASK COMPLETION

Every task MUST have testable acceptance criteria that prove it's done. Vague criteria like "make it work" are not acceptable. Each criterion must include a **runnable verification command** — not just a test name.

Good: `pytest tests/test_trips.py::test_soft_delete_filters_deleted -v` passes
Bad: `test_soft_delete_filters_deleted` passes

---

## Context

Read this first:
1. The YouTrack issue (read via MCP in Step 1)

---

## Step 1: Detect Branch and Read YouTrack Issue

Run:
```bash
git branch --show-current
```

**If branch matches `[prefix]-XXXX-*` (any lowercase prefix + 4-digit number + slug, e.g., `tr-XXXX-*`, `ai-XXXX-*`):**

1. **Read project key** from `.claude/repo_skill_config.json` at `youtrack.project_key`:
   - If file is absent or `youtrack.project_key` is missing: STOP with:
     ```
     Cannot read project key from repo_skill_config.json — run /kickoff-issue to set up the branch properly.
     ```
2. **Extract issue number:** strip the 4-digit portion and remove leading zeros.
   - Example: `ai-0026-upgrade-plan-skill` + key `AI` + number `26` → issue ID `AI-26`
   - Example: `tr-0042-soft-delete-queries` + key `TR` + number `42` → issue ID `TR-42`
3. Read issue via YouTrack MCP (`get_issue` with the constructed issue ID)
4. Display issue summary:

```
=== Planning: AI-26 ===

Title: Upgrade plan skill via skill-creator
State: In Progress | Priority: 1-High | Type: Task
Repo: tooling

## Objective
[Issue objective from description]

## Subtasks
- [ ] Subtask 1 (1.5 hrs)
- [ ] Subtask 2 (2.0 hrs)

Time Estimate: 3.5 hrs
Plan File: [path if set, or "Not yet created"]
```

**If branch does NOT match `[prefix]-XXXX-*`:**
STOP with message:
```
Not on a tracked branch (e.g., tr-XXXX-*, ai-XXXX-*).

Run /kickoff-issue [ISSUE-ID] first to create a branch from a YouTrack issue.
```

---

## Step 2: Scope Clarification (one question at a time)

Review the issue's objective, description, and subtasks for completeness. Identify anything that is:
- **Incomplete**: missing success criteria, vague subtask descriptions
- **Ambiguous**: multiple interpretations possible
- **Missing scope boundaries**: unclear what's in/out of scope

**Ask ONE question at a time.** Wait for the answer. Repeat until objective, scope, and details are clear.

**Circuit breaker:** Maximum **5 clarification questions**. If scope is still unclear after 5, present what you know and what's still ambiguous, then ask: "Proceed with these assumptions, or continue clarifying?" This prevents infinite exploration loops.

Examples of good clarification questions:
- "The subtask 'Update query layer' doesn't specify which queries. Should this cover all trip queries or only active trips?"
- "The objective mentions 'soft-delete' but no restore endpoint. Is restore in scope?"
- "Should the API return 404 for soft-deleted items, or a different status code?"

**When everything is clear**, say so:
```
Scope is clear. No remaining ambiguities.
```

If the issue was already complete and unambiguous, say:
```
Issue is well-defined — no clarification needed. Proceeding.
```

---

## Step 3: Suggest YouTrack Issue Edits

Once clarification is complete, review whether the issue needs updates based on what was learned:

- Updated objective (if refined during Q&A)
- Updated or added subtasks (if new ones discovered)
- Updated time estimates (if scope changed)
- Clarified descriptions (if ambiguities were resolved)

**If edits are needed**, present them:
```
Based on our clarification, I suggest these updates to TR-42:

1. Update objective: "..." → "..."
2. Add subtask: "Handle 404 for soft-deleted items" (0.5 hrs)
3. Update time estimate: 3.5 hrs → 4.0 hrs

Apply these edits to YouTrack?
```

Wait for approval. If approved, update the issue via YouTrack MCP.

**If no edits needed**, say:
```
Issue already reflects the clarified scope. No edits needed.
```

---

## Step 4: High-Level Plan (optional, user chooses)

Ask:
```
Would you like a high-level strategy overview before the detailed plan?
```

**If no**, proceed directly to Step 5.

### Standard Mode

**If yes**, present a concise strategic overview (one screen max):

```markdown
## Strategic Overview: TR-42 — [Title]

### Problem Statement
[What problem are we solving and why]

### Approach
[High-level strategy — e.g., "Add is_deleted flag to trips table, filter in query layer, add restore endpoint"]

### Key Design Decisions
1. [Decision and rationale]
2. [Decision and rationale]

### Phases
1. Foundation — [what]
2. Implementation — [what]
3. Hardening — [what]

### Scope Boundaries
**In scope:** [list]
**Out of scope:** [list]
```

Wait for approval or edits before proceeding.

### Deep Mode: Approach Comparison

**If deep mode AND user wants high-level overview**, generate **2-3 distinct approaches** instead of one. Each approach should represent a genuinely different architectural strategy, not minor variations.

```markdown
## Approach Comparison: TR-42 — [Title]

### Problem Statement
[What problem are we solving and why]

### Approach A: [Name]
**Strategy:** [2-3 sentences]
**Pros:** [list]
**Cons:** [list]
**Effort:** [relative estimate]
**Risk:** [key risk]

### Approach B: [Name]
**Strategy:** [2-3 sentences]
**Pros:** [list]
**Cons:** [list]
**Effort:** [relative estimate]
**Risk:** [key risk]

### Approach C: [Name] (if genuinely distinct)
**Strategy:** [2-3 sentences]
**Pros:** [list]
**Cons:** [list]
**Effort:** [relative estimate]
**Risk:** [key risk]

### Recommendation
Approach [X] because [rationale]. Approach [Y] would be better if [condition].

### Scope Boundaries
**In scope:** [list]
**Out of scope:** [list]
```

**Rules for approach generation:**
- Each approach must be architecturally distinct (not "same thing with different variable names")
- If only one approach makes sense, say so: "Only one viable approach for this feature. Deep mode approach comparison is not applicable."
- Include a clear recommendation with rationale
- Wait for Craig to choose before proceeding

Wait for approval of the selected approach before proceeding.

---

## Step 5: Reviewer Persona Risk Checklist

Launch the repo's review personas using the ask-panel two-round debate pattern to generate a **confidence-tiered planning checklist**. This is NOT a code review — it's a risk anticipation exercise.

> **Note:** This step queries the NLM notebook in `review_config.nlm_notebooks.primary`. If unavailable, the step proceeds without NLM context — this is non-blocking.

### Pre-Launch Validation

Run these checks in order before launching any personas:

1. **Read `review_config`** from `.claude/repo_skill_config.json`. If absent: STOP — "No review_config found in repo_skill_config.json."
2. **Check `review_config.personas`** is a non-empty array. If key is missing or array is `[]`: STOP — "review_config.personas is empty — no reviewer personas configured."
3. **Count personas.** If more than 6: select top 6 by `always_launch: true` first, then alphabetical. State the cap before proceeding: "Capping panel at 6 personas for context/cost control: [list]."
4. **Cost warning.** Display and wait for explicit approval:
   ```
   Launching [N] reviewer personas in two-round Opus debate (Round 1 parallel + Round 2 synthesis).
   This consumes significantly more credits than single-round launches.
   Proceed? (y/n)
   ```
   Do not launch until Craig approves.

### Round 1 — Parallel Persona Launches

**Question classification:** ARCHITECTURE (always — never Debug, which would narrow the panel)

Launch all selected personas **simultaneously** via Task tool with `model: "opus"`.

For each persona, read its file from `[review_config.persona_source]/[persona.id].md`:
- If the file does not exist: log "[persona-name]: persona file not found at [path] — coverage gap" and continue with remaining personas. Do not STOP.

Each persona gets this prompt (using the schema defined in Task 1.2):

```
You are reviewing a PLANNED FEATURE (not existing code) for potential risks and requirements in your domain.

## Feature Scope
Issue: [PROJECT-ID] — [Title]
Objective: [objective from issue]
Subtasks: [list from issue]
Repo: [repo name from repo_skill_config.json]

## Your Task
Based on this feature scope, identify potential risks, requirements, and edge cases in YOUR domain.

## Scoping Rule
If this feature is ENTIRELY OUTSIDE your domain of expertise, respond with:
"Outside my expertise — [brief reason]"
and stop. Do NOT force-fit concerns.

## Output Format

Structure your response exactly as follows:

### [Your Persona Name]

**Domain Confidence:** [HIGH / MEDIUM / LOW]
Rationale: [1 sentence — how well does this feature fall within your domain?]

**Risk Items:**
| Risk / Requirement | Severity | Evidence |
|--------------------|----------|----------|
| [Specific, actionable item] | HIGH/MED/LOW | [Why this matters for THIS feature] |

**Out of scope for my domain:** [Items explicitly not covered, or "None"]

Rules:
- Domain Confidence: your self-assessment of domain relevance (HIGH = core domain, MEDIUM = adjacent, LOW = tangential)
- Severity: how serious the risk is if unaddressed — independent of domain confidence
- Maximum 10 items in the Risk Items table (prioritize by severity — HIGH first)
- Empty table is valid if you are in-domain but see no risks
- Be specific to THIS feature — no generic boilerplate
```

**Collect all responses before proceeding.**

- If a persona's Task tool call fails (error/timeout): log "[persona-name]: Task failed — coverage gap" — this is NOT the same as "Outside my expertise" and different retry logic applies.
- **Minimum threshold:** If fewer than 2 personas return substantive responses (non-"outside domain"), skip Round 2 and present raw Round 1 outputs with note: "Round 2 skipped — insufficient Round 1 responses."

### Round 2 — Cross-Examination Synthesis

**Two distinct skip conditions (handle separately):**

- **Skip — "No items":** All personas returned "Outside my expertise" with no risk items. Skip Round 2. Invoke the "All Personas Return No Items" edge case handler.
- **Do NOT skip — "All answers agree":** Agreement across disjoint risk domains (e.g., security reviewer and async reviewer both flag the same item) is structural, not consensus. This condition is explicitly disabled for risk checklists. Remove it from Step 5 skip logic.

**If Round 2 proceeds:**

1. **Context budget:** If combined Round 1 responses exceed 8,000 tokens, truncate each persona response to its top 5 items by severity (HIGH first) before passing to Round 2. State the truncation in output: "Round 1 responses truncated to top 5 items per persona for context budget."
2. **Launch synthesis agent:** Single Task tool call with `model: "opus"`. Input: original feature scope + all Round 1 responses (structured tables) + cross-examination instructions:

```
You are moderating an expert panel risk review. Below are independent risk assessments from specialist personas.

## Feature Scope
[Issue ID, title, objective, subtasks, repo]

## Round 1 Persona Responses
[All persona responses in full]

## Your Task

Examine the responses for:

1. **Contradictions** — Where do personas disagree? Who has stronger evidence?
2. **Blind Spots** — What did no persona address? Any cross-domain risks missed?
3. **Confidence Adjustments** — Did any persona overclaim or undersell domain fit?
4. **Tier Assignment** — For each risk item, assign a priority tier:
   - HIGH: flagged by 2+ personas independently, OR elevated as a blind spot, OR severity increased by cross-examination
   - MEDIUM: flagged by exactly 1 persona with HIGH domain confidence AND severity HIGH or MED
   - LOW: flagged by exactly 1 persona with MEDIUM/LOW domain confidence OR LOW severity

5. **High-Risk Domains** — List the implementation risk domains where a subtle implementation mistake would be hard to catch without expert review (e.g., auth patterns, external API contracts, database schema changes, async/sync mixing). These will be used after the plan is built to annotate high-risk tasks with post-execution panel review.

Output as a separate section after the tiered checklist:
```
### High-Risk Domains
- [domain name]: [1-line rationale citing which personas flagged it and why]
```
If no high-risk domains were identified, output:
```
### High-Risk Domains
None
```

Produce the consolidated checklist in the tiered format specified in the output template, followed by the High-Risk Domains section.
```

3. **If synthesis agent fails:** Fall back to presenting raw Round 1 responses organized by persona (current behavior) with note: "Cross-examination unavailable — presenting individual responses."

### Consolidate and Write Checklist

After Round 2 completes (or fallback), build the confidence-tiered checklist and:
1. **Display in conversation** for Craig to review
2. **Write into the plan `.md` file** under `## Reviewer Checklist` — this is required, not optional

Output format:

```markdown
## Reviewer Checklist

**Panel:** [N] personas | **Rounds:** [1 or 2] | **NLM:** [queried / unavailable / skipped]

### High Priority — Multi-Persona Consensus or Elevated

| Risk / Requirement | Flagged By | Domain Confidence | Severity |
|--------------------|-----------|-------------------|----------|
| [item] | [Persona A, Persona B] | HIGH | HIGH |

### Medium Priority — Single Persona, High Confidence

| Risk / Requirement | Flagged By | Domain Confidence | Severity |
|--------------------|-----------|-------------------|----------|
| [item] | [Persona A] | HIGH | MED |

### Low Priority

| Risk / Requirement | Flagged By | Domain Confidence | Severity |
|--------------------|-----------|-------------------|----------|
| [item] | [Persona B] | MEDIUM | LOW |

### Cross-Examination Findings

**Contradictions:** [list or "None"]
**Blind Spots:** [list or "None"]
**Confidence Adjustments:** [list or "None"]

### Domains With No Items

- [Persona name]: outside their domain for this feature
```

Present the checklist to the user. Ask if any items should be added, removed, or modified before building the detailed plan.

---

## Step 5b: Localization Map (Deep Mode Only)

**Skip this step in standard mode.** In deep mode, build a structured map of the codebase before writing the plan. This grounds every task in concrete code locations rather than abstract descriptions.

### Hierarchical Narrowing

Systematically narrow from broad to specific:

**Level 1 — File Identification:**
Use Glob and Grep to identify ALL files that will be read or modified for this feature. Categorize each:
```
Files to MODIFY:
  app/queries/trips.py — query layer (add soft-delete filter)
  app/models/trip.py — model (add is_deleted field)
  alembic/versions/ — new migration file

Files to READ (context only):
  app/api/trips.py — endpoint layer (calls query functions)
  tests/test_trips.py — existing test patterns
```

**Level 2 — Function/Class Narrowing:**
For each file to modify, identify the specific functions, classes, or sections:
```
app/queries/trips.py:
  get_active_trips() — line 23-45: add is_deleted=False filter
  get_trip_by_id() — line 47-62: add soft-delete check
  (new) soft_delete_trip() — add after line 62

app/models/trip.py:
  class Trip — line 12-38: add is_deleted Column
```

**Level 3 — Integration Point Mapping:**
For each modified function, trace its callers and consumers:
```
get_active_trips() called by:
  → app/api/trips.py:list_trips (line 15) — no change needed (filter is transparent)
  → app/services/trip_service.py:get_dashboard_trips (line 42) — verify still works

soft_delete_trip() will be called by:
  → app/api/trips.py:delete_trip (line 78) — change from hard delete to soft delete
```

### Output: Localization Map

Present the map to the user for review:
```
=== Localization Map: TR-42 ===

Files to modify: 3
Functions to modify: 4
New functions: 1
Integration points traced: 5
Files for context: 2

[Full map details above]

This map will be embedded in the plan. Each task will reference specific locations from this map.

Proceed to plan development?
```

The localization map is included in the plan as an appendix section ("Localization Map") and referenced by tasks in their "Relevant Files" sections. This replaces ad-hoc file exploration in Step 6.

---

## Step 6: Detailed Plan Development

### Explore Codebase First

Before writing the plan, explore the relevant codebase:
- Use Read, Glob, Grep to understand current state
- Check relevant file paths and existing patterns
- Understand integration points
- Identify existing code that will be modified

### Build the Plan

Build the detailed implementation plan that **must address every item** from the reviewer checklist.

**Template:** Read `tool-library/plan/PLAN_TEMPLATE.md` in the current repo for the canonical plan structure. Follow it exactly — consistent format makes plans faster to review.

**Save to:** `plans/[PROJECT-ID]-branch-slug.md`
- Use the full branch name as the slug (e.g., `TR-42-soft-delete-queries.md`, `TRL-15-auth-flow.md`)
- The issue number is NOT zero-padded in the filename (use `TR-42`, not `TR-0042`)

### Evaluate Optional Sections

The template has sections marked `<!-- OPTIONAL -->` with inclusion criteria. Before writing, evaluate each one against the issue scope and present your recommendations:

```
Based on TR-XX, I recommend including/skipping these optional sections:

- Key Design Decisions: [INCLUDE/SKIP] — [reason]
- Reviewer Checklist: [INCLUDE/SKIP] — [reason]
- Checklist Coverage Matrix: [INCLUDE/SKIP] — [reason]
- Rollback Plan: [INCLUDE/SKIP] — [reason]
- Risk Warnings (per-task, from `high_risk_flags`): [INCLUDE/SKIP] — [reason]

Proceed with these choices, or adjust?
```

Wait for approval before writing the plan. Strip all HTML comments from the generated plan — they are template guidance, not plan content.

### Phase Structure

Use as many or few phases as the feature actually needs:
- **Simple features** (add a field, new endpoint): 1 phase is fine
- **Medium features** (new feature area, refactor): 2 phases
- **Large features** (new system, cross-cutting change): 3+ phases
- Name phases descriptively — don't force generic names if they don't fit

### Validate Before Saving

Run all four checks before writing the file. These replace the post-hoc persona review — catching issues during construction is always better than after.

**Check 1 — Preconditions**
For each task, ask: *"Can this task execute given only the explicit outputs of its dependency tasks?"*
Flag any task that assumes knowledge, files, state, or artifacts not explicitly produced by a prior task.
Common failures: assuming a migration was run (not just created), assuming an import exists, assuming a config value is set.

**Check 2 — Acceptance Criteria Integrity**
For each acceptance criterion, ask: *"Could this criterion pass while the task is actually incomplete or broken?"*
Flag criteria that are too loose. Common failures: "build succeeds" without running tests, test names listed without runnable commands, "no errors" without verifying correct behavior.

**Check 3 — Fresh Session Executability**
For each task, ask: *"Does the specification contain enough detail for a fresh Claude session to implement without asking clarifying questions?"*
Flag missing file paths, ambiguous requirements, undefined terms, or implicit context. The plan must be self-contained — no prior conversation knowledge assumed.

**Check 4 — Checklist Coverage**
For each item from the Step 5 reviewer checklist, ask: *"Is this item addressed correctly in the plan — not just mapped to a task, but actually resolved with a concrete specification?"*
Flag items that are mentioned but not actually specified (mapped without implementation guidance).

**Structural checks:**
- [ ] Zero code — specifications only, no implementation code
- [ ] All relevant file paths with line numbers
- [ ] All design decisions explained with rationale
- [ ] Follows template structure from `tool-library/plan/PLAN_TEMPLATE.md`
- [ ] Changelog section present at bottom of file

Save the plan using the Write tool.

### Apply Panel Review Annotations

After saving the plan, apply Panel Review annotations to high-risk tasks. This is done by the **orchestrating Claude instance only** — no new Opus call:

1. Review the "High-Risk Domains" list from the Round 2 synthesis agent output (Step 5). If Step 5 was skipped or returned "None", skip this step — all tasks keep `**Panel Review:** no`.
2. For each task in the plan, read its Description and Specification.
3. If the task touches one or more domains from the High-Risk Domains list, update the task block using the Edit tool:
   - Change `**Panel Review:** no` → `**Panel Review:** post-exec`
   - Change `**Panel Review Reason:** N/A` → `**Panel Review Reason:** [1-line reason citing the specific domain and why it's high-risk for this task]`
4. Annotation criteria: task must touch auth, database schema, async patterns, external API contracts, or any domain explicitly listed by the synthesis agent. Do not annotate tasks outside these areas — annotation means the cost of a subtle mistake justifies an Opus panel review.
5. Only the orchestrating Claude instance writes these annotations to the plan file — do not delegate to a subagent.

---

## Step 6b: PM Review Session

After saving the plan, run a structured Q&A panel that lets Craig interrogate the plan at the PM level. Craig doesn't need to spot technical issues — the personas do that. Craig's job here is risk tolerance and scope decisions.

### Process

1. **Present the option:**
   ```
   Plan saved to plans/TR-42-soft-delete-queries.md

   Ready for PM review session. I'll ask the personas three standard
   questions about the plan, then open the floor for your questions.

   Options:
   1. Run PM review session (recommended)
   2. Skip — proceed directly to user review
   ```

2. **If Craig chooses review, run standard questions via two-round ask-panel:**

   **Panel selection:** Use personas that contributed High or Medium checklist items in Step 5 (use attribution from the `Flagged By` column). If that set is empty, use all `review_config.personas`.

   **Cost warning:** Display before launching:
   ```
   Launching PM review with [N] personas, two-round Opus (Round 1 + synthesis).
   Proceed? (y/n)
   ```
   Wait for explicit approval before proceeding.

   **Question classification: REVIEW** (focused problem list, not architectural trade-off analysis).

   **Round 1 — Parallel persona launches:**

   Submit all 3 standard questions together to each persona in a single Task tool call with `model: "opus"`. Each persona responds to all 3 in one structured response.

   **Question 1 — Risk:**
   ```
   Review this plan and identify the top 3 risks that are not fully
   mitigated. For each risk, state: what could go wrong, how likely,
   and what the impact would be. Be specific to this plan — no
   generic advice.
   ```

   **Question 2 — Success Definition:**
   ```
   Review each acceptance criterion in this plan. Identify any criterion
   that could pass while the underlying behavior is still broken or
   incomplete. Flag false-pass criteria with a concrete failure scenario.
   ```

   **Question 3 — Testing Gaps:**
   ```
   Identify behaviors in this plan that cannot reasonably be tested at
   the unit or integration level at this stage. For each gap, state
   what kind of test would cover it (e2e, manual, instrumented) and
   why it's appropriate to defer.
   ```

   Collect all responses before proceeding. If a persona's Task call fails: log "[persona-name]: Task failed — coverage gap."

   **Round 2 — Cross-examination synthesis:**

   Skip condition: if all personas returned no items across all 3 questions, skip Round 2 and present raw Round 1 outputs. Unlike Step 5, the "all answers agree" skip IS valid here — consensus on plan quality is meaningful for PM review. If all personas agree, note "Panel consensus" and skip synthesis.

   If Round 2 proceeds: launch single synthesis agent Task with `model: "opus"`. Input: plan content + all Round 1 responses + instructions to:
   1. Reconcile conflicting risk assessments across personas
   2. Identify any risk, false-pass criteria, or testing gap that multiple personas flagged
   3. Produce consolidated PM review output:

   ```
   === PM Review: [Issue ID] ===

   ## Top Risks
   1. [Risk] — [likelihood/impact] — flagged by [persona(s)] — [mitigation or acceptance decision needed]
   2. [Risk] — [likelihood/impact] — flagged by [persona(s)] — [mitigation or acceptance decision needed]

   ## Acceptance Criteria Flags
   - Task X.Y criterion Z: could false-pass because [scenario] — flagged by [persona]
   [or: All criteria are sound]

   ## Deferred Testing Registry
   - [Behavior]: not unit-testable because [reason] → covered by [e2e/manual/instrumented]
   [or: No deferred testing — all behaviors covered at unit level]

   ## Panel Consensus / Contradictions
   [Agreements across personas, or conflicts that Craig should resolve]
   ---
   Your turn. Ask the panel anything about this plan.
   (or type 'done' to proceed)
   ```

3. **Open Q&A — single-round routing:**

   Craig asks free-form questions directed at the panel or a specific persona. Route each follow-up question to the single most relevant persona from the contributing set. One Task tool call per follow-up, `model: "opus"`. **No cross-examination for follow-ups** — open Q&A uses single-round routing to one persona; full two-round debate is not run per follow-up question.

   After each answer, ask: "Any more questions, or ready to proceed?"

4. **Track plan changes:**

   Count every spec change, new task, or acceptance criteria revision triggered by the Q&A. After Craig is done, report the tally:

   ```
   Q&A triggered X plan changes.
   ```

   **If 3 or more changes:** surface a warning before proceeding:
   ```
   ⚠️ 3+ plan changes from Q&A — this may indicate the plan was built
   with insufficient domain input during construction. The plan is still
   valid to proceed with, but worth noting as a process signal.

   Proceeding to update the plan now.
   ```

   This is a warning only — do not stop or require action. It is a signal for process improvement, not a gate.

5. **Update the plan with Q&A outputs:**

   After Craig is done, update the plan with these explicitly formatted sections. Both sections are sourced from the Round 2 synthesis agent output — do not substitute ask-panel's "Bottom Line" for either section.

   **Risk Register** — source: synthesis agent output on risks from all 3 standard questions:

   ```markdown
   ## Risk Register

   | Risk | Identified By | Confidence | Craig's Decision |
   |------|--------------|------------|-----------------|
   | [risk] | [persona(s)] | HIGH/MED/LOW | accepted / mitigated / deferred |
   ```

   - `Confidence` column: from the synthesis agent's calibration of each risk (HIGH/MED/LOW)
   - `Craig's Decision`: filled in interactively — prompt Craig for each risk before writing
   - If no risks identified: write "No risks identified — all criteria sound" (not an empty table)

   **Deferred Testing Registry** — source: synthesis agent output on Question 3 (testing gaps):

   ```markdown
   ## Deferred Testing Registry

   - [Behavior]: not unit-testable because [reason] → covered by [e2e/manual/instrumented]
   ```

   - If no deferred testing: write "No deferred testing — all behaviors covered"

   - Apply any spec changes Craig requested during Q&A

   These sections are part of the plan's external memory — a fresh execution session knows exactly what risks were accepted and what testing was intentionally deferred.

7. **If Craig skips:** Proceed directly to Step 7.

**Why this matters:** The annotation cycle assumed Craig could spot technical issues in a plan he's not equipped to review. This session plays to his actual skills — risk tolerance, scope decisions, and defining done. The personas are construction participants — their answers directly update the plan. There is no limit on questions — asking more is always better than asking less.

---

## Step 7: User Review

Present the plan to the user with:

```
=== Plan Ready for Review ===

Plan: plans/[PROJECT-ID]-branch-slug.md

## PM Review Summary
- Risks identified: [N] — [accepted/mitigated/deferred breakdown]
- Acceptance criteria flags: [N] — [resolved/deferred]
- Deferred testing items: [N]
- Plan changes from Q&A: [N]

## Checklist Coverage
All [N] checklist items are addressed in the plan.
[Or: X items still need resolution — see details below]

## Panel Review Annotations
[List all tasks with `**Panel Review:** post-exec`, or "No tasks flagged for post-execution panel review"]

Format:
- Task X.Y — [Panel Review Reason from task block]

You can modify annotations before finalizing:
- "add annotation to Task X.Y: [reason]" — adds `post-exec` to that task
- "remove annotation from Task X.Y" — reverts to `no`

After you confirm, I'll apply any changes to the plan file via Edit tool before finalizing.

## Open Questions
[Any remaining questions, or "None"]

Review the plan and let me know:
1. Ready for execution
2. Needs changes (tell me what)
3. Needs another review round
```

---

## Step 8: Finalize

Once the user approves:

1. **Update YouTrack issue:**
   - Set `Plan File` custom field to the plan path (e.g., `plans/TR-42-soft-delete-queries.md`) via MCP
   - Add a comment to the issue with a plan summary:
     ```
     Plan created: plans/TR-42-soft-delete-queries.md

     Phases: [count] | Tasks: [count] | Reviewer checklist: [count] items addressed
     ```

2. **Update changelog** in plan file (if any final changes were made)

3. **Output:**
```
=== Plan Ready ===
Plan: plans/[PROJECT-ID]-branch-slug.md
Issue: [PROJECT-ID] updated with plan file link

Next step: Start a fresh session and run /execute-plan plans/[PROJECT-ID]-branch-slug.md
```

---

## Edge Cases

### YouTrack MCP Not Available
STOP: "YouTrack MCP server not connected. Check MCP configuration."

### Issue Has No Subtasks
Proceed — the clarification step (Step 2) will identify needed subtasks, and Step 3 will suggest adding them to the issue.

### All Personas Return "No Items"
This is valid for very simple features. Skip the checklist coverage matrix and note:
```
All reviewer personas confirmed: feature is outside specialized risk domains. Standard implementation practices apply.
```
Build the plan without a checklist section but still include acceptance criteria on every task.

### User Wants to Skip High-Level Plan
Proceed directly from Step 3 to Step 5. The strategic overview section in the final plan will be populated from the issue objective and clarification Q&A.

### Plan Already Exists for This Issue
If `Plan File` is already set on the issue:
```
A plan already exists for TR-XX: [path]

Options:
1. Review and revise the existing plan
2. Start fresh (overwrites existing plan)
3. Cancel
```

### Branch Is Not In Progress
If the issue state is not "In Progress":
```
Warning: TR-XX is in [state], not In Progress.
Run /kickoff-issue TR-XX first to set up the branch properly.
```

---

## Rules

1. **Always use Opus** — planning is the most critical step. All personas also launch on Opus. No model switching anywhere in the planning workflow.
2. **One question at a time** during clarification — ADHD accommodation, prevents overwhelm.
3. **Every checklist item must be addressed** — the coverage matrix is the contract.
4. **Personas are construction participants** — Step 6b runs a structured Q&A panel after the plan is drafted. Standard questions cover risk, success definition, and deferred testing. Craig's ad-hoc questions are unlimited. Their answers directly update the plan (Risk Register, Deferred Testing Registry, spec changes). 3+ plan changes is a process warning, not a gate.
5. **No code in plans** — specifications only, always.
6. **Self-contained** — fresh session can execute without asking "what were we doing?"
7. **Changelog** — every plan includes a Changelog section at the bottom; every revision is tracked.
8. **YouTrack is source of truth** — issue edits go back to YouTrack, not just the plan file.
9. **Wait for user approval** at every gate (Steps 3, 4, 5, 5b, 6b, 7) — never auto-proceed on decisions.
10. **Deep mode is opt-in** — only activated with `/plan deep`. Adds localization map (Step 5b) and approach comparison (Step 4). Standard mode skips these.

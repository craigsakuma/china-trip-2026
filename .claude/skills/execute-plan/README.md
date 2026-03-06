# /execute-plan - Task-by-Task Plan Execution

Execute structured implementation plans created by `/plan`, working through tasks incrementally with progress tracking and pause/resume capability.

## Purpose

After creating a detailed plan with `/plan`, you need to exit the session to clear context. When you start fresh to implement the plan, `/execute-plan` guides Claude through task-by-task execution with:

- **Real-time progress tracking** - Plan file updates as work progresses
- **ADHD-friendly workflow** - Natural pause points after each task
- **Blindspot awareness** - Warnings display for HIGH/MEDIUM risk tasks
- **Dependency checking** - Prevents out-of-order execution
- **External memory** - Plan file survives context loss
- **Auto-resume** - Picks up from last incomplete task

## Usage

```bash
/execute-plan path/to/plan.md
```

**Parameter:**
- `path/to/plan.md` (required) - Path to plan file (relative or absolute)

**Examples:**

```bash
# Relative path from current directory
/execute-plan plans/feature-implementation-2026-02-05.md

# Relative path from docs
/execute-plan docs/plans/database-migration.md

# Absolute path
/execute-plan ~/Desktop/quick-fix-plan.md
```

## Workflow Integration with /plan

### 1. Create Plan (Context-Heavy Session)

```bash
/plan "Implement user authentication system"
```

- Claude explores codebase, reads files, researches patterns
- Builds detailed implementation plan with phases, tasks, acceptance criteria
- Saves plan to file (e.g., `plans/auth-system-2026-02-05.md`)
- Plan includes: strategic overview, task breakdown, dependencies, blindspot warnings

### 2. Exit Session to Clear Context

- Type `exit` or close session
- Plan file persists (external memory)
- Ready for fresh implementation session

### 3. Execute Plan (Fresh Session)

```bash
/execute-plan plans/auth-system-2026-02-05.md
```

- Claude reads plan file, parses structure
- Displays strategic overview and phase breakdown
- Executes tasks one-by-one in order
- Updates plan file with progress (🟡 in progress, ✅ complete)
- Checks off acceptance criteria as verified

### 4. Pause and Resume (As Needed)

**During execution, when prompted:**
```
Continue to next task? (y/n)
```

**To pause:** Say "n"
- Current state saved to plan file
- Display shows completed tasks, next task, resume command
- Exit session

**To resume (new session):**
```bash
/execute-plan plans/auth-system-2026-02-05.md
```
- Auto-detects progress from plan file
- Skips completed tasks (✅)
- Resumes from first incomplete task (⬜ or 🟡)

## What Happens During Execution

### Step 0: Validation
- Checks plan file exists
- Extracts metadata (status, effort, created date)
- Requests confirmation to proceed

### Pre-Work: Load Context
- Reads plan file completely
- Loads DEVELOPER_PROFILE.md for blindspot context
- Loads PATTERN_LIBRARY.md to avoid anti-patterns
- Parses task structure (phases, dependencies, acceptance criteria)

### Step 1: Plan Overview
- Displays strategic summary (problem, goals, scope)
- Shows phase breakdown with task counts
- Identifies parallelization opportunities
- Summarizes blindspot warnings (HIGH/MEDIUM/LOW risk counts)

### Step 2: Task Detection
- Iterates through tasks in order (1.1, 1.2, 2.1, etc.)
- Skips completed tasks (✅)
- Finds first incomplete task (⬜ or 🟡)
- Checks dependencies before selecting task
- Warns if dependencies not met (skip/wait/override options)

### Step 3: Task Execution
1. **Display task details** - Description, subtasks, acceptance criteria, blindspot warnings
2. **Ask to start** - "Start this task? (y/n/skip)"
3. **Mark in progress** - Update plan file: ⬜ → 🟡
4. **Read relevant files** - Load files for context
5. **Execute subtasks** - Work through guidance incrementally
6. **Verify acceptance criteria** - Check off each criterion in plan file
7. **Mark complete** - Update plan file: 🟡 → ✅
8. **Prompt to continue** - "Continue to next task? (y/n)"

### Step 4: Pause or Completion
- **If paused:** Display summary (completed/next tasks), show resume command
- **If complete:** Update plan status to ✅, display completion summary, suggest next steps

## Example Execution Flow

```bash
$ /execute-plan plans/feature-auth-2026-02-05.md

Plan File: plans/feature-auth-2026-02-05.md
Status: ⬜ Not Started
Effort: Large lift (6-8 hours)
Created: 2026-02-05

Execute this plan? (y/n)
> y

# Strategic Overview displayed...
# Phase breakdown shown...
# Blindspot summary: 🚨 2 HIGH, ⚠️ 3 MEDIUM, ✅ 8 LOW

─────────────────────────────────────────
📋 Task 1.1: Create Auth Service Module
─────────────────────────────────────────
Status: ⬜ Not Started
Dependencies: None

🚨 HIGH RISK - Supabase auth integration (magic zone)
...

Start this task? (y/n/skip)
> y

# Task execution...
# Files read, code written, tests run...
# Acceptance criteria checked off...

✅ Task 1.1 completed!
Progress: 1/13 tasks complete (8%)

Continue to next task? (y/n)
> n

⏸️ Execution Paused

✅ Completed: 1 task
  - Task 1.1: Create Auth Service Module

⬜ Next: Task 1.2 - Implement Login Endpoint

To resume: /execute-plan plans/feature-auth-2026-02-05.md
```

## Plan File Format

Plans created by `/plan` follow this structure:

```markdown
# Implementation Plan: Feature Name

**Created:** 2026-02-05
**Status:** ⬜ Not Started
**Estimated Effort:** Medium lift (3-4 hours)

## Strategic Overview
- Problem Statement
- Primary Goal
- Secondary Goals
- Scope (In/Out)
- Success Criteria

## Task Breakdown

### Phase 1: Foundation

#### Task 1.1: Task Name

**Status:** ⬜ Not Started
**Dependencies:** None
**Can parallelize:** No

**Description:** What needs to be done

**Subtask guidance:**
- Step 1
- Step 2

**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2

**Craig's Blindspot Warnings:**
✅ LOW RISK - Brief explanation

**Relevant Files:**
- file/path.py lines 10-50
```

## Features

### Progress Tracking
- Task status emojis: ⬜ Not Started → 🟡 In Progress → ✅ Completed
- Acceptance criteria checkboxes: `[ ]` → `[x]`
- Real-time plan file updates (external memory)
- Progress percentage after each task

### Dependency Management
- Parses "Dependencies:" field from each task
- Verifies dependencies completed before execution
- Warns if dependencies not met
- Offers skip/wait/override options

### Blindspot Awareness
- Displays Craig's blindspot warnings from DEVELOPER_PROFILE.md
- Risk levels: 🚨 HIGH / ⚠️ MEDIUM / ✅ LOW
- References specific blindspot areas (Supabase auth, TypeScript, etc.)
- Provides extra context for magic zones

### ADHD-Friendly Design
- Natural pause points after every task
- Clear "what's next" at each step
- Visual progress indicators (checkboxes, percentages)
- Easy resume without manual navigation
- One task at a time (no overwhelming parallelization)

### Pause/Resume
- Pause anytime by saying "n" to "Continue?"
- Plan file saves current state
- Resume command displayed with exact path
- Auto-detects progress in new session
- Skips completed work automatically

## When to Use

**Use /execute-plan when:**
- You have a detailed plan file from `/plan`
- Starting fresh session after planning
- Resuming work after a break
- Want structured, incremental execution
- Need progress tracking and external memory

**Don't use /execute-plan when:**
- You don't have a plan file (use `/plan` first)
- Making quick one-off changes (just do them)
- Exploring or researching (no implementation yet)

## Tips

1. **Always exit after /plan** - Clear context before executing
2. **Trust the auto-resume** - Just run the command, it detects progress
3. **Pause liberally** - Every task is a natural breakpoint
4. **Read blindspot warnings** - HIGH/MEDIUM risks need attention
5. **Verify acceptance criteria** - Don't skip verification steps
6. **Update plan manually if needed** - Plan file is just markdown

## Troubleshooting

**Plan file not found:**
- Check path is correct (relative or absolute)
- Verify file exists: `ls -la path/to/plan.md`

**Tasks not detected:**
- Ensure plan follows format (see Plan File Format above)
- Check task status fields: `**Status:** ⬜ Not Started`
- Verify acceptance criteria format: `- [ ] Criterion`

**Dependencies blocking:**
- Review dependency task IDs
- Verify dependency tasks marked ✅ Completed
- Override if dependencies incorrect (option 3)

**Checkboxes not updating:**
- Edit tool may fail on complex plan structures
- Manually update plan file as fallback
- Simplify task structure if needed

**Progress not detected on resume:**
- Check plan file has status updates (⬜/🟡/✅)
- Verify file saved correctly (check timestamps)
- Re-run with fresh plan file if corrupted

## Related Skills

- `/plan` - Create detailed implementation plans (prerequisite)
- `/daily-audit` - End-of-day commit analysis and issue generation
- `/pre-commit` - Pre-commit safety net for blindspot checking
- `/save-checkpoint` - Save session state for later restore

## Model

**Default:** Sonnet

Implementation work requires code generation, testing, and problem-solving. Sonnet balances capability with cost for execution tasks.

## Version

1.0.0 (2026-02-05)

---

Co-authored-by: Claude

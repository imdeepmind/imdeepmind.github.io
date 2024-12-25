---
sidebar_position: 6
---

# HEAD and reflog

## HEAD in Git

In Git, **HEAD** is a pointer that refers to the current branch or commit your working directory is based on. It represents the current state of your repository and plays a crucial role in navigating and managing changes.

1. **HEAD as a Pointer**:

   - **HEAD** typically points to the tip (latest commit) of the current branch.
   - Example: If you are on the `main` branch, `HEAD` points to the latest commit on `main`.

2. **Detached HEAD**:

   - A detached HEAD occurs when `HEAD` points directly to a commit instead of a branch.
   - This can happen when you check out a specific commit:
     ```bash
     git checkout <commit-hash>
     ```
   - Changes made in a detached HEAD state are not linked to any branch and need to be explicitly committed to a branch if you want to retain them.

3. **HEAD and Branches**:

   - When you switch branches using `git checkout` or `git switch`, the HEAD pointer moves to the latest commit of the branch you switch to.

4. **Symbolic Reference**:
   - HEAD is a symbolic reference, meaning it indirectly refers to a commit through a branch name. For example:
     ```bash
     ref: refs/heads/main
     ```

### Commands Involving HEAD

1. **Viewing HEAD**:

   ```bash
   cat .git/HEAD
   ```

   This will display the branch or commit that HEAD points to.

2. **Resetting HEAD**:

   - Reset HEAD to a previous commit:
     ```bash
     git reset <commit-hash>
     ```
   - Reset HEAD and the working directory:
     ```bash
     git reset --hard <commit-hash>
     ```

3. **Reattaching HEAD**:

   - To reattach a detached HEAD to a branch:
     ```bash
     git switch <branch-name>
     ```

4. **Checking Out a Commit with Detached HEAD**:

   ```bash
   git checkout <commit-hash>
   ```

5. **HEAD^ and HEAD~**:
   - `HEAD^` refers to the parent of the current commit.
   - `HEAD~<n>` refers to the commit n steps before the current HEAD.
     Example:
     ```bash
     git checkout HEAD~2
     ```
     This moves HEAD to two commits before the current commit.

## Git Reflog

The Git **reflog** (reference log) is a mechanism that records updates to the HEAD and branch references in your repository. It helps you track changes to HEAD, even if those changes are not part of the branch history.

1. **What Reflog Tracks**:

   - Every time you change HEAD, such as switching branches, resetting, rebasing, or merging, the reflog records the update.
   - Reflog entries are local and not shared with remote repositories.

2. **Reflog Retention**:

   - By default, Git retains reflog entries for 90 days.

3. **Safety Net**:
   - Reflog is a powerful tool for recovering commits or branches that were accidentally deleted or reset.

### Viewing the Reflog

1. **Basic Command**:

   ```bash
   git reflog
   ```

   This shows a list of recent changes to HEAD, including the commit hash, action performed, and a brief description.

2. **Viewing Reflog for a Specific Branch**:

   ```bash
   git reflog show <branch-name>
   ```

   Example:

   ```bash
   git reflog show main
   ```

3. **Reflog Entries Format**:
   - Example output:
     ```
     d1e8c6b (HEAD -> main) HEAD@{0}: commit: Fix bug in feature
     a7c9f3a HEAD@{1}: checkout: moving from feature to main
     f2d4e5b HEAD@{2}: commit: Add new feature
     ```
   - The syntax includes:
     - The commit hash.
     - The reference (e.g., `HEAD@{n}`).
     - The action performed (e.g., `commit`, `checkout`, etc.).
     - A description of the action.

### Recovering Changes with Reflog

1. **Resetting to a Specific Reflog Entry**:

   - Use the `HEAD@{n}` notation to reset to a previous state:
     ```bash
     git reset --hard HEAD@{2}
     ```

2. **Checking Out a Commit from Reflog**:

   ```bash
   git checkout HEAD@{n}
   ```

3. **Creating a Branch from a Reflog Commit**:
   - If you find a commit in the reflog that you want to preserve, you can create a branch from it:
     ```bash
     git branch <new-branch-name> HEAD@{n}
     ```

### Cleaning Up the Reflog

1. **Expire Old Entries**:

   - Remove entries older than a specific time:
     ```bash
     git reflog expire --expire=30.days.ago --all
     ```

2. **Garbage Collection**:
   - Prune unreachable objects from the reflog:
     ```bash
     git gc --prune=now
     ```

### Best Practices

1. **Use Reflog for Recovery**:

   - If you’ve accidentally deleted a branch or commit, reflog can help you recover it.

2. **Check Reflog Before Force Push**:

   - If you’re unsure about the state of your repository after a reset or rebase, use `git reflog` to verify the history.

3. **Avoid Overwriting Reflog Entries**:
   - Be cautious with commands like `git gc` and `git reflog expire` as they permanently delete reflog entries.

### Recovering a Deleted Branch Using Reflog

If you’ve accidentally deleted a branch, you can recover it using the reflog. Here are the steps:

1. **Find the Commit Hash**:

   - Use the reflog to locate the commit where the branch was last present:
     ```bash
     git reflog
     ```
   - Look for entries associated with the deleted branch. For example:
     ```
     a1b2c3d HEAD@{2}: checkout: moving from deleted-branch to main
     f3e4d5c HEAD@{3}: commit: Work on feature
     ```
     Here, `a1b2c3d` is the commit hash of the deleted branch.

2. **Create a New Branch**:

   - Use the commit hash to recreate the branch:
     ```bash
     git branch <branch-name> <commit-hash>
     ```
     Example:
     ```bash
     git branch deleted-branch a1b2c3d
     ```

3. **Switch to the Recovered Branch**:
   - After recreating the branch, you can switch to it:
     ```bash
     git switch deleted-branch
     ```

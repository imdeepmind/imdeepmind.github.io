---
sidebar_position: 7
---

# Stashing in Git

Stashing is a feature in Git that allows you to temporarily save changes in your working directory and index (staged files) without committing them. It’s useful when you need to switch branches or perform other tasks but aren’t ready to commit your current changes.

1. **What is a Stash?**

   - A stash is a snapshot of your working directory and index at a specific point in time.
   - Stashes are stored in a stack-like structure, where you can apply or drop them as needed.

2. **Use Cases for Stashing:**
   - Switching branches without committing changes.
   - Cleaning your working directory temporarily.
   - Experimenting with changes without affecting the current state.

## Common Stashing Commands

### Create a Stash

- Save the current working directory and index:
  ```bash
  git stash
  ```
- This moves your changes to a stash and reverts your working directory to the last committed state.

- **Including Untracked Files**:
  By default, untracked files are not stashed. To include them:

  ```bash
  git stash -u
  ```

- **Including Ignored Files**:
  If you want to stash ignored files as well:
  ```bash
  git stash -a
  ```

### List Stashes

- View all stashes in your repository:
  ```bash
  git stash list
  ```
- Example output:
  ```
  stash@{0}: WIP on main: 123abc Fix bug
  stash@{1}: WIP on feature: 456def Add new feature
  ```

### Apply a Stash

- Apply the most recent stash to your working directory:
  ```bash
  git stash apply
  ```
- Apply a specific stash:
  ```bash
  git stash apply stash@{1}
  ```
- Applying a stash does not remove it from the stash list.

### Pop a Stash

- Apply the most recent stash and remove it from the stash list:
  ```bash
  git stash pop
  ```
- Pop a specific stash:
  ```bash
  git stash pop stash@{1}
  ```

### Drop a Stash

- Delete a specific stash:
  ```bash
  git stash drop stash@{0}
  ```
- Delete the most recent stash:
  ```bash
  git stash drop
  ```

### Clear All Stashes

- Remove all stashes:
  ```bash
  git stash clear
  ```

## Advanced Stashing Features

### Stashing with a Message

- Add a description to your stash:
  ```bash
  git stash push -m "Fix for issue #123"
  ```
- The message will appear in the stash list.

### Stashing Specific Files

- Stash only specific files:
  ```bash
  git stash push <file1> <file2>
  ```

### Branching from a Stash

- Create a new branch from a stash:
  ```bash
  git stash branch <branch-name>
  ```
- This applies the stash to the new branch and removes it from the stash list.

### Viewing a Stash’s Changes

- Show the changes stored in a stash:
  ```bash
  git stash show
  ```
- Show detailed changes (like `git diff`):
  ```bash
  git stash show -p stash@{0}
  ```

## Best Practices

1. **Use Stash Messages**:

   - Always add a message to your stashes to make it easier to identify their purpose.

2. **Don’t Leave Stashes for Too Long**:

   - Stashes are meant for temporary storage. Apply or drop them as soon as possible to avoid confusion.

3. **Be Cautious with `stash clear`**:

   - This command permanently deletes all stashes. Double-check before running it.

4. **Check for Conflicts**:
   - Applying or popping a stash may result in conflicts if the changes clash with the current state of your repository. Resolve these conflicts like you would during a merge.

## Troubleshooting

1. **Recovering a Dropped Stash**:

   - If you accidentally drop a stash, you may still recover it if its reference exists in the reflog:
     ```bash
     git reflog
     ```
     Look for the stash commit hash and create a branch from it:
     ```bash
     git branch <branch-name> <commit-hash>
     ```

2. **Untracked Files Not Stashed**:

   - Ensure you use the `-u` or `-a` option if you want untracked or ignored files to be included in the stash.

3. **Stash Conflicts**:
   - If applying a stash results in conflicts, resolve the conflicts manually and use:
     ```bash
     git stash drop
     ```
     to remove the stash once resolved.

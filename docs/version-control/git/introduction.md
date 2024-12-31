---
sidebar_position: 1
---

# Introduction

Git is a distributed version control system that helps developers track changes in source code during software development. Created by Linus Torvalds in 2005, Git is designed to handle projects of all sizes with speed and efficiency. Its primary purpose is to coordinate work among multiple developers, manage code changes, and maintain a history of every modification made to the codebase.

Git is widely popular due to its distributed nature, allowing every developer to have a full copy of the project’s history on their local machine. It is free, open-source, and supports non-linear workflows, making it a vital tool for modern software development.

## Core Features of Git

1. **Version Control:** Tracks changes in files and allows you to revert to previous versions when necessary.
2. **Branching and Merging:** Enables developers to work on isolated branches and merge them into the main codebase when ready.
3. **Distributed System:** Each developer has a complete copy of the repository, ensuring no single point of failure.
4. **Collaboration:** Facilitates seamless teamwork by allowing multiple developers to work on the same project simultaneously.
5. **Staging Area:** Provides a space to prepare changes before committing them to the repository.

## Getting Started with Git

To start using Git, you need to install it on your system. Git can be downloaded from its official website ([https://git-scm.com/](https://git-scm.com/)) or installed using package managers like `apt` on Ubuntu or `brew` on macOS.

Once installed, you can verify it by running:

```bash
git --version
```

### Setting Up Git

Before creating or working with repositories, configure your user details:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

These details will be associated with your commits.

### Creating a Repository

A repository (repo) is where Git stores all the information about a project, including its history of changes. There are two ways to create a Git repository: initializing a new repository or cloning an existing one.

#### Initializing a New Repository

To create a new repository:

1. Navigate to your project directory:

   ```bash
   cd /path/to/your/project
   ```

2. Initialize the Git repository:

   ```bash
   git init
   ```

   This creates a hidden `.git` folder in your project directory, which contains all the metadata for Git to track the project.

3. Add files to the repository:

   ```bash
   git add .
   ```

   The `.` adds all files in the current directory to the staging area. Alternatively, you can specify individual files.

4. Commit the changes:

   ```bash
   git commit -m "Initial commit"
   ```

   This saves the changes to the repository with a descriptive message.

#### Cloning an Existing Repository

To contribute to or use an existing project:

1. Use the repository URL to clone it:

   ```bash
   git clone https://github.com/username/repository.git
   ```

   This creates a new directory named after the repository and downloads its contents.

2. Navigate to the cloned repository:

   ```bash
   cd repository
   ```

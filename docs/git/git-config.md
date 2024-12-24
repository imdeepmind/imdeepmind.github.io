---
sidebar_position: 3
---

# `git config`

The `git config` command is used to configure Git settings, including user information, repository-specific settings, and system-wide configurations. These configurations help customize how Git behaves in different scenarios, like defining who commits to the repository, setting editor preferences, and more.

## Global, Local, and System Configurations

Git settings can be configured at three levels:

- **System**: Applies to all users on the system.
- **Global**: Applies to the current user across all repositories.
- **Local**: Applies only to a specific repository.

The precedence order is:

- **Local** settings override **Global** settings.
- **Global** settings override **System** settings.

## Syntax of `git config` Command

The basic syntax for `git config` is:

```bash
git config [<options>] <key> <value>
```

- **\<options\>**: Specific flags or arguments for configuration.
- **\<key\>**: The configuration key to be set (e.g., `user.name`).
- **\<value\>**: The value to be assigned to the key (e.g., `John Doe`).

## Configuring Git at Different Levels

We can configure Git at various levels using `git config`. Here's how each level works:

### Local Configuration

This is repository-specific. Settings are stored in the `.git/config` file inside the repository directory.

To set a local configuration, run:

```bash
git config --local <key> <value>
```

Example:

```bash
git config --local user.name "John Doe"
```

### Global Configuration

This applies to all repositories for the current user. Settings are stored in the `~/.gitconfig` file in the user’s home directory.

To set a global configuration, run:

```bash
git config --global <key> <value>
```

Example:

```bash
git config --global user.email "john.doe@example.com"
```

### System Configuration

This is system-wide configuration that affects all users on the machine. Settings are stored in `/etc/gitconfig` (for Linux/macOS) or `C:\ProgramData\Git\config` (for Windows).

To set a system configuration, run:

```bash
git config --system <key> <value>
```

Example:

```bash
git config --system core.autocrlf true
```

**Note**: Changing system-level settings may require administrative privileges.

## Common Git Configurations

Here are some common configurations we may need to use frequently:

### User Information

- **User Name**: Defines the name Git will associate with commits.

  ```bash
  git config --global user.name "John Doe"
  ```

- **User Email**: Defines the email Git will associate with commits.
  ```bash
  git config --global user.email "john.doe@example.com"
  ```

### Editor Configuration

Git uses a text editor for commit messages, rebasing, merging, etc. We can set a preferred editor.

- **Set default editor to VSCode**:

  ```bash
  git config --global core.editor "code --wait"
  ```

- **Set default editor to Vim**:
  ```bash
  git config --global core.editor "vim"
  ```

### Line Ending Handling

Git has settings for handling line endings, especially when working with multiple operating systems.

- **core.autocrlf**: Converts line endings on commit/check-out.

  - `true`: Automatically converts line endings to LF on commit and to CRLF on checkout (Windows).
  - `input`: Converts line endings to LF on commit but doesn’t change line endings on checkout (Linux/macOS).
  - `false`: No automatic conversion (used for Unix-based systems).

  Example for Windows users:

  ```bash
  git config --global core.autocrlf true
  ```

### Color Output

Git has colored output for better visibility. It can be configured using `color.ui`.

- **Enable colored output**:
  ```bash
  git config --global color.ui auto
  ```

### Aliases

Git allows us to create aliases for commands to reduce typing.

- **Example**: Set an alias for `git status` to `git st`:

  ```bash
  git config --global alias.st status
  ```

- **List all aliases**:
  ```bash
  git config --global --get-regexp alias
  ```

## Viewing and Modifying Configuration

We can use `git config` to view the current settings or modify them.

### View Configuration

- **View all settings** (from all levels):
  ```bash
  git config --list
  ```
- **View a specific setting**:
  ```bash
  git config <key>
  ```

Example:

```bash
git config user.name
```

### Edit Configuration Manually

We can directly edit the configuration files using a text editor.

- **Global config**:

  ```bash
  vim ~/.gitconfig
  ```

- **Local config** (inside a repository):
  ```bash
  vim .git/config
  ```

### Unset Configuration

We can remove specific configurations using `--unset`.

- **Remove a specific configuration**:

  ```bash
  git config --global --unset user.name
  ```

- **Remove a configuration from the local repository**:
  ```bash
  git config --local --unset user.name
  ```

## Git Config Command Options

Here are some options that we can use with `git config`:

- **`--global`**: Apply the configuration globally for the current user.
- **`--local`**: Apply the configuration only to the current repository.
- **`--system`**: Apply the configuration for all users on the system.
- **`--list`**: List all the settings (including global and local).
- **`--get`**: Get the value of a specific configuration key.
- **`--get-all`**: Get all values for a particular key.
- **`--unset`**: Unset a particular configuration key.
- **`--edit`**: Edit the configuration file using the default editor.

## Examples of Practical Configurations

- **Set user information globally**:

  ```bash
  git config --global user.name "Alice"
  git config --global user.email "alice@example.com"
  ```

- **Set color output**:

  ```bash
  git config --global color.ui auto
  ```

- **Set default editor to Nano**:

  ```bash
  git config --global core.editor "nano"
  ```

- **Create an alias for `git log`**:
  ```bash
  git config --global alias.lg "log --oneline --graph --all"
  ```

## Configuration Files

- **`~/.gitconfig` (Global Config)**:
  This file stores global Git configuration for the user. It is typically located in the user's home directory.

- **`.git/config` (Local Config)**:
  This file stores configuration for a specific repository, inside the `.git` folder of the repository.

- **`/etc/gitconfig` (System Config)**:
  This file contains system-wide Git configuration and is applied to all users on the system.

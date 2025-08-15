---
sidebar_position: 24
---

# Package Managers

<!-- markdownlint-disable MD024 -->

## What “package manager” means (and the roles involved)

In Python, “package management” usually spans several jobs:

- **Installer/Resolver:** downloads and resolves dependencies (e.g., `pip`, **uv**, Poetry’s installer).
- **Environment manager:** isolates dependencies per project (e.g., `venv`, `virtualenv`, Conda).
- **Project manager:** defines metadata, lock files, build/publish (e.g., **Poetry**, **uv**, Hatch, PDM, Flit).
- **Tool runner:** installs/runs CLI tools in isolated envs (e.g., **pipx**, **uvx**).
- **Python version manager:** installs/switches Python versions (e.g., **pyenv**, **uv python**).

## The tools (concise profiles)

### uv (Astral)

A fast, all-in-one **package & project manager** written in Rust. It can replace `pip`, `pip-tools`, `pipx`, `poetry`, `virtualenv` (and even `pyenv`/`twine` tasks) with one tool. Provides a **pip-compatible interface** (`uv pip …`), a **universal lockfile**, **workspaces**, a **global cache**, **script** support (inline deps), **tool** runner (`uvx`), and **Python version management**. Claimed 10–100× faster installs than pip.

#### Common commands

```bash
# project
uv init && uv add requests && uv lock && uv sync
uv run python app.py

# pip-compatible workflows (fast drop-in)
uv pip install -r requirements.txt
uv pip compile --universal -o requirements.txt
uv pip sync requirements.txt

# tools & Python versions
uvx ruff --version
uv python install 3.12 && uv venv --python 3.12
```

#### How to use

1. Initialize a project:

   ```bash
   uv init
   ```

2. Add dependencies:

   ```bash
   uv add <package_name>
   ```

3. Lock dependencies:

   ```bash
   uv lock
   ```

4. Install dependencies from lockfile:

   ```bash
   uv sync
   ```

5. Run scripts with dependencies:

   ```bash
   uv run python main.py
   ```

6. Use as a drop-in pip replacement:

   ```bash
   uv pip install requests
   ```

7. Run CLI tools without installing globally:

   ```bash
   uvx black .
   ```

8. Manage Python versions:

   ```bash
   uv python install 3.11
   uv venv --python 3.11
   ```

#### Pros

- Very fast installs/resolution; excellent cache behavior.
- One tool covers install/lock/envs/tools/publish/Python versions.
- Works with existing `requirements.txt` via `uv pip …`.

#### Cons

- Newer ecosystem; some teams may still standardize on pip/Poetry/Conda.
- Feature superset can feel “heavy” if you only need a minimal pip+venv flow.

### pip (and **venv**/**virtualenv**)

The default **installer** that talks to PyPI; pair with `venv` for env isolation. `virtualenv` is an alternative with more knobs/features; `venv` is stdlib and lightweight.

#### How to Use

1. Create a virtual environment:

   ```bash
   python -m venv .venv
   ```

2. Activate it:

   - macOS/Linux:

     ```bash
     source .venv/bin/activate
     ```

   - Windows:

     ```bash
     .venv\Scripts\activate
     ```

3. Install packages:

   ```bash
   pip install requests
   ```

4. Freeze dependencies:

   ```bash
   pip freeze > requirements.txt
   ```

5. Install from requirements:

   ```bash
   pip install -r requirements.txt
   ```

#### Pros

- Ubiquitous, simple; zero extra tooling.
- Works everywhere; easy to script/CI.

#### Cons

- No lockfile by default (you add pip-tools or switch to uv/Poetry).
- Env management is separate (venv/virtualenv).

### pip-tools (`pip-compile`, `pip-sync`)

Adds deterministic lock files to pip workflows by compiling pinned `requirements.txt` from inputs.

#### How to Use

1. Install pip-tools:

   ```bash
   pip install pip-tools
   ```

2. Create a requirements.in with your dependencies:

   ```text
   requests
   flask
   ```

3. Compile to a locked requirements file:

   ```bash
   pip-compile
   ```

4. Sync environment to match the lock file:

   ```bash
   pip-sync
   ```

#### Pros

- Deterministic builds while keeping plain-pip workflows.
- Familiar files (requirements.in → pinned requirements.txt).

#### Cons

- Extra step in the workflow; no env or project metadata features.

### Poetry

Full **project manager**: dependency resolution, lockfile, build & publish using `pyproject.toml` + `poetry.lock`.

#### How to Use

1. Install Poetry:

   ```bash
   pip install poetry
   ```

2. Initialize a project:

   ```bash
   poetry init
   ```

3. Add dependencies:

   ```bash
   poetry add requests
   ```

4. Install dependencies:

   ```bash
   poetry install
   ```

5. Run inside environment:

   ```bash
   poetry run python app.py
   ```

6. Publish to PyPI:

   ```bash
   poetry build && poetry publish
   ```

#### Pros

- Clean pyproject.toml config, robust lockfile & resolver.
- Built-in build/publish pipeline.

#### Cons

- Extra abstraction vs. pip; learning curve for teams used to requirements.txt.
- External tool; slower than uv in practice.

### PDM

Modern project manager following the latest packaging standards; uses `pyproject.toml`; supports lockfiles and publishing.

#### How to Use

1. Install PDM:

   ```bash
   pip install pdm
   ```

2. Create a new project:

   ```bash
   pdm init
   ```

3. Add dependencies:

   ```bash
   pdm add requests
   ```

4. Install dependencies:

   ```bash
   pdm install
   ```

5. Run scripts:

   ```bash
   pdm run python app.py
   ```

6. Publish package:

   ```bash
   pdm publish
   ```

#### Pros

- Standards-forward; ergonomic project setup via pdm new.

#### Cons

- Smaller mindshare than Poetry/uv; fewer “batteries included” than uv.

### Hatch

Project manager focused on reproducible builds, pluggable envs/scripts, and publishing; integrates well with modern packaging.

#### How to use

1. Install Hatch:

   ```bash
   pip install hatch
   ```

2. Create a new project:

   ```bash
   hatch new my_project
   ```

3. Add dependencies (edit pyproject.toml or use CLI):

   ```bash
   hatch env create
   ```

4. Run scripts:

   ```bash
   hatch run python app.py
   ```

5. Build & publish:

   ```bash
   hatch build && hatch publish
   ```

#### Pros

- Reproducible builds by default; flexible environments and script runner.

#### Cons

- Opinionated; smaller ecosystem than Poetry.

### pipx (CLI tools)

Installs and runs Python **applications** in isolated envs (think: “brew for Python CLIs”)—great for tools like `black`, `ruff`, `httpie`.

#### How to use

1. Install pipx:

   ```bash
   pip install pipx
   ```

2. Install CLI tool:

   ```bash
   pipx install black
   ```

3. Run CLI tool:

   ```bash
   pipx run black .
   ```

#### Pros

- Keeps CLI tools isolated from project deps.

#### Cons

- Not a project dependency manager; separate from your app’s env.

### Conda / Mamba

Cross-language package & environment manager—excellent when you need system libraries (BLAS, CUDA, GDAL). **Mamba** is a faster, drop-in alternative solver/CLI.

#### How to use (Conda)

1. Create environment:

   ```bash
   conda create -n myenv python=3.11
   ```

2. Activate environment:

   ```bash
   conda activate myenv
   ```

3. Install packages:

   ```bash
   conda install numpy pandas
   ```

4. Export environment:

   ```bash
   conda env export > environment.yml
   ```

#### How to use (Mamba)

Same commands as Conda, replacing conda with mamba:

```bash
mamba create -n myenv python=3.11
mamba install numpy pandas
```

#### Pros

- Handles non-Python/native deps; binary packages + env management.
- Ecosystem (conda-forge) and GUIs (Anaconda Navigator).

#### Cons

- Larger footprint; mixing pip/Conda needs care to avoid conflicts.

## Feature matrix (quick scan)

| Tool            | Lockfile           | Env mgmt          | Build/Publish | Tool runner   | Python version mgmt | Handles non-Py deps |
| --------------- | ------------------ | ----------------- | ------------- | ------------- | ------------------- | ------------------- |
| **uv**          | Yes (universal)    | Yes               | Yes           | **uvx**       | Yes                 | No                  |
| **pip**         | No (add pip-tools) | No (pair w/ venv) | No            | No            | No                  | No                  |
| **pip-tools**   | Yes                | No                | No            | No            | No                  | No                  |
| **Poetry**      | Yes                | Yes               | Yes           | Basic scripts | No                  | No                  |
| **PDM**         | Yes                | Yes               | Yes           | Scripts       | No                  | No                  |
| **Hatch**       | Yes                | Yes               | Yes           | Yes           | No                  | No                  |
| **pipx**        | n/a                | Isolated per-tool | n/a           | Yes           | No                  | No                  |
| **Conda/Mamba** | YAML env files     | **Yes**           | No            | No            | No                  | **Yes**             |

## When to choose what

- **General Python apps/services (most teams):** **uv** for speed + single-tool simplicity; it reads `requirements.txt` or does full project/lock flows.
- **Legacy/simple scripts:** `pip + venv` (optionally add `pip-tools` for locks) if you want minimal change.
- **Publishable libraries:** **uv** or **Poetry/Hatch/PDM** for `pyproject.toml` + lockfile + build/publish.
- **Data science / needs native libs:** **Conda/Mamba** for environments and binaries; you can still use pip/uv inside the env for PyPI-only deps.
- **CLI tooling on your dev machine:** **pipx** or **uvx**.

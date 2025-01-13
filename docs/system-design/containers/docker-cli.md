---
sidebar_position: 7
---

# Docker CLI

Docker CLI (Command Line Interface) is a powerful tool for interacting with Docker, allowing users to manage containers, images, networks, and volumes through commands in the terminal. Below is a detailed guide covering common Docker commands, flags they accept, and usage examples.

## docker pull

**Purpose:**  
This command downloads a Docker image from a registry (such as Docker Hub) to your local machine.

**Syntax:**

```bash
docker pull [OPTIONS] IMAGE[:TAG|@DIGEST]
```

**Flags:**

- `--all-tags, -a`: Download all tags for the image.
- `--platform`: Specify the platform to pull from (e.g., `linux/amd64`, `linux/arm64`).
- `--quiet, -q`: Suppress output; only shows image ID.

**Examples:**

1. Pull the latest version of the `ubuntu` image:

   ```bash
   docker pull ubuntu
   ```

2. Pull a specific version of the `nginx` image:

   ```bash
   docker pull nginx:1.21
   ```

3. Pull an image for a specific platform:

   ```bash
   docker pull --platform linux/arm64 ubuntu
   ```

4. Pull all tags of an image:

   ```bash
   docker pull --all-tags ubuntu
   ```

## docker build

**Purpose:**  
This command is used to build a Docker image from a Dockerfile.

**Syntax:**

```bash
docker build [OPTIONS] PATH | URL | -
```

**Flags:**

- `-f, --file`: Specify the Dockerfile to use.
- `-t, --tag`: Name and optionally tag an image (e.g., `image:tag`).
- `--no-cache`: Do not use cache when building the image.
- `--build-arg`: Set build-time variables.
- `--pull`: Always attempt to pull a newer version of the image.
- `--platform`: Set the platform to build for.

**Examples:**

1. Build an image using the current directory’s `Dockerfile`:

   ```bash
   docker build -t myapp .
   ```

2. Build an image with a specific Dockerfile:

   ```bash
   docker build -f Dockerfile.dev -t myapp .
   ```

3. Build an image with no cache:

   ```bash
   docker build --no-cache -t myapp .
   ```

4. Build an image for a specific platform:

   ```bash
   docker build --platform linux/amd64 -t myapp .
   ```

## docker exec

**Purpose:**  
This command allows you to run commands in a running container.

**Syntax:**

```bash
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

**Flags:**

- `-d, --detach`: Run the command in the background.
- `-i, --interactive`: Keep STDIN open even if not attached.
- `-t, --tty`: Allocate a pseudo-TTY.

**Examples:**

1. Execute a command inside a running container (`mycontainer`) to start a bash shell:

   ```bash
   docker exec -it mycontainer bash
   ```

2. Run a command in the background:

   ```bash
   docker exec -d mycontainer touch /tmp/hello.txt
   ```

3. Run a command interactively:

   ```bash
   docker exec -it mycontainer ls /app
   ```

## docker rm

**Purpose:**  
This command removes one or more containers.

**Syntax:**

```bash
docker rm [OPTIONS] CONTAINER [CONTAINER...]
```

**Flags:**

- `-f, --force`: Forcefully remove a running container (use with caution).
- `-v, --volumes`: Remove the volumes associated with the container.
- `--link`: Remove the specified link.

**Examples:**

1. Remove a stopped container (`mycontainer`):

   ```bash
   docker rm mycontainer
   ```

2. Forcefully remove a running container (`mycontainer`):

   ```bash
   docker rm -f mycontainer
   ```

3. Remove a container and its associated volumes:

   ```bash
   docker rm -v mycontainer
   ```

## docker start

**Purpose:**  
This command starts one or more stopped containers.

**Syntax:**

```bash
docker start [OPTIONS] CONTAINER [CONTAINER...]
```

**Flags:**

- `-a, --attach`: Attach to the container's output.
- `-i, --interactive`: Keep STDIN open even if not attached.

**Examples:**

1. Start a stopped container (`mycontainer`):

   ```bash
   docker start mycontainer
   ```

2. Start a container and attach to its output:

   ```bash
   docker start -a mycontainer
   ```

## docker stop

**Purpose:**  
This command stops one or more running containers.

**Syntax:**

```bash
docker stop [OPTIONS] CONTAINER [CONTAINER...]
```

**Flags:**

- `-t, --time`: Specify a grace period (in seconds) to stop the container. Default is 10 seconds.

**Examples:**

1. Stop a running container (`mycontainer`):

   ```bash
   docker stop mycontainer
   ```

2. Stop a container with a 5-second grace period:

   ```bash
   docker stop -t 5 mycontainer
   ```

## docker pause

**Purpose:**  
This command pauses all processes within one or more running containers.

**Syntax:**

```bash
docker pause CONTAINER [CONTAINER...]
```

**Examples:**

1. Pause a running container (`mycontainer`):

   ```bash
   docker pause mycontainer
   ```

## docker unpause

**Purpose:**  
This command unpauses one or more paused containers, resuming their processes.

**Syntax:**

```bash
docker unpause CONTAINER [CONTAINER...]
```

**Examples:**

1. Unpause a paused container (`mycontainer`):

   ```bash
   docker unpause mycontainer
   ```

## docker ps

**Purpose:**  
This command lists all running containers.

**Syntax:**

```bash
docker ps [OPTIONS]
```

**Flags:**

- `-a, --all`: Show all containers (default shows only running).
- `-q, --quiet`: Show only container IDs.
- `--filter`: Filter containers based on criteria (e.g., status, name).
- `--format`: Format the output using Go templating.

**Examples:**

1. List all running containers:

   ```bash
   docker ps
   ```

2. List all containers (including stopped ones):

   ```bash
   docker ps -a
   ```

3. List only container IDs:

   ```bash
   docker ps -q
   ```

4. Filter containers by status:

   ```bash
   docker ps --filter "status=exited"
   ```

## docker images

**Purpose:**  
This command lists all Docker images on your local machine.

**Syntax:**

```bash
docker images [OPTIONS]
```

**Flags:**

- `-a, --all`: Show all images (including intermediate images).
- `-q, --quiet`: Show only image IDs.

**Examples:**

1. List all Docker images:

   ```bash
   docker images
   ```

2. List only image IDs:

   ```bash
   docker images -q
   ```

## docker prune

**Purpose:**  
This command removes unused containers, networks, images, and volumes, helping to clean up disk space.

**Syntax:**

```bash
docker prune [OPTIONS]
```

**Flags:**

- `--all`: Remove all unused images, not just dangling ones.
- `--force, -f`: Force the prune action without confirmation.
- `--volumes`: Also prune unused volumes.

**Examples:**

1. Remove all unused containers, networks, and dangling images:

   ```bash
   docker system prune
   ```

2. Remove all unused images (not just dangling):

   ```bash
   docker image prune --all
   ```

3. Remove unused volumes:

   ```bash
   docker volume prune
   ```

4. Force removal without confirmation:

   ```bash
   docker system prune -f
   ```

## docker logs

**Purpose:**  
This command fetches logs from a container, useful for debugging and monitoring.

**Syntax:**

```bash
docker logs [OPTIONS] CONTAINER
```

**Flags:**

- `-f, --follow`: Follow the log output (real-time).
- `--tail`: Show the last `N` lines of logs.
- `--since`: Show logs since a specific timestamp.

**Examples:**

1. View logs of a container (`mycontainer`):

   ```bash
   docker logs mycontainer
   ```

2. Follow logs in real-time:

   ```bash
   docker logs -f mycontainer
   ```

3. View the last 100 lines of logs:

   ```bash
   docker logs --tail 100 mycontainer
   ```

4. View logs since a specific time:

   ```bash
   docker logs --since "2025-01-12T00:00:00" mycontainer
   ```

## docker debug

**Purpose:**  
This command is used to provide more detailed information and assist with debugging Docker components.

**Syntax:**

```bash
docker debug
```

**Examples:**

- Running `docker debug` typically gives information about container runtime errors, failed commands, and system diagnostics, though it might require additional debugging tools or flags depending on the environment and context.

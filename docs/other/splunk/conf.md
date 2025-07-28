# Configuration Files

Splunk is highly configurable and extensible, and its behavior is primarily controlled through a set of **configuration files** known as **`.conf` files**. These files define settings for inputs, indexing, parsing, search behavior, user roles, apps, deployment configurations, and more.

Understanding and managing `.conf` files is essential for **advanced Splunk administration**, **troubleshooting**, and **custom deployment setups**.

## Structure and Location

Splunk configuration files are located in specific directories depending on the context:

### Global Settings (System-wide)

```bash
$SPLUNK_HOME/etc/system/default/      # Default settings (do not modify!)
$SPLUNK_HOME/etc/system/local/        # Local overrides
```

### App-specific Settings

```bash
$SPLUNK_HOME/etc/apps/<app_name>/default/  # Default settings of the app
$SPLUNK_HOME/etc/apps/<app_name>/local/    # Local customizations for the app
```

> **Never modify files in the `default/` directory**. Instead, override them by placing settings in `local/`.

## Commonly Used .conf Files

| File Name               | Purpose                                                                      |
| ----------------------- | ---------------------------------------------------------------------------- |
| `inputs.conf`           | Configures data inputs (files, ports, scripts, etc.)                         |
| `outputs.conf`          | Configures where to forward data (e.g., indexer, HEC endpoint)               |
| `props.conf`            | Handles event parsing: line breaking, timestamp extraction, field transforms |
| `transforms.conf`       | Defines field extraction, event routing, masking, rewrites                   |
| `indexes.conf`          | Defines index names, locations, retention policies                           |
| `server.conf`           | Configures server identity, SSL, clustering                                  |
| `deploymentclient.conf` | Configures a forwarder to connect to a deployment server                     |
| `limits.conf`           | Controls limits like memory usage, concurrent searches                       |
| `authorize.conf`        | Defines user roles and capabilities                                          |
| `web.conf`              | Configures the web interface (port, SSL, sessions)                           |
| `alert_actions.conf`    | Defines custom alert actions                                                 |
| `savedsearches.conf`    | Stores saved searches and alerts                                             |
| `searchbnf.conf`        | Defines SPL syntax (for custom search commands)                              |

## Configuration File Format

All `.conf` files follow an **INI-style** syntax: sections are enclosed in square brackets `[section]` and followed by key-value pairs.

### Example: `inputs.conf`

```ini
[monitor:///var/log/nginx/access.log]
disabled = false
index = web_logs
sourcetype = nginx_access
```

### Example: `props.conf`

```ini
[nginx_access]
TIME_PREFIX = \[
TIME_FORMAT = %d/%b/%Y:%H:%M:%S %z
LINE_BREAKER = ([\r\n]+)
SHOULD_LINEMERGE = false
```

## File Precedence (Priority)

Splunk reads configuration files in a well-defined order of precedence:

```bash
system/default < app/default < app/local < system/local
```

- **Lower precedence** config can be overridden by higher precedence.
- **Local** directories always override **default** ones.
- When multiple apps define the same setting, precedence is determined by app load order.

> Use the `btool` command to see what value is being used and where it’s defined.

Example:

```bash
splunk btool props list nginx_access --debug
```

## Example Use Cases

### Forwarding Data to Indexer (outputs.conf)

```ini
[tcpout]
defaultGroup = indexer_group

[tcpout:indexer_group]
server = indexer1.company.com:9997
```

### Routing Events Based on Host (transforms.conf)

```ini
[set_index]
REGEX = .
DEST_KEY = _MetaData:Index
FORMAT = firewall_logs
```

### Setting Retention Policy (indexes.conf)

```ini
[firewall_logs]
homePath = $SPLUNK_DB/firewall_logs/db
coldPath = $SPLUNK_DB/firewall_logs/colddb
thawedPath = $SPLUNK_DB/firewall_logs/thaweddb
maxTotalDataSizeMB = 500000
frozenTimePeriodInSecs = 2592000  # 30 days
```

## Tools for Managing Conf Files

- **btool**: Debug and inspect effective configuration
- **deployment server**: Push `.conf` files to forwarders
- **Apps**: Package `.conf` files as part of custom apps
- **GUI Configuration**: Changes made through the web UI are stored in the `local/` folders

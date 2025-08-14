---
sidebar_position: 2
---

# Hello World

This section demonstrates how to create a simple "Hello World" MCP agent in both Python and TypeScript, using popular libraries: FastMCP for Python and modelcontextprotocol/sdk for TypeScript.

## Python Example

FastMCP 2.0 is the actively maintained Python framework for building MCP-compliant servers and tools. The recommended way to create a "Hello World" MCP agent is:

```python
from fastmcp import FastMCP

mcp = FastMCP("Hello World MCP 🚀")

@mcp.tool
def hello() -> str:
    """Returns a friendly greeting."""
    return "Hello, MCP!"

if __name__ == "__main__":
    mcp.run()
```

**Key Points:**

- Define our MCP server with `FastMCP`.
- Register tools using the `@mcp.tool` decorator.
- Start the server with `mcp.run()`.
- This approach is high-level, Pythonic, and aligns with the official FastMCP 2.0 documentation.

## TypeScript Example

The `modelcontextprotocol/sdk` package provides TypeScript tools for building MCP-compliant servers and tools. Here is a "Hello World" MCP server example, aligned with the official documentation:

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Create MCP server instance
const server = new McpServer({
  name: "hello-world",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// Register a simple tool
server.tool("hello", "Returns a friendly greeting", {}, async () => ({
  content: [
    {
      type: "text",
      text: "Hello, MCP!",
    },
  ],
}));

// Run the server using stdio transport
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Hello World MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
```

**Key Points:**

- Use `McpServer` and `StdioServerTransport` from the SDK.
- Register tools with `server.tool`.
- Avoid using `console.log` for STDIO servers; use `console.error` for logging.
- Start the server with `server.connect`.
- This approach matches the official quickstart and best practices for MCP servers in TypeScript.

# Figma MCP Server

This project includes an MCP server that connects to Figma via the REST API.

## Requirements

- Node.js 18+
- A Figma personal access token

## Environment

Set your token before running:

```bash
export FIGMA_TOKEN=your_token_here
```

## Run server

```bash
npm run mcp:figma
```

## Register in MCP clients

Use this command for stdio-based MCP clients:

```bash
FIGMA_TOKEN=your_token_here node mcp/figma-server.mjs
```

## Tools exposed

- `figma_get_file`
- `figma_get_file_nodes`
- `figma_get_comments`
- `figma_post_comment`

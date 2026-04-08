import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const FIGMA_API_BASE = 'https://api.figma.com/v1';

const figmaToken = process.env.FIGMA_TOKEN;

if (!figmaToken) {
  console.error('Missing FIGMA_TOKEN environment variable.');
  process.exit(1);
}

const server = new McpServer({
  name: 'figma-mcp-server',
  version: '1.0.0'
});

async function figmaRequest(path, init = {}) {
  const response = await fetch(`${FIGMA_API_BASE}${path}`, {
    ...init,
    headers: {
      'X-Figma-Token': figmaToken,
      'Content-Type': 'application/json',
      ...(init.headers ?? {})
    }
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Figma API error ${response.status}: ${text}`);
  }

  return response.json();
}

server.tool(
  'figma_get_file',
  'Fetch a Figma file JSON by file key.',
  {
    fileKey: z.string().min(1),
    version: z.string().optional(),
    ids: z.string().optional(),
    depth: z.number().int().positive().optional()
  },
  async ({ fileKey, version, ids, depth }) => {
    const params = new URLSearchParams();
    if (version) params.set('version', version);
    if (ids) params.set('ids', ids);
    if (depth) params.set('depth', String(depth));

    const query = params.toString();
    const path = `/files/${fileKey}${query ? `?${query}` : ''}`;
    const data = await figmaRequest(path);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2)
        }
      ]
    };
  }
);

server.tool(
  'figma_get_file_nodes',
  'Fetch specific node trees from a Figma file using node ids.',
  {
    fileKey: z.string().min(1),
    ids: z.string().min(1),
    depth: z.number().int().positive().optional()
  },
  async ({ fileKey, ids, depth }) => {
    const params = new URLSearchParams({ ids });
    if (depth) params.set('depth', String(depth));

    const data = await figmaRequest(`/files/${fileKey}/nodes?${params.toString()}`);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2)
        }
      ]
    };
  }
);

server.tool(
  'figma_get_comments',
  'List comments in a Figma file.',
  {
    fileKey: z.string().min(1)
  },
  async ({ fileKey }) => {
    const data = await figmaRequest(`/files/${fileKey}/comments`);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2)
        }
      ]
    };
  }
);

server.tool(
  'figma_post_comment',
  'Post a comment to a Figma file at a viewport position.',
  {
    fileKey: z.string().min(1),
    message: z.string().min(1),
    clientMetaX: z.number(),
    clientMetaY: z.number()
  },
  async ({ fileKey, message, clientMetaX, clientMetaY }) => {
    const body = {
      message,
      client_meta: {
        x: clientMetaX,
        y: clientMetaY
      }
    };

    const data = await figmaRequest(`/files/${fileKey}/comments`, {
      method: 'POST',
      body: JSON.stringify(body)
    });

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2)
        }
      ]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);

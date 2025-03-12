"use client";

import { getDocBySlug } from "@/lib/docs";
import { Markdown } from "@/components/ui/markdown";

export default function DocsPage() {
  // For client components, we need to fetch the data on the client side
  // This would typically use an API route, but for simplicity, we're handling it here
  const content = `
# Studi Documentation Hub

Welcome to the Studi documentation. This comprehensive guide will help you understand the architecture, features, and usage of the Studi platform.

## Architecture Documentation

| Document | Description |
|----------|-------------|
| [Agent Architecture](./docs/agent_architecture) | Overview of the multi-agent system architecture |
| [Agent System](./docs/agent_system) | Detailed explanation of the agent system components |
| [Backend](./docs/backend) | Backend architecture and technology stack |

## User Guides

| Document | Description |
|----------|-------------|
| [Canvas Integration](./docs/canvas_integration) | Guide to Canvas LMS integration features |

## Development Guides

| Document | Description |
|----------|-------------|
| [Deployment](./docs/deployment) | Deployment instructions for various environments |

## Getting Started

Studi is a comprehensive learning platform that integrates with Canvas LMS to provide enhanced study tools, AI-assisted learning, and productivity features for students.

### Key Features:

- **Canvas Integration**: Seamless synchronization with your Canvas courses
- **Multi-Agent Architecture**: Specialized AI agents working together to assist your learning
- **Document Processing**: Advanced processing of course materials
- **Real-time Collaboration**: Work together with classmates on documents and projects

Explore the documentation to learn more about how Studi can enhance your educational experience.
  `;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <Markdown content={content} />
    </div>
  );
} 
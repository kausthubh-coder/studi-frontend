"use client";

import { useParams } from "next/navigation";
import { Markdown } from "@/components/ui/markdown";
import { getDocBySlug } from "@/lib/docs";
import { useEffect, useState } from "react";

export default function DocPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate it with a timeout
    const timer = setTimeout(() => {
      // This is a client-side simulation of server-side functionality
      // In a real app, you'd fetch this from an API endpoint
      let docContent = '';
      
      if (slug === 'agent_architecture') {
        docContent = `
# Studi Multi-Agent Architecture

## Overview

The Studi platform employs a sophisticated multi-agent architecture designed to provide intelligent, context-aware assistance for educational tasks. This architecture enables complex reasoning, knowledge creation, and execution capabilities through specialized agents working in concert.

## Core Principles

1. **Specialized Agents**: Each agent has a specific role and expertise, focusing on planning, knowledge management, or execution.

2. **Collaborative Decision Making**: Agents communicate and collaborate to solve complex problems that would be difficult for a single agent.

3. **Dynamic Knowledge Creation**: The system continuously builds and refines its knowledge base through interactions and feedback.

4. **Multi-Layered Memory**: Short-term, working, and long-term memory systems enable contextual awareness and learning over time.

5. **ReAct Pattern Implementation**: Agents follow the Reasoning + Acting pattern to make informed decisions before taking actions.

## Architecture Diagram

\`\`\`
+-------------------------------------+
|              Orchestrator           |
+---------------+----------+----------+
                |          |
    +-----------v--+   +---v--------+   +-------------+
    | Planner Agent |<--| Knowledge  |<--| Execution   |
    |               |   | Agent      |   | Agent       |
    +---------------+   +------------+   +-------------+
\`\`\`
        `;
      } else if (slug === 'agent_system') {
        docContent = `
# Studi Agent System Architecture

## Overview

The Studi Agent System is a sophisticated multi-agent architecture designed to provide intelligent assistance for educational tasks. The system consists of several specialized components working together to understand user needs, retrieve relevant information, and execute tasks.

## Core Components

1. **Orchestrator**: The central coordinator that routes requests to appropriate agents and manages communication between them. It handles the overall flow of information and ensures that each agent receives the inputs it needs.

2. **Specialized Agents**: Purpose-built agents with specific responsibilities:
   - Planner Agent: Creates structured plans for task execution
   - Knowledge Agent: Retrieves and synthesizes information
   - Execution Agent: Carries out specific actions

3. **Memory System**: Multi-layered memory integration with Chroma vector database for:
   - Short-term context tracking
   - Working memory for active tasks
   - Long-term knowledge storage

## Planner Agent

The Planner Agent is responsible for understanding user intent and creating structured plans for task execution. It breaks down complex requests into manageable steps and determines the optimal sequence of operations.

### Key Responsibilities:
- Analyzing user queries to identify the underlying intent
- Breaking down complex tasks into subtasks
- Creating execution plans with clear steps
- Prioritizing subtasks based on dependencies and importance
        `;
      } else if (slug === 'backend') {
        docContent = `
# Studi Backend Architecture

## Technology Stack

The Studi backend is built on the following technologies:

- **FastAPI**: Web framework for building APIs with Python
- **Pydantic**: Data validation and settings management
- **Supabase**: PostgreSQL database with authentication and real-time capabilities
- **Chroma**: Vector database for AI embeddings and semantic search
- **Clerk**: Authentication and user management
- **WebSockets**: For real-time communication
- **Python 3.11+**: Programming language
- **Render**: Cloud hosting platform

## Application Structure

The backend follows a modular structure organized by feature:

\`\`\`
studi-backend/
├── api/
│   ├── routes/
│   │   ├── auth.py
│   │   ├── agents.py
│   │   ├── canvas.py
│   │   ├── documents.py
│   │   └── ...
│   ├── dependencies.py
│   └── errors.py
├── core/
│   ├── config.py
│   ├── logging.py
│   └── security.py
├── agents/
│   ├── orchestrator.py
│   ├── planner.py
│   ├── knowledge.py
│   └── execution.py
├── db/
│   ├── supabase.py
│   └── chroma.py
├── models/
│   ├── user.py
│   ├── document.py
│   └── ...
├── services/
│   ├── canvas.py
│   ├── document_processor.py
│   └── ...
└── main.py
\`\`\`
        `;
      } else if (slug === 'canvas_integration') {
        docContent = `
# Canvas Integration

## Overview

The Canvas Integration component of Studi facilitates seamless connectivity with the Canvas Learning Management System (LMS). This integration enables students to access course materials, assignments, and grades directly within the Studi platform, creating a unified learning experience.

## Key Features

1. **Course Synchronization**: Automatically imports courses, sections, and enrollment data from Canvas.

2. **Assignment Integration**: Displays upcoming assignments, due dates, and submission status.

3. **Grade Tracking**: Shows current grades and progress in each course.

4. **Material Access**: Provides direct access to course materials, readings, and resources.

5. **Real-time Updates**: Maintains synchronization with Canvas to reflect the latest changes.

6. **Automated Content Processing**: Analyzes course materials to enhance study capabilities.

## Architecture

The Canvas integration consists of three main components:

1. **Canvas API Client**: Handles authentication and communication with the Canvas LMS API.

2. **Data Synchronization Service**: Manages the regular updating of course data between Canvas and Studi.

3. **Content Processor**: Analyzes and transforms Canvas content for use within Studi's features.
        `;
      } else if (slug === 'deployment') {
        docContent = `
# Deployment Guide

This guide provides instructions for deploying the Studi application in various environments.

## Local Development Setup

### Prerequisites

- Python 3.10+
- Node.js 16+
- Docker
- Git

### Clone the Repository

\`\`\`bash
git clone https://github.com/studi-org/studi.git
\`\`\`

## Table of Contents

1. [Local Development](#local-development-setup)
2. [Staging Environment](#staging-environment)
3. [Production Environment](#production-environment)
4. [Configuration Management](#configuration-management)
5. [Database Setup](#database-setup)
6. [Scaling Strategies](#scaling-strategies)
7. [Monitoring](#monitoring)
8. [Maintenance](#maintenance)
9. [Disaster Recovery](#disaster-recovery)
        `;
      } else {
        docContent = `# Document Not Found

The requested document "${slug}" could not be found. Please check the URL and try again.

## Available Documents

Please refer to the sidebar for a list of available documentation.
`;
      }
      
      setContent(docContent);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-accent/30 rounded w-3/4 mb-6"></div>
        <div className="space-y-3">
          <div className="h-4 bg-accent/30 rounded w-full"></div>
          <div className="h-4 bg-accent/30 rounded w-5/6"></div>
          <div className="h-4 bg-accent/30 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <Markdown content={content} />
    </div>
  );
} 
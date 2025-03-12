# CanvasManus Architecture

This document provides an overview of the CanvasManus application architecture, explaining the key components and how they interact.

## Overview

CanvasManus is built using a modern web stack with a clear separation between frontend and backend services. The application follows a client-server architecture with real-time capabilities for collaborative features.

```
┌─────────────────┐        ┌─────────────────┐
│                 │        │                 │
│    Frontend     │◄───────┤    Backend      │
│    (Next.js)    │        │    (Node.js)    │
│                 │───────►│                 │
└─────────────────┘        └─────────────────┘
                                   │
                                   │
                                   ▼
                           ┌─────────────────┐
                           │                 │
                           │   MongoDB       │
                           │   Database      │
                           │                 │
                           └─────────────────┘
```

## Frontend Architecture

The frontend is built with Next.js, React, and TypeScript, providing a robust and type-safe user interface.

### Key Frontend Components

1. **App Router**: Next.js app router manages the client-side navigation and server-side rendering.
2. **Document Canvas**: Built using a custom canvas rendering engine for manipulating and displaying document elements.
3. **Markdown Editor**: Rich text editing with Markdown support.
4. **Real-time Sync**: WebSocket integration for collaborative editing.
5. **UI Components**: Reusable UI components built with React and TailwindCSS.

### Frontend Directory Structure

```
frontend/
├── app/                  # Next.js app directory
│   ├── docs/             # Documentation pages
│   ├── dashboard/        # User dashboard
│   ├── canvas/           # Canvas editing interface
│   └── layout.tsx        # Root layout with shared UI
├── components/           # Reusable React components
│   ├── ui/               # Base UI components
│   ├── canvas/           # Canvas-specific components
│   └── markdown/         # Markdown editor components
├── lib/                  # Utility functions and hooks
│   ├── api.ts            # API client
│   ├── auth.ts           # Authentication utilities
│   └── canvas-utils.ts   # Canvas manipulation utilities
├── public/               # Static assets
└── docs/                 # Documentation source files
```

## Backend Architecture

The backend is built with Node.js and Express, providing RESTful APIs and WebSocket connections for real-time features.

### Key Backend Components

1. **API Server**: Express.js server providing RESTful endpoints.
2. **WebSocket Server**: Socket.io for real-time communication.
3. **Authentication**: JWT-based authentication and authorization.
4. **Database Layer**: MongoDB for document and user data storage.
5. **Document Processing**: Markdown parsing and rendering services.

### Backend Directory Structure

```
backend/
├── controllers/          # Request handlers
│   ├── auth.js           # Authentication controllers
│   ├── documents.js      # Document CRUD operations
│   └── users.js          # User management
├── models/               # Database models
│   ├── Document.js       # Document schema
│   └── User.js           # User schema
├── routes/               # API routes
│   ├── auth.js           # Authentication routes
│   ├── documents.js      # Document routes
│   └── users.js          # User routes
├── services/             # Business logic
│   ├── canvas.js         # Canvas manipulation logic
│   └── collaboration.js  # Real-time collaboration
├── socket/               # WebSocket handlers
│   └── index.js          # Socket.io setup
└── server.js             # Main application entry point
```

## Data Flow

1. **User Authentication**:
   - User logs in via the frontend authentication form
   - Frontend sends credentials to the backend auth API
   - Backend validates credentials and returns a JWT token
   - Frontend stores token for authenticated requests

2. **Document Creation/Editing**:
   - User creates/opens a document in the frontend
   - Frontend loads document data from backend API
   - User edits document in the canvas interface
   - Changes are sent to the backend via WebSocket
   - Backend processes changes and updates the database
   - Changes are broadcast to other connected users

3. **Collaboration**:
   - Multiple users can connect to the same document
   - WebSocket provides real-time updates between users
   - Operational Transformation (OT) algorithm resolves conflicts
   - User presence indicators show who is currently editing

## Database Schema

### Document Collection

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  content: {
    blocks: Array,
    connections: Array,
    metadata: Object
  },
  owner: { type: ObjectId, ref: 'User' },
  collaborators: [
    {
      user: { type: ObjectId, ref: 'User' },
      role: String // "viewer", "editor", "admin"
    }
  ],
  createdAt: Date,
  updatedAt: Date,
  isPublic: Boolean,
  parentDocument: { type: ObjectId, ref: 'Document' }
}
```

### User Collection

```javascript
{
  _id: ObjectId,
  email: String,
  passwordHash: String,
  name: String,
  avatar: String,
  createdAt: Date,
  updatedAt: Date,
  settings: {
    theme: String,
    defaultEditorMode: String
  }
}
```

## Technology Stack

### Frontend
- **Next.js**: React framework with server-side rendering
- **React**: UI component library
- **TypeScript**: Type-safe JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **Socket.io-client**: WebSocket client for real-time features

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **Socket.io**: WebSocket server
- **JWT**: JSON Web Tokens for authentication

## Deployment Architecture

In production, CanvasManus is deployed using a containerized approach with Docker:

```
┌───────────────────────────────────────────────────┐
│                 Load Balancer                     │
└───────────────────────────────────────────────────┘
                     │
                     ▼
┌───────────────────────────────────────────────────┐
│                   API Gateway                     │
└───────────────────────────────────────────────────┘
         │                           │
         ▼                           ▼
┌───────────────────┐      ┌───────────────────┐
│  Frontend Cluster │      │  Backend Cluster  │
│  (Next.js)        │      │  (Node.js)        │
└───────────────────┘      └───────────────────┘
                                    │
                                    ▼
                           ┌─────────────────────┐
                           │  MongoDB Atlas      │
                           │  (Database Cluster) │
                           └─────────────────────┘
```

Each component is deployed as a Docker container, orchestrated with Kubernetes for scalability and high availability.

## Performance Optimizations

1. **Server-Side Rendering**: Critical pages are server-rendered for faster initial loading
2. **Code Splitting**: JavaScript bundles are split by route for smaller initial load
3. **Asset Optimization**: Images and static assets are optimized and CDN-distributed
4. **Caching**: API responses are cached for frequently accessed data
5. **Database Indexing**: MongoDB collections are indexed for faster queries

## Security Measures

1. **Authentication**: JWT-based authentication with secure storage
2. **Authorization**: Role-based access control for document access
3. **Data Validation**: Input validation on all API endpoints
4. **HTTPS**: All traffic is encrypted using HTTPS
5. **Rate Limiting**: API rate limiting to prevent abuse
6. **CORS**: Proper CORS configuration to control access

## Monitoring and Logging

1. **Application Logs**: Structured logging with different severity levels
2. **Performance Metrics**: Response times, error rates, and system resource usage
3. **User Analytics**: Anonymous usage statistics for feature improvements
4. **Error Tracking**: Automated error reporting with stack traces

This architecture is designed to be scalable, maintainable, and secure, providing a solid foundation for the CanvasManus document canvas application. 
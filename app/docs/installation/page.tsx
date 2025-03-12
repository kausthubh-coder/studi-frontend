"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X, Book, Terminal, ChevronRight, FileText, Code, Server } from "lucide-react";

export default function InstallationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border/10 bg-background">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-xl font-bold hidden sm:block">
            <span className="text-foreground">Canvas</span>
            <span className="text-[#0070f3]">Manus</span> Documentation
          </h1>
          <button 
            className="sm:hidden p-2 text-foreground rounded-md hover:bg-accent/50"
            onClick={toggleSidebar}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-10 sm:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <aside 
          className={`w-64 bg-background border-r border-border/10 fixed top-0 bottom-0 left-0 z-20 pt-16 transition-transform duration-300 ease-in-out sm:translate-x-0 sm:static sm:h-auto sm:pt-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="sticky top-0 p-4 flex justify-between items-center sm:hidden bg-background border-b border-border/10">
            <h2 className="font-bold">Documentation</h2>
            <button 
              className="p-1 text-muted-foreground rounded-md hover:bg-accent/50"
              onClick={toggleSidebar}
            >
              <X size={18} />
            </button>
          </div>
          <nav className="p-4 sm:p-6">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Getting Started</h3>
              <ul className="space-y-1">
                <li>
                  <Link 
                    href="/docs" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent/30"
                  >
                    <Book size={16} />
                    <span>Introduction</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/docs/installation" 
                    className="flex items-center gap-2 text-foreground font-medium p-2 rounded-md bg-accent/50"
                  >
                    <Terminal size={16} />
                    <span>Installation</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/docs/quickstart" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent/30"
                  >
                    <ChevronRight size={16} />
                    <span>Quickstart</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Core Concepts</h3>
              <ul className="space-y-1">
                <li>
                  <Link 
                    href="/docs/document-canvas" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent/30"
                  >
                    <FileText size={16} />
                    <span>Document Canvas</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/docs/markdown" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent/30"
                  >
                    <Code size={16} />
                    <span>Markdown Support</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/docs/collaboration" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent/30"
                  >
                    <Server size={16} />
                    <span>Real-time Collaboration</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">API Reference</h3>
              <ul className="space-y-1">
                <li>
                  <Link 
                    href="/docs/api" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent/30"
                  >
                    <Server size={16} />
                    <span>API Overview</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Installation Guide</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                This guide will walk you through the process of setting up CanvasManus on your system.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">System Requirements</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Node.js 18.0.0 or later</li>
                <li className="mb-2">npm 8.0.0 or later (or yarn/pnpm)</li>
                <li className="mb-2">MongoDB 5.0 or later</li>
                <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Installation Steps</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1. Clone the Repository</h3>
              <div className="bg-accent/30 p-4 rounded-md mb-6 overflow-x-auto">
                <pre><code>git clone https://github.com/yourusername/canvasmanus.git
cd canvasmanus</code></pre>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">2. Install Dependencies</h3>
              <div className="bg-accent/30 p-4 rounded-md mb-6 overflow-x-auto">
                <pre><code># Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install</code></pre>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">3. Configure Environment Variables</h3>
              <p className="mb-4">
                Create a <code>.env</code> file in the backend directory with the following variables:
              </p>
              <div className="bg-accent/30 p-4 rounded-md mb-6 overflow-x-auto">
                <pre><code>PORT=3001
MONGODB_URI=mongodb://localhost:27017/canvasmanus
JWT_SECRET=your_jwt_secret_here
CORS_ORIGIN=http://localhost:3000</code></pre>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">4. Start the Application</h3>
              <div className="bg-accent/30 p-4 rounded-md mb-6 overflow-x-auto">
                <pre><code># Start the backend server
cd backend
npm run dev

# In a separate terminal, start the frontend
cd frontend
npm run dev</code></pre>
              </div>

              <p className="mb-4">
                The frontend should now be running at <a href="http://localhost:3000" className="text-[#0070f3] hover:underline">http://localhost:3000</a>,
                and the backend at <a href="http://localhost:3001" className="text-[#0070f3] hover:underline">http://localhost:3001</a>.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Next Steps</h2>
              <p className="mb-4">
                Now that you have CanvasManus installed, you can proceed to the Quickstart guide to learn
                how to create your first document canvas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/docs/quickstart"
                  className="px-4 py-2 rounded-md bg-accent/50 text-foreground hover:bg-accent/70 inline-flex items-center gap-2"
                >
                  <ChevronRight size={18} />
                  Quickstart Guide
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 
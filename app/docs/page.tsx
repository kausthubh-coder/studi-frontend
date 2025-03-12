"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X, ChevronRight, FileText, Code, Book, Terminal, Server } from "lucide-react";

export default function DocsPage() {
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
                    className="flex items-center gap-2 text-foreground font-medium p-2 rounded-md bg-accent/50"
                  >
                    <Book size={16} />
                    <span>Introduction</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/docs/installation" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent/30"
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
            <h1 className="text-3xl font-bold mb-6">Introduction to CanvasManus</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                CanvasManus is a powerful document canvas application for creating, managing, and sharing your ideas.
                It provides a flexible workspace where you can organize your thoughts, collaborate with others, and
                create rich, interactive documents.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">What is CanvasManus?</h2>
              <p className="mb-4">
                CanvasManus combines the flexibility of a canvas with the structure of a document editor. It allows
                you to create nested documents, add rich content, and organize your ideas in a way that makes sense to you.
              </p>
              <p className="mb-4">
                With its intuitive interface and powerful features, CanvasManus is the perfect tool for:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Creating documentation and knowledge bases</li>
                <li className="mb-2">Planning projects and organizing ideas</li>
                <li className="mb-2">Collaborating with teams in real-time</li>
                <li className="mb-2">Taking notes and capturing thoughts</li>
                <li>Creating interactive presentations</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Document Canvas</h3>
              <p className="mb-4">
                The document canvas is the core of CanvasManus. It provides a flexible workspace where you can
                organize your content spatially, creating connections between ideas and building a visual map of your thoughts.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Nested Documents</h3>
              <p className="mb-4">
                CanvasManus allows you to create nested documents, so you can organize your content hierarchically.
                This makes it easy to create complex document structures while keeping everything organized and accessible.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Markdown Support</h3>
              <p className="mb-4">
                CanvasManus supports Markdown, allowing you to format your text using a simple, intuitive syntax.
                You can create headings, lists, code blocks, and more, all using Markdown.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Real-time Collaboration</h3>
              <p className="mb-6">
                Work together with your team in real-time. Multiple users can edit the same document simultaneously,
                with changes synced instantly across all connected clients.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
              <p className="mb-4">
                Ready to get started with CanvasManus? Check out the installation guide to set up your own instance,
                or try the quickstart guide to get up and running quickly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/docs/installation"
                  className="px-4 py-2 rounded-md bg-accent/50 text-foreground hover:bg-accent/70 inline-flex items-center gap-2"
                >
                  <Terminal size={18} />
                  Installation Guide
                </Link>
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
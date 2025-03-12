import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/ui/sidebar";
import { getDocsNavigation } from "@/lib/docs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studi - Documentation",
  description: "Documentation for the Studi platform",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = getDocsNavigation();

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
            <span className="text-foreground">Studi</span>
            <span className="text-blue-600"> Documentation</span>
          </h1>
          <div className="w-6 sm:hidden"></div>
        </div>
      </header>

      <div className="flex flex-1">
        <Sidebar links={navigation} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 
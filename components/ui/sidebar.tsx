"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { 
  Book, 
  Server, 
  Code, 
  GraduationCap,
  FileText,
  Terminal,
  X,
  Menu
} from "lucide-react";

interface SidebarLink {
  title: string;
  href: string;
  icon?: React.ElementType;
}

interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

interface SidebarProps {
  className?: string;
  links: SidebarSection[];
}

export function Sidebar({ className, links }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu toggle */}
      <div className="flex items-center sm:hidden">
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 text-foreground rounded-md hover:bg-accent/50"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 w-64 h-full bg-background border-r border-border/10 transition-transform duration-300 ease-in-out sm:translate-x-0 sm:sticky sm:top-0 sm:h-[calc(100vh-4rem)]",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between p-4 border-b sm:hidden">
          <h2 className="font-bold">Documentation</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md hover:bg-accent/50"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <nav className="p-4 overflow-y-auto h-full">
          {links.map((section, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links?.map((link, j) => {
                  const isActive = pathname === link.href;
                  const Icon = link.icon;
                  
                  return (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-2 p-2 rounded-md transition-colors",
                          isActive
                            ? "bg-accent/50 text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                        )}
                      >
                        {Icon && <Icon size={16} />}
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
} 
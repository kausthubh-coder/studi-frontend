import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CanvasManus - Documentation",
  description: "Documentation for the CanvasManus document canvas application",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
} 
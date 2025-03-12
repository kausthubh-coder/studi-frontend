/**
 * A utility function to conditionally join classNames together
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * A utility function to format markdown content from string
 */
export function formatMarkdown(content: string): string {
  // Remove front matter if present (between --- and ---)
  const cleanedContent = content.replace(/^---[\s\S]*?---/, '').trim();
  
  return cleanedContent;
} 
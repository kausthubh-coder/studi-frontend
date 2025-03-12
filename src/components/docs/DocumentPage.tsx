import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// This is a placeholder component that would load real markdown/documentation in production
export default function DocumentPage() {
  const { docId } = useParams<{ docId: string }>();
  const [content, setContent] = useState<string>('');
  const [toc, setToc] = useState<{ id: string; title: string; level: number }[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulated document fetch
  useEffect(() => {
    // In a real app, this would fetch the actual documentation
    const timeout = setTimeout(() => {
      // Replace with actual API call to get the documentation
      setContent(`
# ${getDocTitle(docId)}

This is a placeholder for the documentation content. In the actual application, this would be loaded from a markdown file or API call.

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Features

- Feature one with detailed explanation
- Feature two with implementation details
- Feature three with usage examples

## Implementation

\`\`\`typescript
// Example code block
function exampleFunction() {
  const data = fetchData();
  return processData(data);
}
\`\`\`

## Configuration

Configuration options are detailed below:

| Option | Description | Default |
|--------|-------------|---------|
| option1 | Description of option 1 | default1 |
| option2 | Description of option 2 | default2 |
| option3 | Description of option 3 | default3 |

## Best Practices

1. First best practice
2. Second best practice
3. Third best practice

## Troubleshooting

Common issues and their solutions:

### Issue 1
Solution for issue 1

### Issue 2
Solution for issue 2
      `);

      // Generate TOC from headings
      setToc([
        { id: 'introduction', title: 'Introduction', level: 2 },
        { id: 'features', title: 'Features', level: 2 },
        { id: 'implementation', title: 'Implementation', level: 2 },
        { id: 'configuration', title: 'Configuration', level: 2 },
        { id: 'best-practices', title: 'Best Practices', level: 2 },
        { id: 'troubleshooting', title: 'Troubleshooting', level: 2 },
        { id: 'issue-1', title: 'Issue 1', level: 3 },
        { id: 'issue-2', title: 'Issue 2', level: 3 },
      ]);

      setLoading(false);
    }, 500); // Simulated load time

    return () => clearTimeout(timeout);
  }, [docId]);

  // Convert markdown-like content to HTML (very simplified)
  const renderMarkdown = (markdown: string) => {
    // This is a very simple markdown renderer for demonstration
    // In a real app, use a library like marked or react-markdown
    const html = markdown
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 id="$1" class="text-2xl font-bold mt-6 mb-3">$1</h2>'.toLowerCase())
      .replace(/^### (.*$)/gm, '<h3 id="$1" class="text-xl font-bold mt-4 mb-2">$1</h3>'.toLowerCase())
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>')
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto my-4"><code>$1</code></pre>')
      .replace(/- (.*)/g, '<li class="ml-6 list-disc">$1</li>')
      .replace(/<\/li>\n<li/g, '</li><li')
      .replace(/^[0-9]+\. (.*)/gm, '<li class="ml-6 list-decimal">$1</li>')
      .replace(/\n\n/g, '<p class="my-4"></p>');
    
    return { __html: html };
  };

  // Helper to get the document title from the URL parameter
  function getDocTitle(id: string | undefined): string {
    if (!id) return 'Documentation';
    
    // Convert kebab-case to title case
    return id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link to="/docs" className="inline-flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Documentation
        </Link>
      </div>
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Table of Contents - Desktop */}
        <div className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">On this page</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {toc.map((item) => (
                <li key={item.id} className={`ml-${(item.level - 2) * 4}`}>
                  <a 
                    href={`#${item.id.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="prose prose-blue max-w-none lg:col-span-9 dark:prose-invert">
          <div dangerouslySetInnerHTML={renderMarkdown(content)} />
        </div>
      </div>
    </div>
  );
} 
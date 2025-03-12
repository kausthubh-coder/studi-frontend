import fs from 'fs';
import path from 'path';
import { formatMarkdown } from './utils';
import { Book, GraduationCap, Server, Terminal, FileText, Code } from 'lucide-react';

// Base path for docs
const docsDirectory = path.join(process.cwd(), '..', 'docs');

/**
 * Reads a markdown file and returns its content
 */
export function getDocBySlug(slug: string): string {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return formatMarkdown(fileContents);
  } catch (error) {
    console.error(`Error reading doc file ${slug}:`, error);
    return '# Document Not Found';
  }
}

/**
 * Gets all available doc slugs
 */
export function getAllDocSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(docsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading docs directory:', error);
    return [];
  }
}

/**
 * Gets all docs metadata and organizes them by category
 */
export function getDocsNavigation() {
  const slugs = getAllDocSlugs();
  
  const architectureItems = slugs.filter(slug => 
    slug.includes('ARCHITECTURE') || 
    slug.includes('AGENT') || 
    slug === 'BACKEND'
  );
  
  const integrationItems = slugs.filter(slug => 
    slug.includes('INTEGRATION') || 
    slug.includes('DEPLOYMENT')
  );
  
  const generalItems = slugs.filter(slug => 
    !architectureItems.includes(slug) && 
    !integrationItems.includes(slug) &&
    slug !== 'README'
  );
  
  return [
    {
      title: 'Overview',
      links: [
        {
          title: 'Introduction',
          href: '/docs',
          icon: Book
        }
      ]
    },
    {
      title: 'Architecture',
      links: architectureItems.map(slug => ({
        title: slug.replace('_', ' ').replace(/([A-Z])/g, ' $1').trim(),
        href: `/docs/${slug.toLowerCase()}`,
        icon: slug.includes('AGENT') ? GraduationCap : Server
      }))
    },
    {
      title: 'Integration & Deployment',
      links: integrationItems.map(slug => ({
        title: slug.replace('_', ' ').replace(/([A-Z])/g, ' $1').trim(),
        href: `/docs/${slug.toLowerCase()}`,
        icon: slug.includes('DEPLOYMENT') ? Terminal : FileText
      }))
    },
    {
      title: 'General',
      links: generalItems.map(slug => ({
        title: slug.replace('_', ' ').replace(/([A-Z])/g, ' $1').trim(),
        href: `/docs/${slug.toLowerCase()}`,
        icon: Code
      }))
    }
  ];
} 
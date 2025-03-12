import { Link } from 'react-router-dom';
import { BookOpenIcon, CodeBracketIcon, ShieldCheckIcon, ServerIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

// Documentation categories and documents
const docCategories = [
  {
    name: 'Architecture',
    icon: ServerIcon,
    description: 'System architecture and design principles',
    documents: [
      { title: 'Architecture Overview', path: '/docs/architecture' },
      { title: 'Agent Architecture', path: '/docs/agent-architecture' },
      { title: 'Memory System', path: '/docs/memory-system' },
      { title: 'Web Architecture', path: '/docs/web-architecture' },
    ],
  },
  {
    name: 'User Guides',
    icon: BookOpenIcon,
    description: 'Guides for users of the Studi platform',
    documents: [
      { title: 'Getting Started', path: '/docs/getting-started' },
      { title: 'Terminal Agent Guide', path: '/docs/terminal-agent' },
      { title: 'Canvas Integration', path: '/docs/canvas-integration' },
      { title: 'Assignment Features', path: '/docs/assignment-features' },
      { title: 'Advanced Learning Features', path: '/docs/learning-features' },
    ],
  },
  {
    name: 'Development',
    icon: CodeBracketIcon,
    description: 'Documentation for developers',
    documents: [
      { title: 'Development Setup', path: '/docs/development' },
      { title: 'Contributing Guide', path: '/docs/contributing' },
      { title: 'Coding Standards', path: '/docs/coding-standards' },
      { title: 'Testing Guide', path: '/docs/testing' },
    ],
  },
  {
    name: 'API Documentation',
    icon: CodeBracketIcon,
    description: 'Documentation for Studi\'s APIs',
    documents: [
      { title: 'API Overview', path: '/docs/api' },
      { title: 'Canvas API Integration', path: '/docs/canvas-api' },
      { title: 'OpenAI API Integration', path: '/docs/openai-api' },
    ],
  },
  {
    name: 'Deployment & Operations',
    icon: ServerIcon,
    description: 'Documentation for deploying and operating Studi',
    documents: [
      { title: 'Deployment Guide', path: '/docs/deployment' },
      { title: 'Configuration Guide', path: '/docs/configuration' },
      { title: 'Monitoring & Logging', path: '/docs/monitoring' },
      { title: 'Scaling Guide', path: '/docs/scaling' },
    ],
  },
  {
    name: 'Security & Compliance',
    icon: ShieldCheckIcon,
    description: 'Documentation related to security and compliance',
    documents: [
      { title: 'Security Guide', path: '/docs/security' },
      { title: 'Data Protection', path: '/docs/data-protection' },
      { title: 'Compliance', path: '/docs/compliance' },
    ],
  },
];

export default function DocsList() {
  return (
    <div className="bg-white py-12 dark:bg-gray-900">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Documentation</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Comprehensive documentation for the Studi platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {docCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex items-center">
                <category.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                <h2 className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">{category.name}</h2>
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{category.description}</p>
              <ul className="space-y-2">
                {category.documents.map((doc) => (
                  <li key={doc.path}>
                    <Link
                      to={doc.path}
                      className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Documentation', href: '/docs' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Studi</h1>
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden md:flex">
            <Link
              to="/login"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 py-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-primary-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="block w-full rounded-md bg-primary-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-primary-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 
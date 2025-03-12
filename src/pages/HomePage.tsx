import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
  { name: 'Multi-Agent AI System', description: 'Specialized agents work together to understand, plan, and execute tasks.' },
  { name: 'Personalized Study Guides', description: 'Automatically generate tailored study materials based on your learning style.' },
  { name: 'Assignment Solutions', description: 'Get step-by-step assistance with solving complex assignments across subjects.' },
  { name: 'Interactive Quizzing', description: 'Test your knowledge with customizable quizzes that provide instant feedback.' },
  { name: 'Visual Learning Simulations', description: 'Interactive visualizations that make complex concepts easier to understand.' },
  { name: 'Math & Physics Problem Solving', description: 'Solve mathematical and physics problems with detailed explanations.' },
];

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-secondary-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Transform Your Learning Experience with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Studi leverages advanced AI to provide personalized learning assistance, assignment support, and interactive visualizations to help you achieve academic success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/features"
                className="btn-primary px-6 py-3 text-base"
              >
                Explore Features
              </Link>
              <Link to="/docs" className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                View Documentation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Smarter Learning</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to excel in your studies
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Studi combines advanced AI with Canvas LMS integration to provide a comprehensive learning assistant that adapts to your needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <CheckCircleIcon className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-600 dark:bg-primary-700">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your learning experience?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Join thousands of students who are using Studi to improve their academic performance. Get started today and see the difference.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/login"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </Link>
            <Link to="/docs" className="text-base font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
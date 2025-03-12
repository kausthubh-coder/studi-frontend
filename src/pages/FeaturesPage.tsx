import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BoltIcon, 
  BookOpenIcon, 
  BeakerIcon,
  ChartBarIcon, 
  ClockIcon, 
  CloudIcon, 
  CogIcon, 
  DocumentTextIcon, 
  LightBulbIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      name: "Multi-Agent AI System",
      icon: <BeakerIcon className="h-12 w-12 text-indigo-600" />,
      description: "Our advanced multi-agent system combines specialized AI agents for planning, knowledge creation, and task execution to deliver comprehensive learning assistance.",
      details: [
        "Planner Agent breaks down complex topics into manageable learning paths",
        "Knowledge Agent retrieves and synthesizes information from multiple sources",
        "Execution Agent implements the learning plan with interactive exercises"
      ]
    },
    {
      name: "Personalized Study Guides",
      icon: <DocumentTextIcon className="h-12 w-12 text-indigo-600" />,
      description: "Generate custom study materials tailored to your learning style, knowledge gaps, and course requirements.",
      details: [
        "Adaptive content that focuses on your weak areas",
        "Multiple formats including summaries, flashcards, and practice questions",
        "Progressive difficulty levels that grow with your understanding"
      ]
    },
    {
      name: "Smart Assignment Help",
      icon: <LightBulbIcon className="h-12 w-12 text-indigo-600" />,
      description: "Get step-by-step guidance on assignments with explanations that help you truly understand the material.",
      details: [
        "Detailed breakdowns of complex problems",
        "Multiple solution approaches with pros and cons",
        "Conceptual explanations that connect to course materials"
      ]
    },
    {
      name: "Multi-Layered Memory",
      icon: <CloudIcon className="h-12 w-12 text-indigo-600" />,
      description: "Our sophisticated memory system remembers your learning journey to provide increasingly personalized assistance.",
      details: [
        "Short-term memory for immediate context awareness",
        "Long-term memory for tracking progress across sessions",
        "Knowledge creation system that builds on your learning history"
      ]
    },
    {
      name: "Canvas LMS Integration",
      icon: <CogIcon className="h-12 w-12 text-indigo-600" />,
      description: "Seamlessly connect with your Canvas Learning Management System to access course materials and assignments.",
      details: [
        "Automatic import of syllabus and course structure",
        "Direct access to assignment details and deadlines",
        "Synchronized progress tracking with your Canvas account"
      ]
    },
    {
      name: "Real-time Collaboration",
      icon: <UserGroupIcon className="h-12 w-12 text-indigo-600" />,
      description: "Study together with classmates in collaborative sessions with shared AI assistance.",
      details: [
        "Synchronized study rooms for group learning",
        "Shared notes and annotations",
        "Collaborative problem-solving with AI guidance"
      ]
    },
    {
      name: "Progress Analytics",
      icon: <ChartBarIcon className="h-12 w-12 text-indigo-600" />,
      description: "Track your learning progress with detailed analytics and insights to optimize your study habits.",
      details: [
        "Visual dashboards showing mastery of topics",
        "Time management analysis and recommendations",
        "Prediction of potential knowledge gaps"
      ]
    },
    {
      name: "Spaced Repetition",
      icon: <ClockIcon className="h-12 w-12 text-indigo-600" />,
      description: "Optimize your long-term retention with scientifically-proven spaced repetition scheduling.",
      details: [
        "Automated scheduling of review sessions",
        "Adaptive intervals based on your recall performance",
        "Integration with your calendar for study reminders"
      ]
    },
    {
      name: "Instant Answers",
      icon: <BoltIcon className="h-12 w-12 text-indigo-600" />,
      description: "Get immediate responses to your questions with accurate, course-specific information.",
      details: [
        "Context-aware responses that understand your course",
        "Citation of sources for verification",
        "Follow-up capability for deeper exploration"
      ]
    },
    {
      name: "Comprehensive Library",
      icon: <BookOpenIcon className="h-12 w-12 text-indigo-600" />,
      description: "Access a vast knowledge base covering numerous subjects, textbooks, and academic resources.",
      details: [
        "Extensive coverage across academic disciplines",
        "Up-to-date information from trusted sources",
        "Multimedia resources including diagrams and explanations"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Powerful Features for Smarter Learning
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Studi combines cutting-edge AI technology with educational expertise to transform how you learn, study, and succeed in your academic journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/docs" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                View Documentation
              </Link>
              <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
                Back to Home <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Advanced Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to excel in your studies
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Studi combines state-of-the-art AI technology with educational best practices to create a learning experience that adapts to your unique needs.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="relative flex flex-col gap-6 sm:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 sm:shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to transform your learning experience?
            <br />
            <span className="text-indigo-600">Get started with Studi today.</span>
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link to="/signup" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign Up
            </Link>
            <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log In <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage; 
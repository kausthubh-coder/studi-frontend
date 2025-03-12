import { Route, Routes, useLocation } from 'react-router-dom';
import DocsList from '../components/docs/DocsList';
import DocumentPage from '../components/docs/DocumentPage';

export default function DocPage() {
  const location = useLocation();
  const isDocsRoot = location.pathname === '/docs';

  return (
    <div className="min-h-screen bg-gray-50 pt-8 dark:bg-gray-900">
      <Routes>
        <Route path="/" element={<DocsList />} />
        <Route path="/:docId" element={<DocumentPage />} />
      </Routes>
    </div>
  );
} 
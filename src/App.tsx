import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DocPage from './pages/DocPage';
import FeaturesPage from './pages/FeaturesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/docs/*" element={<DocPage />} />
          {/* Additional routes will be added here as we create more pages */}
          <Route path="*" element={<div className="container py-16 text-center"><h1 className="text-2xl font-bold">Page Not Found</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

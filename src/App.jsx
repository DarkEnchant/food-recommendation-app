import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Questionnaire from './pages/Questionnaire';
import Results from './pages/Results';

function App() {
  return (
    <div className="min-h-screen bg-purple-50 text-gray-900">
      <nav className="bg-purple-700 p-4 text-white flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;

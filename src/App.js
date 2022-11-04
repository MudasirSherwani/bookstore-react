import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Quote" element={<Categories />} />
        </Routes>
      </Router>
    </>
  );
}

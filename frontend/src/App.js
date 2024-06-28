import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home';  // Adjust the path according to your folder structure
import Optiondata from '../src/page/optaion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/option-data" element={<Optiondata />} />
      </Routes>
    </Router>
  );
}

export default App;

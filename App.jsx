import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './LandingPage';
import DiseasePrediction from './DiseasePrediction';
import DrugPrediction from './DrugPrediction';
import MyProfilePage from './MyProfilePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/disease-prediction" element={<DiseasePrediction />} />
        <Route path="/drug-prediction" element={<DrugPrediction />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
      </Routes>
    </Router>
  );
}
 

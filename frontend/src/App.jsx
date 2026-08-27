import React from 'react';
import Home from './pages/Home';
import Favorite from './pages/favorite';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import './css/App.css';

function App() {
  return (
    <main className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </main>
  )
}

export default App


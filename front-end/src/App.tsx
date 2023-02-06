import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tabela from './pages/Tabela';
import './App.css';
import LoginPage from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tabela" element={ <Tabela /> } />
        <Route path="/login" element={ <LoginPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

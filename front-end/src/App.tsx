import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tabela from './pages/Tabela';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tabela" element={ <Tabela /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

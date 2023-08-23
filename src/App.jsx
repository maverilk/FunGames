import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import Alta from './alta';
import Inicio from './inicio'; 
import Contact from './components/contact/contact';
import Nosotros from './nosotros';


const App = () => {
  return (
    <div>
      <Router>
        <NavBar /> 
        <Routes>
        <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/alta" element={<Alta />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;

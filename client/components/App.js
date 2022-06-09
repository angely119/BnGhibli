import React from "react";
import { HashRouter as Router } from 'react-router-dom';
import { NavBar, Routes, Footer } from './index';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </Router>
  )
};

export default App;

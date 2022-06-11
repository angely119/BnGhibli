import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthForm, NavBar, Routes, Footer } from './index';

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

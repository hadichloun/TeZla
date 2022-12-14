import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { useState } from 'react';
import Menu from './Menu';
import HeaderBlock from './features/HeaderBlock';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
    <div className="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
     {isMenuOpen && <Menu />}
     <HeaderBlock/>
    </div>
    </Router>
  );
}

export default App;

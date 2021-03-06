import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';

// Site Componnents
import Navbar from './components/Navbar';

// Site Pages
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
// import Modal from './components/Modal';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          {/* <Route exact path="/" component={Modal} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Router>
    </div>
  );
}

export default App;

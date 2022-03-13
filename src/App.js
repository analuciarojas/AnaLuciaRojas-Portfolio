import React, { useState } from "react";
import About from './components/About/About';
import NavbarFunction from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Home from './components/Home/Home';

import './App.css';

function App() {
  //Declare variables for nav 
  const [onHome, selectedHome] = useState(true);
  const [onContact, selectedContact] = useState(false);
  const [onAbout, selectedAbout] = useState(false);
  const [onPortfolio, selecetedPortfolio] = useState(false);
  const [onResume, selectedResume] = useState(false);

  return (
    <section>
      {/* Send variables to nav */}
      <NavbarFunction  
          onHome={onHome}selectedHome={selectedHome}
          onContact={onContact}selectedContact={selectedContact}
          onAbout={onAbout}selectedAbout={selectedAbout}
          onPortfolio={onPortfolio}selecetedPortfolio={selecetedPortfolio}
          onResume={onResume}selectedResume={selectedResume}
          />
          {/* If variable == true show that component */}
          {onHome ? (<Home/>):("")}
          {onContact ? (<Contact/>):("")}
          {onAbout ? (<About/>):("")}
          {onPortfolio ? (<Portfolio/>):("")}
          {onResume ? (<Resume/>):("")}
     </section>
     

  );
}

export default App;

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./styles.css";

function NavbarFunction(props) {
    var {
        onHome,selectedHome, onAbout,selectedAbout,onPortfolio,selecetedPortfolio, onContact,selectedContact,
        onResume,selectedResume
      } = props;
    
      function handleOnClick(target) {
        selectedHome(false);
        selectedAbout(false);
        selecetedPortfolio(false);
        selectedContact(false);
        selectedResume(false);

        if (target === 0) {
          selectedHome(true);
        }
        if (target === 1) {
          selectedAbout(true);
        }
        if (target === 2) {
          selecetedPortfolio(true);
        }
        if (target === 3) {
          selectedContact(true);
        }
        if(target === 4){
          selectedResume(true);
        }
      }
    
  return (
    <div className="border">
    <Container >
        <Nav.Link id="name" to="/">
            Ana 
        </Nav.Link>
    <Navbar>
        <div className="nav justify-contents-flex-end">
            {onHome ?( <Nav.Link id="nav-active">Home</Nav.Link>) : (<Nav.Link onClick={() => handleOnClick(0)}> Home </Nav.Link>)}
            {onAbout ?( <Nav.Link id="nav-active">About</Nav.Link>) : (<Nav.Link onClick={() => handleOnClick(1)}> About </Nav.Link>)}
            {onPortfolio ?( <Nav.Link id="nav-active">Portfolio</Nav.Link>) : (<Nav.Link onClick={() => handleOnClick(2)}> Portfolio </Nav.Link>)}
            {onContact ?( <Nav.Link id="nav-active">Contact</Nav.Link>) : (<Nav.Link onClick={() => handleOnClick(3)}> Contact </Nav.Link>)}
            {onResume ?( <Nav.Link id="nav-active">Resume</Nav.Link>) : (<Nav.Link onClick={() => handleOnClick(4)}> Resume </Nav.Link>)}
        </div>
    </Navbar>
    </Container>
    </div>
     
  );
}

export default NavbarFunction;
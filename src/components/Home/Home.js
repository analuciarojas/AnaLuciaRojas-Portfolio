import "./styles.css";
import React from 'react';
import coverImage from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/cover/face.png";
import github from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/github.png";
import linkedin from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/linkedin.png";
import gmail from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/gmail.png";

import { Container, Image } from "react-bootstrap";



function Home() {

  return (
    <Container className='container home'>
      <div class="sentence">
      Hi, <br></br>
      I am <p id="namehome">Ana Lucia</p>
      <br></br>
      A Full Stack Developer
      <br></br>
      <br></br>
      <div>
      <a href="https://github.com/analuciarojas"><Image className="small-image" src={github} /></a>
      <a href="https://www.linkedin.com/in/ana-lucia-rojas-rivas-50b11b204/"><Image className="small-image" src={linkedin} /></a>
      <a href="mailto:analurojasr@gmail.com"><Image className="small-image" src={gmail} /></a>
      </div>
      </div>
      <div>
        <Image className="cover-image" src={coverImage} />
      </div>
    </Container> 
      
     
  );
}

export default Home;
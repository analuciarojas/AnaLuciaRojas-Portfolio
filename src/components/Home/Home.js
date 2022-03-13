import "./styles.css";
import React from 'react';
import coverImage from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/cover/face.png";
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
      </div>
      <div>
        <Image className="cover-image" src={coverImage} />
      </div>
    </Container> 
     
  );
}

export default Home;
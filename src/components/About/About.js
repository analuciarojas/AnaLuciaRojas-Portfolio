import React from 'react';
import {  Image, Container } from "react-bootstrap";
import fullface from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/large/fullface.img";
import "./styles.css";

function About() {
  return (
    <div class='center'>
      <div class="column about">
        <div class="img-border"><Image className="large-image" src={fullface} /></div>
        <div id="nameheader">I am Ana Lucia Rojas Rivas</div>
        <p class="p"> My name is Ana Lucia Rojas Rivas, I was born in Brawley CA and I'm 18 years old. I'm currently a full time student, majoring in Computer Science in addition to this Coding Bootcam with UC Davis. I love everything that has to do with technology and I'm always ready and open to learn new things and live new challenges. 
        I have some previous experience with Java wich I think helps to learn other languages, and I find im more efficient in terms of problem solving. I am a very persistent and disciplined person in everything I do wich I think gives me an edge on other persons. My work ethic is based on always working harder than expected and expect nothing in return. 
        </p>
    </div>
    </div>
  );
}

export default About;
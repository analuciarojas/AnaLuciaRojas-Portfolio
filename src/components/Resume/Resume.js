import React from 'react';
import {Card, Image} from "react-bootstrap";
import js from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/js.png";
import react from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/react.png";
import mongoose from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/mongoose.png";
import mysql from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/mysql.png";
import html from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/html.png";
import node from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/node.png";

function Resume() {

  return (
    <div class='center'>
    <div class="column portfolio">
    <div class="skills" >Skills</div>
    <Card className="cards">JavaScript <Image className="small-images" src={js} /></Card>
    <Card className="cards">React <Image className="small-images" src={react} /></Card>
    <Card className="cards">MongoDB <Image className="small-images" src={mongoose} /></Card>
    <Card className="cards">MySQL <Image className="small-images" src={mysql} /></Card>
    <Card className="cards">HTML/CSS <Image className="small-images" src={html} /></Card>
    <Card className="cards">Node.js <Image className="small-images" src={node} /></Card>     
    </div>
    </div>
  );
}

export default Resume;
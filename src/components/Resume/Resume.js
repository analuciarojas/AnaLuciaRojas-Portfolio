import React from 'react';
import {Card, Image} from "react-bootstrap";
import js from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/js.png";
import react from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/react.png";
import mongoose from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/mongoose.png";
import mysql from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/mysql.png";
import html from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/html.png";
import node from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/node.png";
import jquery from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/jquery.png";
import bootstrap from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/bootstrap.png";
import rest from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/rest.png";
import api from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/api.png";
import express from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/express.png";
import graphql from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/graphql.png";

import "./styles.css";

function Resume() {

  return (
    <div class='center'>
    <div class="column portfolio">
    <div class="skills" >Resume</div>
    <div class="click">Click <a href="https://drive.google.com/drive/folders/1_CkxuN4qF5Z1FGfRaNNPpscVewlFa1GI?usp=sharing">here</a> to download my Resume</div><br></br>
    <div class="dec">Front-end Proficiencies</div>
    <Card className="cards">JavaScript <Image className="small-images" src={js} /></Card>
    <Card className="cards">JQuery <Image className="small-images" src={jquery} /></Card>
    <Card className="cards">React <Image className="small-images" src={react} /></Card>
    <Card className="cards">Bootstrap <Image className="small-images" src={bootstrap} /></Card>
    <Card className="cards">HTML/CSS <Image className="small-images" src={html} /></Card>
    <div class="dec">Back-end Proficiencies</div>
    <Card className="cards">REST<Image className="small-images" src={rest} /></Card>     
    <Card className="cards">APIs <Image className="small-images" src={api} /></Card>     
    <Card className="cards">Express <Image className="small-images" src={express} /></Card>     
    <Card className="cards">Node.js <Image className="small-images" src={node} /></Card>     
    <Card className="cards">MySQL <Image className="small-images" src={mysql} /></Card>
    <Card className="cards">MongoDB <Image className="small-images" src={mongoose} /></Card>
    <Card className="cards">GraphQL <Image className="small-images" src={graphql} /></Card>     

    </div>
    </div>
  );
}

export default Resume;
import "./styles.css";
import github from "/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/small/github.png";
import React, {useState} from "react";
import pwa from '/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/card/pwa.png';
import techblog from '/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/card/techblog.png';
import note from '/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/card/note.png';
import commerce from '/Users/analuciarojas/Desktop/projects/AnaLuciaRojas-Portfolio/src/assets/card/commerce.png';

import {Card, CardGroup, Image} from "react-bootstrap";

function Portfolio() {
  const [style,setStyle] = useState({display: 'none'});
  const [style1,setStyle1] = useState({display: 'none'});
  const [style2,setStyle2] = useState({display: 'none'});
  const [style3,setStyle3] = useState({display: 'none'});
  const [style4,setStyle4] = useState({display: 'none'});
  const [style5,setStyle5] = useState({display: 'none'});



  return (
    <div class='center'>
    <div class="column portfolio">

     <div class="skills" >Projects</div>
     <CardGroup> 
        <Card className="c" style={{ width: '18rem',margin:'1rem' }}>
        <a target="_blank" style={{ 
          backgroundImage: `url(${pwa})`,
          backgroundPosition:'center',
          backgroundSize: 'cover',
          height: '250px',
          width: "100%",
          }} href="https://pwa-budgettracker-analu.herokuapp.com/"
          onMouseEnter={e => {
            setStyle({display: 'block'});
          }}
          onMouseLeave={e => {
            setStyle({display: 'none'})
          }}></a>
          <div class="op" style={style}>Budget Tracker</div>
          <a style={style} class="op" href="https://github.com/analuciarojas/PWA-Budget-Tracker"><Image className="small-git" src={github} /></a>
        </Card>
        <Card className="c" style={{ width: '18rem',margin:'1rem' }}>
        <a target="_blank" style={{ 
          backgroundImage: `url(${techblog})`,
          backgroundPosition:'left',
          backgroundSize: 'cover',
          height: '250px',
          width: "100%",
          }} href="https://tech-blog-analu.herokuapp.com/"
          onMouseEnter={e => {
            setStyle1({display: 'block'});
          }}
          onMouseLeave={e => {
            setStyle1({display: 'none'})
          }}></a>
          <div class="op" style={style1}>Tech Blog</div>
          <a style={style1} class="op" href="https://github.com/analuciarojas/MVC-Tech-Blog"><Image className="small-git" src={github} /></a>
        </Card>
        <Card className="c" style={{ width: '18rem',margin:'1rem' }}>
        <a target="_blank" style={{ 
          backgroundImage: `url(${note})`,
          backgroundPosition:'center',
          backgroundSize: 'cover',
          height: '250px',
          width: "100%",
          }} href="https://express-note-taker-analu.herokuapp.com/"
          onMouseEnter={e => {
            setStyle2({display: 'block'});
          }}
          onMouseLeave={e => {
            setStyle2({display: 'none'})
          }}></a>
          <div class="op" style={style2}>Note Tacker</div>
          <a style={style2} class="op" href="https://github.com/analuciarojas/11.-Express.js-Challenge-Note-Taker"><Image className="small-git" src={github} /></a>
        </Card>
      
     </CardGroup>
     <CardGroup> 
        <Card className="c" style={{ width: '18rem',margin:'1rem' }}>
        <a target="_blank" style={{ 
          backgroundImage: `url(${commerce})`,
          backgroundPosition:'center',
          backgroundSize: 'cover',
          height: '250px',
          width: "100%",
          }} href="https://github.com/analuciarojas/ORM-E-commerce-Back-End"
          onMouseEnter={e => {
            setStyle3({display: 'block'});
          }}
          onMouseLeave={e => {
            setStyle3({display: 'none'})
          }}></a>
          <div class="op" style={style3}>E-Commerce Back End</div>
          <a style={style3} class="op" href="https://github.com/analuciarojas/ORM-E-commerce-Back-End"><Image className="small-git" src={github} /></a>
        </Card>
        <Card className="c" style={{ width: '18rem',margin:'1rem' }}>
        <a target="_blank" style={{ 
          backgroundImage: `url(${techblog})`,
          backgroundPosition:'left',
          backgroundSize: 'cover',
          height: '250px',
          width: "100%",
          }} href="https://tech-blog-analu.herokuapp.com/"
          onMouseEnter={e => {
            setStyle4({display: 'block'});
          }}
          onMouseLeave={e => {
            setStyle4({display: 'none'})
          }}></a>
          <div class="op" style={style4}>Tech Blog</div>
          <a style={style4} class="op" href="https://github.com/analuciarojas/MVC-Tech-Blog"><Image className="small-git" src={github} /></a>
        </Card>
        <Card className="c" style={{ width: '18rem',margin:'1rem' }}>
        <a target="_blank" style={{ 
          backgroundImage: `url(${note})`,
          backgroundPosition:'center',
          backgroundSize: 'cover',
          height: '250px',
          width: "100%",
          }} href="https://express-note-taker-analu.herokuapp.com/"
          onMouseEnter={e => {
            setStyle5({display: 'block'});
          }}
          onMouseLeave={e => {
            setStyle5({display: 'none'})
          }}></a>
          <div class="op" style={style5}>Note Tacker</div>
          <a style={style5} class="op" href="https://github.com/analuciarojas/11.-Express.js-Challenge-Note-Taker"><Image className="small-git" src={github} /></a>
        </Card>
      
     </CardGroup>
  </div>
  </div>
     
  );
}

export default Portfolio;
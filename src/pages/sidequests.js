import React from 'react';
import './App.css';
import me2 from './images/me2.jpeg';


const SideQuests = () => {
	return (
<div className="sidequests">
    <div className="div">
        <div className="navbar">
          <div className="text-wrapper"> <a href="/">ESTELLA ZHOU</a> </div>
          <div className="text-wrapper-2"><a href="/sidequests">SIDE QUESTS</a></div>
          <div className="text-wrapper-3"><a href="https://drive.google.com/file/d/1bbmCVaZKdKGOcrN9-paEPDPYydBdBdzJ/view?usp=sharing" target="_blank">RESUME</a></div>
          <div className="text-wrapper-4"><a href="/projects">WORK</a></div>
          <div className="text-wrapper-5"><a href="/about">ABOUT</a></div>
        </div>

        <div className="overlap-group">
          <p className="text-wrapper-6">Outside of work and studies, find me...</p>
          
          <ul>
          <p className="shredding-the-slopes">

            <li>visiting my 32nd country!</li>
            <br />

            <li>pursuing my skydive certification, one jump at a time</li>
            <br />

            <li>alpining + via ferrata (pictured to the left)</li>
            <br />

            <li>playing classical chamber music</li>
            <br />

            <li>jotting down my thoughts + musings</li> 
            <br />

            <li>learning a new language (Mandarin and French down, Italian in the works)</li>
          </p>
          </ul>
        </div>
        <img className="me2" alt="Me" src={me2}/>

      </div>

        
</div>


	);
};

export default SideQuests;

import React from "react";
import './App.css';
import me from './images/me.jpg';
import github from './images/github.jpeg';
import linkedin from './images/linkedin.jpeg';



const About = () => {
	return (
<div className="about">
      <div className="div">
        <div className="navbar">
          <div className="text-wrapper"> <a href="/">ESTELLA ZHOU</a> </div>
          <div className="text-wrapper-2"><a href="/#/sidequests">SIDE QUESTS</a></div>
          <div className="text-wrapper-3"><a href="https://drive.google.com/file/d/1bbmCVaZKdKGOcrN9-paEPDPYydBdBdzJ/view?usp=sharing" target="_blank">RESUME</a></div>
          <div className="text-wrapper-4"><a href="/#/projects">WORK</a></div>
          <div className="text-wrapper-5"><a href="/#/about">ABOUT</a></div>
        </div>

        <div className="overlap">
          <div className="text-wrapper-6">Hi, I’m Estella!</div>
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                Striving to be <br />
              </span>
              <span className="span">a lifelong </span>
              <span className="text-wrapper-7">learner</span>
              <span className="span">
                , <br />
              </span>
              <span className="span">lead with </span>
              <span className="text-wrapper-7">empathy</span>
              <span className="span">
                , <br />
              </span>
              <span className="span">and </span>
              <span className="text-wrapper-7">create</span>
              <span className="span">
                {" "}
                things that <br />
              </span>
           
              <span className="span">make our lives </span>
              <span className="text-wrapper-7">meaningful.</span>
            </p>
          </div>
          <div className="text-wrapper-8">Stanford ‘26</div>
        </div>


        <img className="me" alt="Me" src={me}/>



        <div className="overlap-group">
          <p className="p">What I’m up to now:</p>
          <p className="text-wrapper-9">Previously:</p>

          <ul>
          <p className="computer-science">
            <li><span className="text-wrapper-10">Computer Science @ Stanford</span></li>
            <span className="text-wrapper-11">
              {" "}
              <br />
            </span>
            <li><span className="text-wrapper-10">Project Director @ </span>
            <span className="text-wrapper-12"> <a href="https://stanfordconsulting.stanford.edu/" target="_blank">Stanford Consulting</a></span>
            <span className="text-wrapper-11">
              , tackling challenges for F100 tech companies and helping autonomous vehicles hit the roads </span></li><br />
            <li> <span className="text-wrapper-10">Director of Tech Leadership @ </span> 
            <span className="text-wrapper-12"><a href="http://www.stanfordwomeninbusiness.com/" target="_blank">Stanford Women in Business</a></span>
            <span className="text-wrapper-11">
              {" "}
              </span>
              </li>
              <br />
              <li>
              And a few {" "}
            <span className="text-wrapper-14"><a href="/sidequests" target="_blank">side quests...</a></span>
            </li>
          </p>
          </ul>

          <ul>
          <p className="strategy-bizdev-and">
            <li>
              <span className="text-wrapper-10">Strategy, bizdev, </span>
              <span className="text-wrapper-11">and occasionally </span>
              <span className="text-wrapper-10">UI design</span>
              <span className="text-wrapper-11">&nbsp;</span>
              <span className="text-wrapper-10">@ Mithril Security</span>
              <span className="text-wrapper-11">, a confidential computing startup building solutions for secure and private AI</span>
                <br />
                <br />
            </li>

            <li>
              <span className="text-wrapper-10">Cultural Affairs @ the Consulate General of France in SF</span>
              <span className="text-wrapper-11">, where I worked on the </span>
              <span className="text-wrapper-15"><a href="https://www.oaklandsaintdenis.org/" target="_blank">Projet Oakland-Saint Denis</a></span>
                <br />
                <br />
            </li>

            <li>
              <span className="text-wrapper-10">Editor-in-Chief @ the Berkeley High Jacket</span>
              <span className="text-wrapper-11">, a 109-year-old student newspaper with 130 staff members</span>
            </li>

          </p>
          </ul>

        </div>


        
        
        <a href="https://www.linkedin.com/in/estellazhou/" target="_blank"><img className="linkedin" alt="linkedin" src={linkedin}/></a>
        
        <img className="github" alt="github" src={github}/>
      </div>
    </div>
	);
};

export default About;

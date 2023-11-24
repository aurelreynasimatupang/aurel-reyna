import './App.scss';
import React, {useState, useEffect} from 'react';
import pfp from "./img/pfp.jpg";
import Card from "./Card";

function App() {
  const handleLinkClick = (e) => {
    const links = document.querySelectorAll(".nav-button");
    links.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
  }

  const portfolio = [
    {
      title: 'Weather App',
      text: 'React.js on top of free API',
      link: 'https://aurelreynashecodesreact.netlify.app/'
    },
    {
      title: 'Dictionary App',
      text: 'React.js on top of free API',
      link: 'https://reverent-lalande-d8625c.netlify.app/'
    },
    {
      title: 'Article CMS',
      text: '2.5 months internship with Siloam Hospital, code follows a Figma design.',
      link: 'https://www.siloamhospitals.com/informasi-siloam/artikel/'
    }
  ];
  return (
    <div className="App">
      <div class="navbar d-flex justify-content-evenly">
        <a href="#about" class="nav-button active" onClick={handleLinkClick}>About</a>
        <a href="#portfolio" class="nav-button" onClick={handleLinkClick}>Portfolio</a>
        <a href="#contact" class="nav-button" onClick={handleLinkClick}>Contact</a>
      </div>
      <div id="about" class="content">
        <div class="m-5"></div>
        <div class="row">
          <div class="col-6">
        <h1>Hi! I'm Aurelia Simatupang</h1>
        <h2>Web developer enthusiast passionate in full-stack development!</h2>
        </div>
        <div class="col-6">
          <div class="pfp">
          <img src={pfp} alt="aurelreyna"></img>
          </div>
        </div>
        </div>
      </div>
      <div id="portfolio" class="content">
        <h1>Portfolio</h1>
        <div class="d-flex justify-content-around">
        {portfolio.map((item, key) => (
          <Card info={item} id={`portfolio-card-${key}`}/>
        ))}
        </div>
      </div>
      <div id="contact" class="content">
        <h1>Contact me!</h1>
      </div>
    </div>
  );
}

export default App;

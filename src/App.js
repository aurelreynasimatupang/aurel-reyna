import './App.scss';
import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import NavBar from './NavBar';
import Main from './Main';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="main">
        <div class="content">
          <br/>
          <Main />
        </div>
        <div id="about" class="content">
          <br/>
          <br/>
          <About />
        </div>
        <div id="portfolio" class="content">
          <br/>
          <br/>
          <Portfolio/>
        </div>
        <br/>
          <br/>
        <div id="contact" class="content">
          <Contact />
        </div>
        <br />
        <br />
        <p class="footer-text">
          Built with React. Hosted by Netlify and <a href="https://github.com/aurelreynasimatupang/aurel-reyna">GitHub</a> <br/>
          <i class="icon-advanced"></i> 2023
        </p>
        
      </div>
    </div>
  );
}

export default App;

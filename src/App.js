import React from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NavBar from './component/NavBar';
import Heading from './pages/Heading';
import Contact from './pages/Contact';
import './styles/app.scss';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="main">
        <div id="heading" class="content">
          <Heading />
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
        <div id="contact" class="content">
        <br/>
        <br/>
          <Contact />
        </div>
        <br />
        <br />
        <p class="footer-text">
          Built with React. Hosted by Netlify and <a href="https://github.com/aurelreynasimatupang/aurel-reyna">GitHub</a> <br/>
          <i class="icon-advanced"></i> 2024
        </p>
        
      </div>
    </div>
  );
}

export default App;

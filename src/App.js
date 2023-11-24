import './App.scss';
import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import NavBar from './NavBar';

function App() {
  const downloadPDF = () => {
    const pdfUrl = require("./img/cv_aurelreyna.pdf");
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "aurelreynapdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className="App">
      <NavBar />
      <div class="content">
        <div class="row m-5">
          <div class="col-6">
            <h1>Hi! I'm Aurelia Simatupang</h1>
            <h2>Junior Web developer enthusiast passionate in full-stack development!</h2>
            <div class="buzzword">
              <h5>React!</h5>
              <h5>BootStrap!</h5>
              <h5>API!</h5>
              <h5>DataBase!</h5>
              <h5>...and more!</h5>
            </div>
          </div>
          <div class="col-6">
            <div class="pfp">
                <img src={require('./img/pfp.jpg')} alt="aurelreyna"></img>
            </div>
          </div>
        </div>
      </div>
      <div id="about" class="content">
        <About />
      </div>
      <div id="portfolio" class="content">
        <Portfolio />
      </div>
      <div id="contact" class="content">
        <h1>Contact me!</h1>
        <div class="contact">
          <ul>
            <li>
              <a href="mailto:aurelreyna@gmail.com">Email aurelreyna@gmail.com</a>
            </li>
            <li>
              <a href="www.linkedin.com/in/aurelia-simatupang" target="_blank"> LinkedIn</a>
            </li>
            <li>
              <a href="https://www.datacamp.com/portfolio/aurelreyna" target="_blank">DataCamp</a>
            </li>
            <li>
              <a href="https://github.com/aurelreynasimatupang">GitHub</a>
            </li>
            <li>
              <div class="btn btn-dark button" onClick={downloadPDF}>
                Download my CV!
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

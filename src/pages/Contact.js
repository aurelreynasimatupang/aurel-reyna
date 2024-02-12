import React, {useState} from 'react';
import "../styles/app.scss";

function Contact() {
  const downloadPDF = () => {
    const pdfUrl = require("../img/cv_aurelreyna.pdf");
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "aurelreynapdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };
    
  return (
      <div>
          <h2>Contact me!</h2>
          <ul>
            <li>
              <a href="mailto:aurelreyna00@gmail.com" onMouseEnter={() => handleMouseEnter("email")} onMouseLeave={handleMouseLeave}>
                <img src={hoveredLink === "email" ? require("../img/email_white.png") : require("../img/email_brown.png")} alt="Email Icon" />
                Email aurelreyna00@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aurelia-simatupang" target="_blank" rel="noreferrer" title="LinkedIn of Aurelia" onMouseEnter={() => handleMouseEnter("linkedin")} onMouseLeave={handleMouseLeave}>
              <img src={hoveredLink === "linkedin" ? require("../img/linkedin_white.png") : require("../img/linkedin_brown.png")} alt="LinkedIn Icon" />
                LinkedIn</a>
            </li>
            <li>
              <a 
                href="https://github.com/aurelreynasimatupang" 
                target="_blank" 
                rel="noreferrer" 
                title="GitHub of Aurelia"
                onMouseEnter={() => handleMouseEnter("github")} 
                onMouseLeave={handleMouseLeave}>
              <img src={hoveredLink === "github" ? require("../img/github_white.png") : require("../img/github_brown.png")} alt="GitHub Icon" />
                GitHub
              </a>
            </li>
            <li>
              <a 
                href="https://www.datacamp.com/portfolio/aurelreyna" 
                target="_blank" rel="noreferrer" 
                title="DataCamp of Aurelia"
                onMouseEnter={() => handleMouseEnter("datacamp")} 
                onMouseLeave={handleMouseLeave}
              >
              <img src={hoveredLink === "datacamp" ? require("../img/datacamp_white.png") : require("../img/datacamp_brown.png")} alt="Datacamp Icon" />
                DataCamp</a>
            </li>
            <li>
              <a 
                href="https://www.shecodes.io/graduates/23059-aurelia-simatupang"  
                target="_blank" 
                rel="noreferrer" 
                title="SheCodes Profile of Aurelia"
                onMouseEnter={() => handleMouseEnter("shecodes")} 
                onMouseLeave={handleMouseLeave}
              >
              <img src={hoveredLink === "shecodes" ? require("../img/shescodes_white.png") : require("../img/shecodes_brown.png")} alt="Shecodes Icon" />
              SheCodes</a>
            </li>
            <li>
              <div 
                class="btn button" 
                onClick={downloadPDF}
                onMouseEnter={() => handleMouseEnter("download")} 
                onMouseLeave={handleMouseLeave}>
              <img id="download_icon" src={hoveredLink === "download" ? require("../img/download_white.png") : require("../img/download_brown.png")} alt="Download Icon" />
                Download my CV!
              </div>
            </li>
          </ul>
      </div>
  );
}

export default Contact;
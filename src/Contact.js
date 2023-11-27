import React from 'react';

function Contact() {
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
        <div>
            <h2>Contact me!</h2>
            <ul>
              <li>
                <a href="mailto:aurelreyna00@gmail.com">Email aurelreyna00@gmail.com</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aurelia-simatupang" target="_blank" rel="noreferrer" title="LinkedIn of Aurelia"> LinkedIn</a>
              </li>
              <li>
                <a href="https://www.datacamp.com/portfolio/aurelreyna" target="_blank" rel="noreferrer" title="DataCamp of Aurelia">DataCamp</a>
              </li>
              <li>
                <a href="https://github.com/aurelreynasimatupang" target="_blank" rel="noreferrer" title="GitHub of Aurelia">GitHub</a>
              </li>
              <li>
                <a href="https://www.shecodes.io/graduates/23059-aurelia-simatupang"  target="_blank" rel="noreferrer" title="GitHub of Aurelia">SheCodes</a>
              </li>
              <li>
                <div class="btn btn-dark button" onClick={downloadPDF}>
                  Download my CV!
                </div>
              </li>
            </ul>
        </div>
    );
}

export default Contact;
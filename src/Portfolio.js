import React from 'react';
import Card from "./Card";


function Portfolio(props) {
    const portfolio = [
      {
        title: 'Article CMS',
        text: '2.5 months internship with Siloam Hospital, code follows a Figma design. Coded with Vue.js, SaSS, and Adonis.js as backend, including commercial article website and the article CMS interface for authors.',
        link: 'https://www.siloamhospitals.com/informasi-siloam/artikel/',
        img_url:'./img/article.png',
        img_alt:'Article CMS',
        img_title:'Internship work by Aurelia Simatupang'
      },
      {
        title: `Event's landing page`,
        text: 'Freelance web dev project to create a responsive landing page for the organisation Belt & Road Initiative. Coded with React.js + SaSS while following a provided Figma design.',
        link:'https://bri-id-events.netlify.app/',
        img_url:'./img/bri-web.png',
        img_alt: 'BRI Events page',
        img_title: 'Freelance work by Aurelia Simatupang'
      },
      {
        title: `Animation student's portfolio`,
        text: 'A responsive React.js-based portfolio website designed for an animation student, demonstrating css animations, and use of Javascript for conditional rendering.',
        link: 'https://louisashannontara.netlify.app/',
        img_url:'./img/shannon.png',
        img_alt:'Article CMS',
        img_title:'Oortfolio website by Aurelia Simatupang'
      },
      {
        title: 'Weather App',
        text: 'Project as part of the SheCodes React workshop, built with React.js and axios on top of free API',
        link: 'https://aurelreynashecodesreact.netlify.app/',
        img_url:'./img/weather.png',
        img_alt:'Weather App',
        img_title:'Weather App created by Aurelia Simatupang'
      },
      {
        title: 'Dictionary App',
        text: 'Project as part of the SheCodes React workshop, built with React.js and axios on top of free API',
        link: 'https://reverent-lalande-d8625c.netlify.app/',
        img_url:'./img/dictionary.png',
        img_alt:'Dictionary App',
        img_title:'Dictionary App created by Aurelia Simatupang'
      }
    ];
    return (
        <div>
            <h2 class="text-center">Portfolio</h2>
            <div class="container mt-1 ps-4 pr-4">
                <div class="row">
                    {portfolio.map((item, key) => (
                        <div class="col-lg-4 mt-4">
                            <Card info={item} id={`portfolio-card-${key}`} class="col-4"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
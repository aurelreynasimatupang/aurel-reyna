import React from 'react';
import Card from "../component/Card";
import "../styles/portfolio.scss";
import "../styles/app.scss";


function Portfolio(props) {
    const portfolio = [
      {
        title: 'Article CMS',
        text: '2.5 months internship with Siloam Hospital, code follows a Figma design. Including public article website and the article CMS interface for authors.',
        link: 'https://www.siloamhospitals.com/informasi-siloam/artikel/',
        img_url:'article.png',
        img_alt:'Article CMS',
        img_title:'Internship work by Aurelia Simatupang',
        tags:['Vue.js','Typescript', 'Adonis.js', 'postgreSQL','Sass']
      },
      {
        title: `Event's landing page`,
        text: 'Freelance web dev project to create a responsive landing page for the organisation Belt & Road Initiative. Coded with React.js + SaSS while following a provided Figma design.',
        link:'https://bri-id.events',
        img_url:'bri-web.png',
        img_alt: 'BRI Events page',
        img_title: 'Freelance work by Aurelia Simatupang',
        tags:['React.js', 'React Router', 'Sass'],
      },
      {
        title: `Animation student's portfolio`,
        text: 'A responsive React.js-based portfolio website designed for an animation student, demonstrating css animations, and use of Javascript for conditional rendering.',
        link: 'https://louisashannontara.netlify.app/',
        img_url:'shannon.png',
        img_alt:'Article CMS',
        img_title:'Portfolio website by Aurelia Simatupang',
        tags: ['React.js', 'React Router', 'Sass']
      },
      {
        title: 'Weather App',
        text: 'Project as part of the SheCodes React workshop, built with React.js and axios on top of free API.',
        link: 'https://weather-aurelreyna.netlify.app/',
        img_url:'weather.png',
        img_alt:'Weather App',
        img_title:'Weather App created by Aurelia Simatupang',
        tags:['React.js', 'axios']
      },
      {
        title: 'Dictionary App',
        text: 'Project as part of the SheCodes React workshop, built with React.js and axios on top of free API.',
        link: 'https://dictionary-aurelreyna.netlify.app/',
        img_url:'dictionary.png',
        img_alt:'Dictionary App',
        img_title:'Dictionary App created by Aurelia Simatupang',
        tags:['React.js', 'axios']
      },
      {
        title: 'Worldclock App',
        text: 'Project as part of the SheCodes React Plus Addon workshop, built with vanilla Javascript and moment.js.',
        link: 'https://worldclock-aurelreyna.netlify.app',
        img_url:'worldclock.png',
        img_alt:'World Clock App',
        img_title:'World Clock App created by Aurelia Simatupang',
        tags: ['Vanilla js', 'HTML5','CSS','moment.js']
      }
    ];
    return (
        <div>
          <h2 class="text-center">Portfolio</h2>
          <div class="row">
            {portfolio.map((item, key) => (
                <div class="col-lg-4">
                    <Card info={item} id={`portfolio-card-${key}`} class="col-4"/>
                </div>
            ))}
          </div>
        </div>
    );
}

export default Portfolio;
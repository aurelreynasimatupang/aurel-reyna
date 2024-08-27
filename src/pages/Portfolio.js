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
        type:'prof',
        tags:['Vue.js','Typescript', 'Adonis.js', 'postgreSQL','Sass', 'Figma']
      },
      {
        title: `Event's landing page`,
        text: 'Freelance web dev project to create a responsive landing page for the organisation Belt & Road Initiative. Coded with React.js + SaSS while following a provided Figma design.',
        link:'https://bri-id.events',
        img_url:'bri-web.png',
        img_alt: 'BRI Events page',
        img_title: 'Freelance work by Aurelia Simatupang',
        tags:['React.js', 'React Router', 'Sass', 'web hosting', 'Figma'],
        type:'prof'
      },
      {
        title: `Animation student's portfolio`,
        text: 'A responsive React.js-based portfolio website designed for an animation student, demonstrating css animations, and use of Javascript for conditional rendering.',
        link: 'https://louisashannontara.netlify.app/',
        img_url:'shannon.png',
        img_alt:'Article CMS',
        img_title:'Portfolio website by Aurelia Simatupang',
        tags: ['React.js', 'React Router', 'Sass'],
        type:'prof'
      },
      {
        title:'AI Poem Generator App',
        text:'Project as part of the SheCodes Plus Addon AI workshop, built with Vanill JS and axios on top of a free AI API.',
        link:'https://poemgenerator-aurelreyna.netlify.app/',
        img_url:'poem.png',
        img_alt:'Poem Generator App',
        img_title:'AI Poem Generator App creted by Aurelia Simatupang',
        tags: ['Javascipt', 'axios', 'AI'],
        type:'pers',
      },
      {
        title: 'Dictionary App',
        text: 'Project as part of the SheCodes React workshop, built with React.js and axios on top of free API.',
        link: 'https://dictionary-aurelreyna.netlify.app/',
        img_url:'dictionary.png',
        img_alt:'Dictionary App',
        img_title:'Dictionary App created by Aurelia Simatupang',
        tags:['React.js', 'axios'],
        type:'pers'
      },
      {
        title: 'Worldclock App',
        text: 'Project as part of the SheCodes React Plus Addon workshop, built with vanilla Javascript and moment.js.',
        link: 'https://worldclock-aurelreyna.netlify.app',
        img_url:'worldclock.png',
        img_alt:'World Clock App',
        img_title:'World Clock App created by Aurelia Simatupang',
        tags: ['Vanilla js', 'HTML5','CSS','moment.js'],
        type:'pers'
      }
    ];

  return (
      <div>
        <h2 class="text-center">Portfolio</h2>
        <p class="text-center">See all my past works, ranging from professional experience to personal passion projects. You can find the source code for some of them in my <a id="github-link" href="https://github.com/aurelreynasimatupang">GitHub!</a></p>
        
        <div class="row g-4">
          {portfolio.map((item, key) => (
              <div class="col-lg-4 col-md-6 col-sm-12">
                  <Card info={item} id={`portfolio-card-${key}`} class="col-4" />
              </div>
          ))}
        </div>
      </div>
  );
}

export default Portfolio;
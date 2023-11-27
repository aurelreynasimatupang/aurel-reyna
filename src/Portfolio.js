import React from 'react';
import Card from "./Card";


function Portfolio(props) {
    const portfolio = [
        {
          title: 'Weather App',
          text: 'Project as part of the SheCodes React workshop, built with React.js on top of free API',
          link: 'https://aurelreynashecodesreact.netlify.app/',
          img_url:'./img/weather.png',
          img_alt:'Weather App',
          img_title:'Weather App created by Aurelia Simatupang'
        },
        {
          title: 'Dictionary App',
          text: 'Project as part of the SheCodes React workshop, built with React.js on top of free API',
          link: 'https://reverent-lalande-d8625c.netlify.app/',
          img_url:'./img/dictionary.png',
          img_alt:'Dictionary App',
          img_title:'Dictionary App created by Aurelia Simatupang'
        },
        {
          title: 'Article CMS',
          text: '2.5 months internship with Siloam Hospital, code follows a Figma design. Vue.js front-end and Node.js backend, including commercial article website and the article CMS interface for authors.',
          link: 'https://www.siloamhospitals.com/informasi-siloam/artikel/',
          img_url:'./img/article.png',
          img_alt:'Article CMS',
          img_title:'Internship work by Aurelia Simatupang'
        }
      ];
    return (
        <div>
            <h2 class="text-center">Portfolio</h2>
            <div class="container mt-5 ps-4 pr-4">
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
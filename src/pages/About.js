import React from 'react';
import "../styles/app.scss";

function About() {
    return (
        <div>
            <h2 class="text-center">About</h2>
            <div class="about-intro">
                <p>
                Born in Indonesia and have lived in various countries, I find myself recently graduated from the University of Groningen, holding a Bachelor's degree in Computing Science with Honors and Cum Laude distinctions. I am presently located in the Netherlands and actively seeking opportunities to further enhance my knowledge and skills in the field of software development.</p>
                <p>I am adept at navigating both online and hybrid work environments.</p>
                <p>Speaks 🇨🇳 🇺🇸 🇮🇩 and learning 🇳🇱</p>
            </div>
            <div class="about-timeline">
                <div class="vl">
                <div class="blank"></div>
                <h4 id="t-2019" class="tl-text"><b>2018</b><br/> Software Development Certificate with KodingNext</h4>
                <div class="vhr"></div>
                <div class="blank"></div>
                <div class="vhl"></div>
                <h4 id="t-2020" class="tl-text"><b>2020</b><br/> Started Bcs CompSci with University of Groningen</h4>
                <div class="blank"></div>
                <div class="vhr"></div>
                <div class="blank"></div>
                <div class="vhl"></div>
                <h4 id="t-2021" class="tl-text"><b>2021</b><br/> Oct: Obtained front-end development certificates with SheCodes</h4>
                <h4 id="t-2022-1" class="tl-text"><b>2022</b><br/>Feb: Study Data Science with Data Camp</h4>
                <h4 id="t-2022-2" class="tl-text">Apr: Belsimpel internship project</h4>
                <h4 id="t-2022-3" class="tl-text">Sep: Exchange semester in Hong Kong University of Science and Technology</h4>
                <div class="blank"></div>
                <div class="vhr"></div>
                <h4 id="t-2023-1" class="tl-text"><b>2023</b><br/> Jan: Web Internship with Siloam Hospitals Indonesia</h4>
                <h4 id="t-2023-2" class="tl-text">Oct: Obtained Bachelors Degree in CompSci</h4>
                <div class="blank"></div>
                <div class="blank"></div>
                <div class="blank"></div>
                <div class="vhl"></div>
                <h4 id="t-2024" class="tl-text"><b>2024</b><br/> Concluded Freelance Web Project for P.T. Cahy Amert Internusa</h4>
                </div>
            </div>
        </div>
    );
}

export default About;
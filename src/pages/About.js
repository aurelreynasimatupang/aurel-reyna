import React from 'react';
import "../styles/app.scss";

function About() {
    return (
        <div>
            <h2 class="text-center">About</h2>
            <div class="about-intro">
                <p>
                    Born in Indonesia and have lived in various countries, I find myself recently graduated from the University of Groningen, holding a Bachelor's degree in Computing Science with Honors and Cum Laude distinctions. I am presently located in the Netherlands and actively seeking opportunities to further enhance my knowledge and skills in the field of software development.
                </p>
                <p>I am adept at navigating both online and hybrid work environments.</p>
                <p>Speaks 🇨🇳 🇺🇸 🇮🇩 and learning 🇳🇱</p>
            </div>
            <div class="about-timeline">
                <div class="vl">
                <p id="t-2024" class="tl-text">
                    <h4>2024</h4>
                    Concluded Freelance Web Project for P.T. Cahy Amert Internusa
                </p>
                <p id="t-2023" class="tl-text">
                    <h4>2023</h4>
                    <b>Jan:</b> Web Internship with Siloam Hospitals Indonesia<br/>
                    <b>Oct:</b> Obtained Bachelors Degree in CompSci
                </p>
                <p id="t-2022" class="tl-text">
                    <h4>2022</h4>
                    <b>Feb:</b> Study Data Science with Data Camp<br/>
                    <b>Apr:</b> Belsimpel internship project<br/>
                    <b>Sep:</b> Exchange semester in Hong Kong University of Science and Technology
                </p>
                <p id="t-2021" class="tl-text">
                    <h4>2021</h4>
                    <b>Oct:</b> Obtained front-end development certificates with SheCodes
                </p>
                <p id="t-2020" class="tl-text">
                    <h4>2020</h4>
                    Started Bcs CompSci with University of Groningen
                </p>
                <p id="t-2018" class="tl-text">
                    <h4>2018</h4>
                    Software Development Certificate with KodingNext
                </p>
                <div class="vhl"></div>
                <div class="blank"></div>
                <div class="vhr"></div>
                <div class="blank"></div>
                <div class="vhl"></div>
                <div class="blank"></div>
                <div class="vhr"></div>
                <div class="blank"></div>
                <div class="blank"></div>
                <div class="vhl"></div>
                <div class="blank"></div>
                <div class="vhr"></div>
                </div>
            </div>
        </div>
    );
}

export default About;
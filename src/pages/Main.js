import React from 'react';
import "../styles/app.scss";
import "../styles/main.scss";

function Main() {
    return (
        <div class="heading row">
            <div class="col-lg-6">
            <br/>
          <br/>
                <h2>Hi! I'm Aurelia Simatupang</h2>
                <h1>Junior web developer <span class="thinner">passionate in full-stack development!</span></h1>
                <div class="buzzword">
                <h5>React.js!</h5>
                <h5>BootStrap!</h5>
                <h5>API!</h5>
                <h5>...and more!</h5>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="pfp">
                    <img src={require('../img/pfp.jpg')} alt="aurelreyna" title="Aurelia Simatupang"></img>
                </div>
            </div>
        </div>
    );
}

export default Main;
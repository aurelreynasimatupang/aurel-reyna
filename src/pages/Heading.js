import React from 'react';
import "../styles/app.scss";
import "../styles/main.scss";

function Main() {
    return (
            <div class="row">
                <div class="col-lg-6">
                    <h1>Hi! I'm Aurelia Simatupang<br/>
                    <b>Junior web developer</b><br/> passionate in full stack development!</h1>
                    <div>
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
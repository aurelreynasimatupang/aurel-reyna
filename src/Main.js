import React from 'react';

function Main() {
    return (
            <div class="row m-5">
                <div class="col-lg-6">
                    <h1>Hi! I'm Aurelia Simatupang</h1>
                    <h2>Junior web developer enthusiast passionate in full-stack development!</h2>
                    <div class="buzzword">
                    <h5>React.js!</h5>
                    <h5>BootStrap!</h5>
                    <h5>API!</h5>
                    <h5>...and more!</h5>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="pfp">
                        <img src={require('./img/pfp.jpg')} alt="aurelreyna" title="Aurelia Simatupang"></img>
                    </div>
                </div>
            </div>
    );
}

export default Main;
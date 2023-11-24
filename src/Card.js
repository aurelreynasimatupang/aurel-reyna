import React from 'react';

function Card(props) {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.info.title}</h5>
                <p class="card-text">{props.info.text}</p>
                <a href={props.info.link} className="btn btn-primary">Check it out!</a>
            </div>
        </div>
    );
}

export default Card;

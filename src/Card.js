import React from 'react';

function Card(props) {
    console.log(props.info.img_url)
    return (
        <a href={props.info.link} target="_blank" class="card" rel="noreferrer">
            <div class="card-body">
                <div class="portfolio-img">
                    <img src={require(`${props.info.img_url}`)} alt={props.info.img_alt} title={props.info.img_title}/>
                </div>
                <h5 class="card-title">{props.info.title}</h5>
                <p class="card-text">{props.info.text}</p>
                <div class="btn btn-dark">Check it out!</div>
            </div>
        </a>
    );
}

export default Card;

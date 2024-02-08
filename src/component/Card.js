import React from 'react';

function Card(props) {
    return (
        <div class="card">
                <div class="portfolio-img">
                    <img src={require(`../img/${props.info.img_url}`)} alt={props.info.img_alt} title={props.info.img_title}/>
                </div>
                <div class="card-textbox">
                    <h5 class="card-title">{props.info.title}</h5>
                    <p class="card-text">{props.info.text}</p>
                    {props.info.tags.map(a => (
                        <div key={`${props.info.title}-${a}`} class="tag">{a}</div>    
                    ))}
                    <br/>
                    <br/>
                    <br/>
                    <a href={props.info.link} target="_blank" rel="noreferrer">
                        Check it out!
                    </a>
                </div>
        </div>
    );
}

export default Card;

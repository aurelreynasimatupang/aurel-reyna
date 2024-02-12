import React from 'react';

function Card(props) {
    return (
        <a href={props.info.link} target="_blank" rel="noreferrer"> 
            <div class="card">
                <div class="portfolio-img">
                    <img src={require(`../img/${props.info.img_url}`)} alt={props.info.img_alt} title={props.info.img_title}/>
                </div>
                <div class="card-textbox">
                    { props.info.type==='prof' ?  <div class="txt-prof">PROFESSIONAL</div>: <div class="txt-pers">PERSONAL</div> }
                    <h6 class="card-title">{props.info.title}</h6>
                    <p class="card-text">{props.info.text}</p>
                    <div class="tags-gallery">
                        {props.info.tags.map(a => (
                            <div key={`${props.info.title}-${a}`} class="tag">{a}</div>    
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Card;

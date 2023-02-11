import React from 'react';
import "./hero.css";

function Hero(props) {
<div className="hero-card">
    <p className='hero-card__id visually-hidden'>${props.id}</p>
            <h2 className="hero-card__title">${props.name}</h2>
            <p className="hero-card__universe"><span>Universe:</span> ${props.universe}</p>
            <p className="hero-card__alter"><span>Alter Ago:</span> ${props.alter}</p>
            <p className="hero-card__superpowers"><span>Superpowers:</span> ${props.superpowers}</p>
            <p className="hero-card__occupation"><span>Occupation:</span> ${props.occupation}</p>
            <p className="hero-card__comments"><span>Comments:</span> ${props.comments}</p>
            </div>
}

export default Hero;
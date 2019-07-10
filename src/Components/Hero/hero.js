import React from 'react';
import './hero.css'
import Card from '../Card/card'


const Hero = () => {
    return (
        <div id='herocontainer'>
            <div id='tagline'>
                <h1 id='slogan'>Your Morning Trump</h1>
            </div>
            <Card id='herocard' />
        </div>
    )
}

export default Hero;
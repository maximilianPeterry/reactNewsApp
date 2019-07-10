import React from 'react';
import './hero.css'


const Hero = () => {
    return (
        <div id='herocontainer'>
            <div id='tagline'>
                <h1 id='slogan'>Your Morning Trump</h1>
            </div>
            <div id='dataimg'>
                <img id='heroimg' src='https://www.veteranstoday.com/wp-content/uploads/2018/08/ScreenHunter-1147-1-696x547.jpg'
                    alt='' />
            </div>
            <div id='snatch'>
                <h2>LOOK WHAT TRUMP DID TODAY</h2>
            </div>

        </div>
    )
}

export default Hero;
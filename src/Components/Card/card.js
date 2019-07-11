import React from 'react';
import './card.css';

const Card = () => {
    return (
        <div id='cardcontainer'>
            <div id='cardimage'>
                <img id='heroimg' src='https://www.veteranstoday.com/wp-content/uploads/2018/08/ScreenHunter-1147-1-696x547.jpg'
                    alt='' />
            </div>
            <div id='cardtext'>
                <h2>LOOK WHAT TRUMP DID TODAY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel efficitur odio.</p>
            </div>
        </div>
    )
}

export default Card;
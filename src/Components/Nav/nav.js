import React from 'react';
import './nav.css'
import Trumpdlogo from './TrumpdLogo.png'

class Nav extends React.Component {
    render() {
        return (
            <div id='container'>
                <nav id='nav'>
                    <div id='tagline'>
                        <h1 id='slogan'>Daily<img id="trumpClipart" src="https://www.trzcacak.rs/myfile/detail/5-50786_angry-trump-clipart-donald-trump-face-clipart.png"></img>Trump</h1>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;
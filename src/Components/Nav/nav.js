import React from 'react';
import './nav.css'
import Trumpdlogo from './TrumpdLogo.png'

class Nav extends React.Component {
    render() {
        return (
            <div id='container'>
                <nav id='nav'>
                    {/* <img id='Logo' src={Trumpdlogo} alt=''></img> */}


                </nav>
                {/* <div classname='newdiv'>
                    <button>
                        <div id='bar1' className='bars'></div>
                        <div id='bar2' className='bars'></div>
                        <div id='bar3' className='bars'></div>
                    </button>
                </div> */}
            </div>
        )
    }
}

export default Nav;
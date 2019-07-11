import React from 'react';
import './hero.css'
import Card from '../Card/card'

// class TopCard extends React.Component{
//     state = {
//         articles: []
//     }


// componentDidMount() {
//     fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5966ca7879d14c3987a7104d14a0ed0f")
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         this.setState({ data: data })
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

const Hero = ({ data }) => {
    console.log(data)
    
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
            { data ? 
                <div>
                    {data.map((item) => (
                        <p>{item.title}</p>
                    ))}
                </div> 
                : null}

        </div>
    )
}




export default Hero;
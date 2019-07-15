import React from 'react';
import './hero.css'
import Card from '../Card/card'


const Hero = ({ data }) => {

    const articles = data.slice(0, 3)
    console.log(articles)


    return (

        <div id='herocontainer'>

            {data ?
                <div>
                    {articles.map((item) => (

                        <div id="articles">

                            <img className="topNews" src={item.urlToImage} />
                            <h1 id="headerTitle">{item.title}</h1>
                            <p id="headerDescription">{item.description}</p>
                            <a href={item.url}>Read More</a>
                        </div>
                    ))}
                </div>
                : null}

        </div>
    )

}




export default Hero;
import React from 'react';
import './hero.css'


const Hero = ({ data }) => {

    const articles = data.slice(0, 3)
    console.log(articles)


    return (

        <div id='herocontainer'>

            {data ?
                <div id="hello">
                    {articles.map((item) => (

                        <div id="articles">

                            <img className="topNews" src={item.urlToImage} alt="" />
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
import React from 'react'
import './small-cards.css'

//passed the data down form app.js
const SmallPost = ({ data }) => {
    const articles = data.slice(3, 20)
    console.log(articles)


        return (
         <div id="smallPosts">
         {/* going through the data, mapping through each item  */}
            { data ? 
                <div className="smallArticles">
                    
                    {articles.map((item) => (
                        <div className='cardCont'>
                            
                            <a href={item.url}>
                                <img className="images" src={item.urlToImage}/>
                                </a>
                            
                                <div id="cardTitle">
                                <a href={item.url}>
                                    <h1 id="title">{item.title}</h1>
                                    </a>
                                </div>
                                {/* <div>

                                    <p>{item.url}</p>
                                    </div> */}
                        </div>
                    ))}
                </div>
                : null}
        </div>

    )
}


export default SmallPost;

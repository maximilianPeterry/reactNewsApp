import React from 'react'
// import ReactDOM from 'react-dom'
import './small-cards.css'

//passed the data down form app.js
 const SmallPost = ({ data }) =>{
    const articles = data.slice(3, 20)
    console.log(articles)

        return (
         <div id="smallPosts">
         {/* going through the data, mapping through each item  */}
            { data ? 
                <div>
                    
                    {articles.map((item) => (
                        <div className='cardCont'>
                            <div >
                            <a href={item.url}>
                                <img className="images" src={item.urlToImage}/>
                                </a>
                            </div>
                                <div>
                                <a href={item.url}>
                                    <p id="title">{item.title}</p>
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

import React from 'react';
import './App.css';
import Nav from './Components/Nav/nav'
import Hero from './Components/Hero/hero'
import SmallPost from './Components/small-cards/small-cards'
import Footer from './Components/Nav/footer'
// const newsApi = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5966ca7879d14c3987a7104d14a0ed0f'


class App extends React.Component {

  state = {
    news: []

  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?language=en&q=trump&apiKey=5966ca7879d14c3987a7104d14a0ed0f")
      .then(res => res.json())
      .then(data => {
        console.log(data.articles)
        this.setState({ news: data.articles })

      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <div id="header">

          <Nav />

          <Hero data={this.state.news} />
          {/* addded small posts card (has its own css file) */}
          <SmallPost id="smallPosts" data={this.state.news} />
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Nav from './Components/Nav/nav'
import Hero from './Components/Hero/hero'
const newsApi = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5966ca7879d14c3987a7104d14a0ed0f'


class App extends React.Component {

  state = {
    data: []
  }

  conponentDidMount() {
    fetch(newsApi)
      .then(data => {
        console.log(data)
        this.setState({ data: data })
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
          <Hero />
        </div>

      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import axios from 'axios';
import DisplaySimpson from './DisplaySimpson';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Simpsons: {}
    };
  }
  getSimpsons = () => {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(response => {
        this.setState({
          Simpsons: response[0]
        })
      })
  }
  render() {
    return ( 
      <div className="App">
        <DisplaySimpson Simpsons={this.state.Simpsons}/>
        <button type="button" onClick={this.getSimpsons}>Get Simpsons</button>

      </div>
    );
  }
}

export default App;

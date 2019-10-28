import React from 'react';
import './App.css';
import axios from 'axios';
import DisplaySimpson from './DisplaySimpson';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Simpsons: null
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
  componentDidMount = () => {
    this.getSimpsons()
  }
  render() {
    return ( 
      <div className="App">
       {this.state.Simpsons ? <DisplaySimpson Simpsons={this.state.Simpsons}/>:<p>Loading</p>}
        <button type="button" onClick={this.getSimpsons}>Get Simpsons</button>

      </div>
    );
  }
}

export default App;

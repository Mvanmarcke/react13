import React from 'react';

class DisplaySimpson extends React.Component {
    constructor(props) {
      super(props);
      console.log(props.Simpsons)
    }

render() {
    return(
        <div>
            <p>{this.props.Simpsons.character}</p>
            <img src={this.props.Simpsons.image} alt={this.props.Simpsons.character}/>
            <p>{this.props.Simpsons.quote}</p>
        </div>
    )
    }
}

export default DisplaySimpson;
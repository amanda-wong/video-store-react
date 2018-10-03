import React, { Component } from 'react';
import Item from './../item';
import './style.css';

class Display extends Component {
    render() {
        console.log("Displayed Data: ", this.props.results)
        
        const results = this.props.results.map((el,i) => <Item key={i} title={el.title} genre={el.genre} actor={el.actor} year={el.year}/>);   

        return (
           <div className="display-container">
                {results}
           </div>     
        )
    }
}

export default Display;
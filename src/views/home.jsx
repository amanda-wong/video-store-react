import React, { Component } from 'react';
import Item from '../components/item';

class Home extends Component {
    constructor(){
        super();
        this.handleLinkClick = this.handleLinkClick.bind(this); 
    }
    
    handleLinkClick = (movieTitle) => {
        this.props.link(movieTitle)
    }

    render() {
        return (
            <div>
                {this.props.results.map((el,i) => 
                    <Item 
                        key={i} 
                        title={el.title} 
                        genre={el.genre} 
                        actor={el.actor} 
                        year={el.year} 
                        link={this.handleLinkClick} 
                    />)}
            </div>
        )
    }
}

export default Home;
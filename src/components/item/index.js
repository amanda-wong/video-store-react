import React, { Component } from 'react';
import './style.css';

class Item extends Component {
    render() {
        return (
            <div className="search-item">
                {this.props.title ? <div className="title">{this.props.title}</div> : null}
                {this.props.year ? <div className="actor">{this.props.year}</div> : null}
                {this.props.genre ? <div className="genre">{this.props.genre}</div> : null}
                {this.props.actor ? <div className="actor">{this.props.actor}</div> : null}
            </div>
        )
    }
}

export default Item;
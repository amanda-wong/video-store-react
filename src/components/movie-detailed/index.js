import React, { Component } from 'react';
import './style.css';

class MovieDetailed extends Component {
    render() {
        return (
            <div className="search-item">
                {this.props.title ? <div className="title">{this.props.title}</div> : null}
                {this.props.year ? <div className="actor">{this.props.year}</div> : null}
                {this.props.genre ? <div className="genre">{this.props.genre}</div> : null}
                {this.props.actor ? <div className="actor">{this.props.actor}</div> : null}
                {this.props.rating ? <div className="rating">{this.props.rating}</div> : null}
                {this.props.customerRating ? <div className="customer-rating">{this.props.customerRating}</div> : null}
                {this.props.duration ? <div className="duration">{this.props.duration}</div> : null}
                {this.props.image ? <img className="image" src={this.props.image} alt={this.props.title} /> : null}
                {this.props.description ? <div className="image">{this.props.description}</div> : null}
            </div>
        )
    }
}

export default MovieDetailed;
import React, { Component } from 'react';
import './style.css';

class MovieDetailed extends Component {
    render() {
        return (
            <div className="movie-content">
                <div className="movie-details">
                    <div className="title-year-wrap">
                        {this.props.title ? <div className="title">{this.props.title}</div> : null}
                        {this.props.year ? <div className="year">({this.props.year})</div> : null}
                    </div>
                    {this.props.genre ? <div className="genre">{this.props.genre}</div> : null}
                    {this.props.rating ? <div className="rating">Rated: {this.props.rating}</div> : null}
                    {this.props.customerRating ? <div className="customer-rating">Customer Rated: {this.props.customerRating}/10</div> : null}
                    {this.props.duration ? <div className="duration">Duration: {this.props.duration} mins</div> : null}
                    {this.props.description ? <div className="description">Description: {this.props.description}</div> : null}
                </div>
                {this.props.image ? <img className="image" src={this.props.image} alt={this.props.title} /> : null}
            </div>
        )
    }
}

export default MovieDetailed;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class MovieBrief extends Component {

    handleLinkClick = () => {
        this.props.link(this.props.title);
    }

    render() {
        let movieUrl =  '/movie/' + this.props.title.split(' ').join('-');

        return (
            <div className="search-item">
                {this.props.title ? <Link className="title" to={movieUrl}>{this.props.title}</Link> : null}
                {this.props.year ? <div className="actor">{this.props.year}</div> : null}
                {this.props.genre ? <div className="genre">{this.props.genre}</div> : null}
            </div>
        )
    }
}

export default MovieBrief;
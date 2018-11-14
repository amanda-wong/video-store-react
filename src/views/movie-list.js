import React, { Component } from 'react';
import MovieBrief from '../components/movie-brief';
import Events from '../events';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null
        };

        Events.subscribe('SEARCH', this.searchHandler);  // Subscribing to SEARCH and activating a function when something is emitted to it
    }

    componentWillUnmount() {
        Events.unsubscribe('SEARCH', this.searchHandler);  // Unsubscribe when unmounting/or switching the page
    }

    searchHandler = ({ results }) => {
        this.setState({ results });
    }
    
    render() {
        var results = this.state.results;
        if (!results) {
            return null;
        }

        return (
            <div>
                {results.map((el,i) => 
                    <MovieBrief
                        key={i} 
                        title={el.title} 
                        genre={el.genre} 
                        actor={el.actor} 
                        year={el.year} 
                    />)}
            </div>
         )
    }
}

export default MovieList;
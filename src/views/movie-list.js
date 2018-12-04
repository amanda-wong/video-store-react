import React, { Component } from 'react';
import MovieBrief from '../components/movie-brief';
import { connect } from 'react-redux';

class MovieList extends Component {
    
    render() {
        var results = this.props.search.results;
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

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

export default connect(mapStateToProps, null, null)(MovieList)
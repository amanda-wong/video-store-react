import React, { Component } from 'react';
import MovieDetailed from '../components/movie-detailed';

class MovieDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            movie: null
        };
    }

    componentDidMount() {
        let movieSlug = this.props.match.params.slug;
        var url = `http://localhost:8000/movie/${movieSlug}`;

        fetch(url)
            .then(res => res.json())
            .then((data) => this.setState({ movie: data[0] }))
            .catch(error => console.error('Fetch Error: ', error))
    }
    
    render() {
        var movie = this.state.movie;
        if (!movie) {
            return null;
        }

        return (
            <div>
                <MovieDetailed
                    title={movie.title}
                    genre={movie.genre}
                    actor={movie.actor}
                    year={movie.year}
                    image={movie.image_url}
                    customerRating={movie.customer_rating}
                    description={movie.description}
                    duration={movie.duration}
                    rating={movie.rating} />
            </div>);
    }
}



export default MovieDetail;
import React, { Component } from 'react';
import Item from '../components/item';

class Movie extends Component {
    render() {

        console.log("movie", this.props.results);
        
        return (
            <div>
                {this.props.results.map((el, i) =>
                    <Item
                        key={i}
                        title={el.title}
                        genre={el.genre}
                        actor={el.actor}
                        year={el.year}
                        image={el.image_url}
                        customerRating={el.customer_rating}
                        description={el.description}
                        duration={el.duration}
                        rating={el.rating}

                    />)}
            </div>)
    }
}

export default Movie;
import React, { Component } from "react";
import InputRange from 'react-input-range';
import "./style.css";
import "react-input-range/lib/css/index.css"

class AddMovieModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: [],
            value: 0,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/genres')
            .then(res => res.json())
            .then((data) => this.setState({ genres: data }))
            .catch(error => console.error('Fetch Error: ', error));
    }

    render() {
        let genres = this.state.genres.map((item, i) => <option key={i} value={item.genre}>{item.genre}</option>)
        return (
            <div className="modal-outer-container" onClick={this.props.closeModal}>
                <div className="add-movie-modal">
                    <h3>Add A Movie</h3>
                    <input type="text" placeholder="Movie Title" maxlength="50" required />
                    <input type="number" placeholder="Duration in minutes" />
                    <select className="genres">
                        <option value="">Genre</option>
                        {genres}
                    </select>

                    <select>
                        <option>Year</option>
                        {this.getYears(1950, 2019)}
                    </select>
                    <InputRange
                        step={0.5}
                        maxValue={10}
                        minValue={0}
                        value={this.state.value}
                        onChange={value => this.setState({ value })} 
                    />
                    <input type="text" placeholder="Actor" />
                    <input type="url" placeholder="Image Url" />
                    <textarea type="text" placeholder="Description" />
                    <select>
                        <option>Rating</option>
                        <option>G</option>
                        <option>PG</option>
                        <option>PG-13</option>
                        <option>R</option>
                        <option>NC-17</option>
                    </select>
                    <input type="submit"/>
                </div>
            </div>
        );
    }

    getYears(min, max) {
        const array = [];
        for(let i = min; i <= max; i++) {
            array.push(i);
        }

        return array.map((item,i) => <option key={i}>{item}</option>);
    }
}




export default AddMovieModal;
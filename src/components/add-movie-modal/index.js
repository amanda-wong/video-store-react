import React, { Component } from "react";
import InputRange from 'react-input-range';
import AddIcon from '../add-icon';
import './style.css';
import 'react-input-range/lib/css/index.css'

class AddMovieModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genreList: [],
            customerRating: 0,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/genres')
            .then(res => res.json())
            .then((data) => this.setState({ genreList: data }))
            .catch(error => console.error('Fetch Error: ', error));
    }

    render() {

        console.log("STATE ========>", this.state);

        return (
            <div className="modal-outer-container" onClick={this.props.closeModal}>
                <div className="add-movie-modal">
                    <h3>Add A Movie</h3>
                    <div className="details-containers">
                        <div className="text-wrap">
                            <label>Movie Title</label>
                            <input
                                type="text"
                                maxLength="50"
                                required
                                value={this.state.title}
                                onChange={e => this.setState({ title: e.target.value })} />
                        </div>
                        <div className="text-wrap duration">
                            <label>Duration in Minutes</label>
                            <input
                                type="number"
                                min="0"
                                value={this.state.duration}
                                onChange={e => this.setState({ duration: Number(e.target.value)}) } />
                        </div>
                        <div className="movie-details-container">
                            <select
                                className="genres"
                                value={this.state.genre}
                                onChange={e => this.setState({ genreId: Number(e.target.value)}) }
                            >
                                <option value="">Genre</option>
                                {this.getGenres()}
                            </select>
                            <select
                                value={this.state.value}
                                onChange={e => this.setState({ year: Number(e.target.value)}) }
                            >
                                <option>Year</option>
                                {this.getYears(1950, 2019)}
                            </select>
                            <select
                                value={this.state.rating}
                                onChange={e => this.setState({ rating: e.target.value}) }
                            >
                                <option value="">Rating</option>
                                <option value="G">G</option>
                                <option value="PG">PG</option>
                                <option value="PG-13">PG-13</option>
                                <option value="R">R</option>
                                <option value="NC-17">NC-17</option>
                            </select>
                        </div>
                    </div>
                    <div className="details-containers">
                        <div className="text-wrap image-url">
                            <label>Image Url</label>
                            <input
                                type="text"
                                value={this.state.imageUrl}
                                onChange={e => this.setState({ imageUrl: e.target.value })} />
                        </div>
                        <div className="customer-rating-container">
                            <label>Customer Rating</label>
                            <InputRange
                                step={0.5}
                                maxValue={10}
                                minValue={0}
                                value={this.state.customerRating}
                                onChange={customerRating => this.setState({ customerRating })}
                            />
                        </div>
                    </div>
                    <div className="text-wrap">
                        <label>Description</label>
                        <textarea
                            type="text"
                            value={this.state.description}
                            onChange={e => this.setState({ description: e.target.value })} />
                    </div>
                    <div className="add-actor-container">
                        <h4>Actor</h4>
                        <AddIcon size="small" click={this.handleAddActorClick} />
                    </div>
                    {this.state.actors &&
                        <div className="actors-fields-container">
                            {this.addActorField()}
                        </div>
                    }
                    <input
                        type="submit"
                        className="submit-movie"
                        value="Submit"
                        onClick={this.handleSubmit} />
                </div>
            </div>
        );
    }

    getYears = (min, max) => {
        const array = [];
        for(let i = min; i <= max; i++) {
            array.push(i);
        }

        return array.map((item,i) =>
            <option key={i} value={item}>{item}</option>);
    }

    getGenres = () => {
        return this.state.genreList.map((item, i) =>
            <option key={i} value={item.id}>{item.genre}</option>)
    }

    handleAddActorClick = () => {
        if(!this.state.actors) {
            this.setState({ actors: [{}] })
        } else {
            const actorList = this.state.actors;
            actorList.push({});
            this.setState({ actors: actorList })
        }
    }

    addActorField = () => {
        const actorList = this.state.actors;

        return actorList.map((el, i) =>
            <div key={i} className="details-containers">
                <div className="text-wrap first-name">
                    <label>First Name</label>
                    <input
                        type="text"
                        value={el.firstName}
                        onChange={(e) => this.handleActorFirstName(e, i)} />
                </div>
                <div className="text-wrap last-name">
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={el.firstName}
                        onChange={(e) => this.handleActorFirstName(e, i)} />
                </div>
                <input
                    className="removeButton"
                    type="button"
                    onClick={(i) => this.removeActorField(i)}
                    value="Remove"
                />
            </div>
        );
    };

    handleActorFirstName = (e, i) => {
        const firstName = e.target.value;
        const actorList = this.state.actors;
        actorList[i].firstName = firstName;
        this.setState({ actors: [ ...actorList ] });
    }

    handleActorLastName = (e, i) => {
        const firstName = e.target.value;
        const actorList = this.state.actors;
        actorList[i].firstName = firstName;
        this.setState({ actors: [ ...actorList ] });
    }

    removeActorField = (i) => {
        const actorList = this.state.actors;
        actorList.splice(i, 1);
        this.setState({ actors: actorList });
    };

    handleSubmit = () => {
        let { genreList, description, ...rest } = this.state;
        description = description.toLowerCase()
        description = description.replace(/'/g, "''");
        
        const data = { description, ...rest }; 


        fetch('http://localhost:8000/movie', {
            method: 'post',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        // .then(res => res.json())
        //     .then(response => console.log('Success:', JSON.stringify(response)))
        //     .catch(error => console.error('Error:', error));
    }


}

export default AddMovieModal;
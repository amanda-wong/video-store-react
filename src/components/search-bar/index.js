import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            genres: []
        }
    }

    componentDidMount = () => {
        fetch('http://localhost:8000/genres')
            .then(res => res.json())
            .then((data) => this.setState({genres: data}))
            .catch(error => console.error('Fetch Error: ', error)) 
    } 

    handleGenreChange = (e) => {
        this.props.dropdown(e);
    }

    handleKeyPress = (e) => {
        this.props.inputChange(e);
    }

    handleClick = () => {
        this.props.searchIconClick();
    }

    render() {
        
        let genres = this.state.genres.map((item, i) => <option key={i} value={item.genre}>{item.genre}</option>)

        return (
            <div className="search-bar">
                <select className="genre-dropdown" onChange={this.handleGenreChange}>
                    <option value="">Genre</option>
                    {genres}
                </select>
                <input type="text" className="search-input" onChange={this.handleKeyPress} />
                <svg className="search-icon" onClick={this.handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </div>  
        )
    }
}

export default SearchBar;
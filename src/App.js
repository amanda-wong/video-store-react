import React, { Component } from 'react';
import SearchBar from './components/search-bar';
import { BrowserRouter, Route } from 'react-router-dom';
import Movie from './views/movie';
import Home from './views/home';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            searchText: '',
            displayResult: [],
            genre: ''
        }
    }

    inputChangeHandler = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            this.searchHandler();
        }
    }

    dropdownHandler = (e) => {
        this.setState({ genre: e.target.value })
    }

    searchHandler = () => {
        var genre = this.state.genre;
        var search = this.state.searchText;
        var url = 'http://localhost:8000/movies';

        if (search !== '' && genre !== '') {
            url += `?q=${search}&genre=${genre}`;
        } else if (search !== '' && genre === '') {
            url += `?q=${search}`;
        } else if (search === '' && genre !== '') {
            url += `?genre=${genre}`;
        } 

        fetch(url)
            .then(res => res.json())
            .then((data) => this.setState({ displayResult: data }))
            .catch(error => console.error('Fetch Error: ', error))

    }

    movieLinkHandler = (movieTitle) => {
        let movie = movieTitle.split(' ').join('-')
        var url = `http://localhost:8000/movie/${movie}`;

        fetch(url)
        .then(res => res.json())
        .then((data) => this.setState({displayResult: data}))
        .catch(error => console.error('Fetch Error: ', error)) 
    }

    render() {
        console.log('searchText:', this.state.searchText);
        console.log('genre: ', this.state.genre);

        return (
            <BrowserRouter>
                <div className="App" onKeyDown={this.handleKeyPress}>
                    <SearchBar inputChange={this.inputChangeHandler} searchIconClick={this.searchHandler} dropdown={this.dropdownHandler} />
                    <div className="display-container">
                        <Route 
                            path="/" exact 
                            render={(props) => 
                                <Home {...props} 
                                    results={this.state.displayResult} 
                                    link={this.movieLinkHandler} /> } 
                        />
                        <Route 
                            path="/movie/:slug"
                            render={(props) => 
                                <Movie {...props} results={this.state.displayResult} />}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

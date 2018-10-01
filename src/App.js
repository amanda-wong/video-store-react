import React, { Component } from 'react';
import SearchBar from './components/search-bar';
import Display from './components/display';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            searchText: '',
            searchResult: [],
            genre: ''
        }
    }

    inputChangeHandler = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    handleKeyPress = (e) => {
        if(e.keyCode === 13) {            
            this.searchHandler();
        }
    }

    dropdownHandler = (e) => {
        this.setState({genre: e.target.value})
        this.searchHandler();
    }

    searchHandler = () => {
        var genre = this.state.genre;
        var queryString = this.state.searchText.split(' ').join('+');

        if(genre !== '' && queryString === '') {
            fetch('http://localhost:8000/movies/' + genre)
                .then(res => res.json())
                .then((data) => this.setState({searchResult: data}))
                .catch(error => console.error('Fetch Error: ', error)) 
        }


        if(genre === '' && queryString !== '') {
            fetch('http://localhost:8000/movies/search?q=' + queryString)
                .then(res => res.json())
                .then((data) => this.setState({searchResult: data}))
                .catch(error => console.error('Fetch Error: ', error))       
        }
    }

    render() {
        console.log('searchText:',this.state.searchText);
        console.log('genre: ',this.state.genre);
        
        return (
            <div className="App" onKeyDown={this.handleKeyPress}>
                <SearchBar inputChange={this.inputChangeHandler} searchIconClick={this.searchHandler} dropdown={this.dropdownHandler}/>
                <Display results={this.state.searchResult} />
            </div>
        );
    }
}

export default App;

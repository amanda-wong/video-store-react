import React, { Component } from 'react';
import SearchBar from './components/search-bar';
import Display from './components/display';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            searchText: '',
            searchResult: []
                
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

    searchHandler = () => {
        var queryString = this.state.searchText.split(' ').join('+');

        if(queryString !== '') {
            fetch('http://localhost:8000/movies/search?q=' + queryString)
                .then(res => res.json())
                .then((data) => this.setState({searchResult: data}))
                .catch(error => console.error('Fetch Error: ', error))       
        }
    }

    render() {
        console.log(this.state.searchText);
        
        return (
            <div className="App" onKeyDown={this.handleKeyPress}>
                <SearchBar inputChange={this.inputChangeHandler} searchIconClick={this.searchHandler} />
                <Display results={this.state.searchResult} />
            </div>
        );
    }
}

export default App;

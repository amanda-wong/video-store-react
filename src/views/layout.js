import React, { Component } from 'react';
import SearchBar from '../components/search-bar';
import AddMovieButton from '../components/add-movie-button';
import AddMovieModal from '../components/add-movie-modal';

class Layout extends Component {
    constructor () {
        super();
        this.state = {
            modalIsOpen: false
        }

        this.addMovieButtonHandler = this.addMovieButtonHandler.bind(this)
    }

    render() {
        return (
            <div className="App">
                <SearchBar />
                <div className="display-container">
                    {this.props.children}
                </div>
                
                {this.state.modalIsOpen && <AddMovieModal />}
                <AddMovieButton buttonClick={this.addMovieButtonHandler} />
            </div>
        );
    }

    addMovieButtonHandler () {
        this.setState({ modalIsOpen: !this.state.modalIsOpen });
    }
}


export default Layout;
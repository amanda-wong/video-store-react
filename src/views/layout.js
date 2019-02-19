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

        this.addMovieButtonHandler = this.addMovieButtonHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
    }

    render() {
        return (
            <div className="App">
                <SearchBar />
                <div className="display-container">
                    {this.props.children}
                </div>
                
                {this.state.modalIsOpen && <AddMovieModal closeModal={this.closeModalHandler} />}
                <AddMovieButton buttonClick={this.addMovieButtonHandler} />
            </div>
        );
    }

    addMovieButtonHandler() {
        this.setState({ modalIsOpen: true });
    }

    closeModalHandler(e) {
        const modalContainer = document.querySelector('.modal-outer-container');
        if(e.target === modalContainer) {
            this.setState({ modalIsOpen: false });
        }
    }
}

export default Layout;
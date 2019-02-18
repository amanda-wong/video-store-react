import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchActionCreators } from '../../actions/searchActions';
import './style.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            genres: []
        }
    }

    componentDidMount = () => {
        fetch('http://localhost:8000/genres')
            .then(res => res.json())
            .then((data) => this.setState({ genres: data }))
            .catch(error => console.error('Fetch Error: ', error))
    }

    componentDidUpdate() {
        if (this.state.redirect) {
            this.setState({ redirect: null });
        }
    }

    handleGenreChange = (e) => {
        this.setState({
            genre: e.target.value
        })
    }

    handleKeyPress = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    handleClick = () => {
        var genre = this.state.genre;
        var search = this.state.searchText;
        var url = 'http://localhost:8000/movies';

        if (search && genre) {
            url += `?q=${search}&genre=${genre}`;
        } else if (search && !genre) {
            url += `?q=${search}`;
        } else if (!search && genre) {
            url += `?genre=${genre}`;
        }

        fetch(url)
            .then(res => res.json())
            .then((data) => this.props.searchActions.search(data))
            .catch(error => console.error('Fetch Error: ', error));

        this.setState({
            redirect: true,
            searchText: null,
            genre: null
        });
    }

    render() {
        console.log("genre: ", this.state.genre)
        console.log("searchText: ", this.state.searchText)


        if (this.state.redirect) {
            return <Redirect to={{ pathname: '/' }} />;
        }

        let genres = this.state.genres.map((item, i) => <option key={i} value={item.genre}>{item.genre}</option>)

        return (
            <header className="header">
                <div className="search-bar">
                    <select className="genre-dropdown" onChange={this.handleGenreChange}>
                        <option value="">Genre</option>
                        {genres}
                    </select>
                    <input type="text" className="search-input" onChange={this.handleKeyPress} />
                    <svg className="search-icon" onClick={this.handleClick} fill="#FFF" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </div>
                <svg className="account-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#FFF">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchActions: bindActionCreators(searchActionCreators, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
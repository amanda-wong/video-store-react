import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieDetail from './views/movie-detail';
import MovieList from './views/movie-list';
import Layout from './views/layout';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route path="/" exact component={MovieList} />
                    <Route path="/movie/:slug" component={MovieDetail} />
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;

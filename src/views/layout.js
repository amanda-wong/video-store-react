import React from 'react';
import SearchBar from '../components/search-bar';

const Layout = ({ children }) => 
    <div className="App">
        <SearchBar 
            inputChange={this.inputChangeHandler} 
            searchIconClick={this.searchHandler} 
            dropdown={this.dropdownHandler} />
        <div className="display-container">
            {children}
        </div>
    </div>;

export default Layout;
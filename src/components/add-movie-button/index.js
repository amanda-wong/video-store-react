import React from 'react';
import AddIcon from '../add-icon';
import './style.css';

const AddMovieButton = (props) => {
    return (
        <div className="add-movie-button" onClick={props.buttonClick}>
            <AddIcon />
        </div>
    );
}



export default AddMovieButton;
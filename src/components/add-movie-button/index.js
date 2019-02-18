import React from 'react';
import './style.css';

const AddMovieButton = (props) => {
    return (
        <div className="add-movie-button" onClick={props.buttonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                <path d="M0 0h24v24H0z" fill="none" />
            </svg>
        </div>
    );
}



export default AddMovieButton;
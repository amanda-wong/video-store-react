import React from "react";
import "./style.css";

const AddMovieModal = (props) => {
    return (
        <div className="modal-outer-container" onClick={props.closeModal}>
            <div className="add-movie-modal">
                Add a movie
                <input type="text" placeholder="Movie Title" />
                <input type="text" placeholder="Duration" />
                <input type="text" placeholder="Genre" />
                <input type="text" placeholder="Year" />
                <input type="text" placeholder="Customer Rating" />
                <input type="text" placeholder="Actor" />
                <input type="text" placeholder="Image Url" />
                <input type="text" placeholder="Description" />
                <input type="text" placeholder="Rating" />
            </div>
        </div>
    );
}



export default AddMovieModal;
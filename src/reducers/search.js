import { searchActionTypes as type } from '../actions/searchActions';

const initialState = {
    results: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.fetchSearchResults: 
            return {
                ...state,
                results: action.searchResults,
            }
        default: 
            return state;
    }
};
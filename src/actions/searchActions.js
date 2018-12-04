export const searchActionTypes = {
    fetchSearchResults: 'FETCH_SEARCH_RESULT'
}

export const searchActionCreators = {
    search(searchResults) {
        return {
            type: searchActionTypes.fetchSearchResults,
            searchResults
        }
    }
}


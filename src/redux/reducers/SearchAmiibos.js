const INITIAL_STATE = {
    data: [],
    searchText: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case('SET_SEARCH_AMIIBOS'):
            return({ ...state, data: action.payload });
        case('CLEAR_SEARCH'):
            return({ ...state, data: [], searchText: '' });
        case('SEARCH_TEXT_CHANGED'): 
            return({ ...state, searchText: action.payload });
        default:
            return(state);
    }
}
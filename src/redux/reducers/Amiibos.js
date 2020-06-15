const INITIAL_STATE = {
    data: [],
    isLoading: true,
    page: 0,
    lastPage: 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'AMIIBOS_LOADED':
            return ({ ...state, data: action.payload, isLoading: false, lastPage: action.payload.length - 1 });
        case 'LOADING_AMIIBOS': 
            return({ ...state, isLoading: true });
        case 'NEXT_PAGE':
            return({ ...state, page: state.page + 1 });
        case 'PREV_PAGE':
            return({ ...state, page: state.page - 1 });
        case 'CLEAR_AMIIBOS': 
            return({ ...state, data: [], isLoading: true, lastPage: 0 });
        case 'SET_AMIIBO_PAGE': 
            return({ ...state, page: action.payload });
        default:
            return (state);
    }
}
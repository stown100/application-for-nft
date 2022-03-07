const initialState = {
    genre: null,
}

const filters = (state = initialState, action) => {
    if (action.type === 'SET_GENRES') {
        return {
            ...state,
            genre: action.payload,
        }
    }
    return state;
}

export default filters;
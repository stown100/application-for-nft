const initialState = {
    items: [],
    isLoaded: false,
}


// Каждый раз, когда происходит какой-то экшн - будет вызываться редюсер pizzas
const cards = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARDS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }

        default:
            return state;
    }
}

export default cards;
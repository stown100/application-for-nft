const initialState = {
    items: [],
    isLoaded: false,
}

// Каждый раз, когда происходит какой-то экшн - будет вызываться редюсер cards
const cards = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARDS':
            return {
                ...state,
                items: action.payload.slice(0, 6),
                isLoaded: true,
            };

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }
        case 'ADD_CARDS':
            // const currentCardItems = !state.items[action.payload.id]
            //     ? action.payload
            //     : [...state.items[action.payload.id], action.payload];
            //     console.log(currentCardItems)
            console.log(action.payload)
            return {
                ...state,
                items: action.payload.splice(0, state.items.length + 3, action.payload),
                isLoaded: true,
            }

            //action.payload.splice(0, state.items.length + 3, action.payload)

        // case ADD_ITEM:
        //     return {
        //         ...state,
        //         arr: [...state.arr, action.newItem]
        //     }

        default:
            return state;
    }
}

export default cards;
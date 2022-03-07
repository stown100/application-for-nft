import axios from "axios";

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchCards = (genre) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/cards?${genre !== null ? `genre=${genre}` : ''}`).then(({ data }) => {
        dispatch(setCards(data));
      })
}

export const setCards = (items) => ({
    type: 'SET_CARDS',
    payload: items
})
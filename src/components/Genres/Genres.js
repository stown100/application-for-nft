import React from 'react'

const Genres = React.memo(function Genres({ activeGenre, items, onClickGenres }) {
    return (
        <div className='genre-buttons'>
            <button className={activeGenre === null ? 'genre-buttons__button_disabled' : 'genre-buttons__button'} onClick={() => onClickGenres(null)}>All</button>
            {items &&
                items.map((name, index) => {
                    return (
                        <button onClick={() => onClickGenres(index)}
                            className={activeGenre === index ? 'genre-buttons__button_disabled' : 'genre-buttons__button'}
                            key={`${name}_${index}`}>
                            {name}
                        </button>
                    )
                })
            }
        </div>
    )
})

export default Genres
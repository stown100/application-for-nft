import React from 'react'
import Card from './Card';
import Preloader from '../Preloader/Preloader';
import vector from '../../images/Vector.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cards';
import Genres from '../Genres/Genres';
import { setGenres } from '../../redux/actions/filters';

function CardsSection() {
    const genreNames = [
        'Rock',
        'Pop',
        'K-pop',
        'Jazz',
        'Funck',
    ]

    const dispatch = useDispatch();
    const cards = useSelector(({ cards }) => cards.items);
    const isLoaded = useSelector(({ cards }) => cards.isLoaded);
    const { genre } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
        dispatch(fetchCards(genre))
    }, [genre]);

      // useCollback 1 раз запоминает ссылку на пропсы и больше не производит лишний рендер
  const onSelectGenres = React.useCallback((index) => {
    dispatch(setGenres(index))
  }, []);

    return (
        <div className='cards'>
            <p className='anchor'><a name="Resources" /></p>
            <div className='cards-top'>
                <h2 className='cards-top__title'>Discover Music NFT</h2>
                <div className='genre'>
                    <h5 className='genre__title'>Music Genre</h5>
                    <Genres activeGenre={genre} items={genreNames} onClickGenres={(index) => onSelectGenres(index)} />
                </div>
            </div>
            <div className='cards-block'>
                {isLoaded
                    ? cards.map(obj =>
                        <Card {...obj} key={obj.id} />)
                    : Array(12).fill(0).map((item, index) => <Preloader key={index} />)
                }
            </div>
            <button className='cards__button'>Discover More Music NFT<img className='button__arrow' src={vector} alt='arrow' /></button>
        </div>
    )
}

export default CardsSection
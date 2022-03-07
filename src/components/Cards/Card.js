import React from 'react';
import solanaImg from '../../images/cards/solana.svg';
import triangle from '../../images/cards/triangle.svg';

function Card(obj) {
    return (
        <div className='card-nft'>
            <div className='card-block'>
                <img className='card-block__img' src={obj.imageUrl} alt={`card ${obj.id}`} />
                <h6 className='card-block__name'>{obj.name}</h6>
                <div className='card-block__text-block'>
                    <p className='card-block__card__text-block-price'><img className='card__text-block-price-img' src={solanaImg} alt='token' />{obj.price}</p>
                    <p className='card-block__text-block-quantity'>{`${obj.quantity} tokens`}</p>
                </div>
                <div className='card-block__buttons-block'>
                    <button className='card-block__buttons-block-button card__buttons-block-button_first'>
                        <a className='card-block__buttons-block-button-link' target="_blank" href={obj.link} >Play now
                            <img className='card-block__buttons-block-button-img' src={triangle} alt='play' />
                        </a>
                    </button>
                    <button className='card-block__buttons-block-button card__buttons-block-button_second'>BUY NFT</button>
                </div>
            </div>
        </div>
    )
}

export default Card
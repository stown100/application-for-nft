import React from 'react'

import imageTitle from '../../images/image-title.png'
import solana from '../../images/logo-black 1.svg'
import arrow from '../../images/Vector.svg'
import rap from '../../images/image 2.png';
import solanaImg from '../../images/cards/solana.svg';
import music1 from '../../images/music1.png'
import music2 from '../../images/music2.png'
import music3 from '../../images/music3.png'
import music4 from '../../images/music4.png'
import CardsSection from '../Cards/CardsSection';


function Main() {
    return (
        <div className='main'>
            <p className='anchor'><a name="top" /></p>
            <div className='first'>
                <div className='first-info'>
                    <h1 className='first-info__title'>Music for NFT creators.</h1>
                    <h2 className='first-info__subtitle'>Digital Music for fans.</h2>
                    <p className='first-info__text'>
                        Music NFTs will continue to revolutionize the way that artists and fans
                        create community together as we enter the upcoming year — undoubtedly
                        changing the trajectory of countless budding music careers.
                    </p>
                    <div className='info'>
                        <div className='info-solana'>
                            <h6 className='info-solana__title'>Powered by</h6>
                            <img className='info-solana__img' src={solana} alt='solana' />
                        </div>
                        <button className='info__button'>
                            <a className='button__link' href='https://opensea.io/collection/music-for-nft-creators' target='_blank'>
                                Discover More<img className='button__arrow' src={arrow} alt="arrow" />
                            </a>
                        </button>
                    </div>
                </div>
                <img className='first-img' src={imageTitle} alt='head' />
            </div>

            <div className='second'>
                <div className='second-text'>
                    <h2 className='second-text__title'>How do Music NFTs work?</h2>
                    <p className='second-text__subtitle'>
                        NFTs are unique assets stored and tradable on a blockchain.
                        They are, immutable, scarce and publicly verifiable.
                        In the music world, artistes get to sell limited digital content to their fans who pay via crypto.
                        You can now produce any music content that cannot be counterfeited.
                    </p>
                </div>

                <div className='second-images'>
                    <img className="second-images__img" src={rap} alt='rap' />
                </div>
            </div>
            <p className='anchor'><a name="marketplace" /></p>

            <div className='marketplace'>
                <div className='containers'>
                    <div className='container1'>
                        <div className='card-music-block'>
                            <img className='card-music-block__img' src={music1} alt='card' />
                            <h6 className='card-music-block__name'>Rap music</h6>
                            <div className='card-music-block__text-block'>
                                <p className='card-music-block__card__text-block-price'><img className='card__text-block-price-img' src={solanaImg} alt='token' />0.3224</p>
                            </div>
                        </div>
                        <div className='card-music-block'>
                            <img className='card-music-block__img' src={music2} alt='card' />
                            <h6 className='card-music-block__name'>Rap music</h6>
                            <div className='card-music-block__text-block'>
                                <p className='card-music-block__card__text-block-price'><img className='card__text-block-price-img' src={solanaImg} alt='token' />0.3224</p>
                            </div>
                        </div>
                    </div>

                    <div className='container2'>
                        <div className='card-music-block'>
                            <img className='card-music-block__img' src={music3} alt='card' />
                            <h6 className='card-music-block__name'>Rap music</h6>
                            <div className='card-music-block__text-block'>
                                <p className='card-music-block__card__text-block-price'><img className='card__text-block-price-img' src={solanaImg} alt='token' />0.3224</p>
                            </div>
                        </div>
                        <div className='card-music-block'>
                            <img className='card-music-block__img' src={music4} alt='card' />
                            <h6 className='card-music-block__name'>Rap music</h6>
                            <div className='card-music-block__text-block'>
                                <p className='card-music-block__card__text-block-price'><img className='card__text-block-price-img' src={solanaImg} alt='token' />0.3224</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='marketplace-text'>
                    <h2 className='marketplace-text__title'>Music NFT Marketplace</h2>
                    <p className='marketplace-text__subtitle'>
                        Create your first music NFTs with NFT market for musicians.
                        Create music and music videos just under the $1, the platform works with BSC blockchain and supports mp4.
                        With AirNFTs, you are getting the control over your NFTs, no middle man cutting your sales.
                        Create, Buy, Sell and Earn with your music NFTs.</p>
                    <button className='marketplace-text__button'>
                        <a className='button__link' href='https://nftblackmarket.io/market-music/' target='_blank'>
                            Explore Marketplace<img className='button__arrow' src={arrow} alt="arrow" />
                        </a>
                    </button>
                </div>
            </div>
            <p className='anchor'><a name="About" /></p>

            <div className='community-info'>
                <h2 className='community-info__title'>Engage your<br />Fans with community</h2>
                <div className='community-info-blocks'>
                    <div className='community-info-block'>
                        <h3 className='community-info-block__title'>01/</h3>
                        <p className='community-info-block__text'>
                            Artists themselves become a platform. NFTs allow artistes,
                            especially upcoming ones, to create an ecosystem
                            that allows genuine fans to buy into their market.</p>
                    </div>
                    <div className='community-info-block'>
                        <h3 className='community-info-block__title'>02/</h3>
                        <p className='community-info-block__text'>
                            NFT gives all the power to creators.
                            Anyone upcoming artiste can do their stuff on-chain, making them more
                            independent and freeing them from unfavorable deals from record labels. </p>
                    </div>
                    <div className='community-info-block'>
                        <h3 className='community-info-block__title'>03/</h3>
                        <p className='community-info-block__text'>
                            A positive NFT-fueled change in the music market can upstage crypto adoption at large.
                        </p>
                    </div>
                </div>
            </div>
            <CardsSection />
        </div>
    )
}

export default Main
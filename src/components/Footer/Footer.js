import React from 'react';

import arrow from '../../images/arrow-up-circle.svg'

function Footer() {
    return (
        <div className='footer'>
            <p className='anchor'><a name="FAQ" /></p>

            <h3 className='footer__title'>Shape the NFT Music</h3>
            <div className='footer-info'>
                <div className='footer__links'>
                    <div className='footer__networks'>
                        <h5 className='footer__network'>Facebook</h5>
                        <span className='footer__network-separator'></span>
                        <h5 className='footer__network'>Twitter</h5>
                        <span className='footer__network-separator'></span>
                        <h5 className='footer__network'>Medium</h5>
                        <span className='footer__network-separator'></span>
                        <h5 className='footer__network'>Contact</h5>
                    </div>
                    <div className='terms'>
                        <p className='terms__text'>Privacy Policy</p>
                        <p className='terms__text'>Terms and Conditions</p>
                    </div>
                </div>

                <div className='footer__back'>
                    <p className='footer__back-text'>
                        <a className='header__nav-li_link' href='#top'>
                            <img className='footer__back-arrow' src={arrow} alt="arrow" />Back to the top
                        </a>
                    </p>
                    <p className='footer__back-date'>Copyright &copy; {new Date().getFullYear()} Avi Yansah</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
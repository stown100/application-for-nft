import React from 'react';

import facebook from '../../images/header/facebook.svg';
import twitter from '../../images/header/twitter.svg';
import medium from '../../images/header/medium-m.svg'

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <h2 className='logo-title'>Music</h2>
        <p className='logo-subtitle'>NFT Platform</p>
      </div>
      <ul className='header__nav'>
        <li className='header__nav-li'><a className='header__nav-li_link' href='#marketplace'>Marketplace</a></li>
        <li className='header__nav-li'><a className='header__nav-li_link' href='#About'>About</a></li>
        <li className='header__nav-li'><a className='header__nav-li_link' href='#Resources'>Resources</a></li>
        <li className='header__nav-li'><a className='header__nav-li_link' href='#FAQ'>FAQ</a></li>
      </ul>
      <div className='header__networks'>
        <a href='https://www.facebook.com/' target="_blank" ><img className='header__networks-icon' src={facebook} alt='faceboock' /></a>
        <a href='https://twitter.com/' target="_blank"><img className='header__networks-icon' src={twitter} alt='twitter' /></a>
        <a href='https://medium.com/' target="_blank"><img className='header__networks-icon' src={medium} alt='medium' /></a>
      </div>
    </div>
  )
}

export default Header
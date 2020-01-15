import React from 'react';
import bars from '../assets/bars-solid.svg';

const NavBar = () => {
    return (
        <div className='navbar'>
            <img className='btnMenu' src={bars} alt='bars' />
            <header className='txtTitle'>Lifetrack</header>
        </div>
    )
}

export default NavBar;
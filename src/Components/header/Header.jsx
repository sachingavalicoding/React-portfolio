import React from 'react'
import CTA from './CTA'
import Me from '../../assets/assets/me.png';
import HeaderSocals from './HeaderSocals';
import './header.css';
import '../../index.css';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>
                    Hello I'm
                </h5>
                <h1>
                    Sachin Gavali
                </h1>

                <h5 className="text-light">
                    FullStack Developer
                </h5>
                <CTA />
                <HeaderSocals />

                <div className="me">
                    <img src={Me} alt="me img " />

                </div>
                <a href="#contact" className='scroll__down '> Scroll Down </a>

            </div>

        </header>
    )
}

export default Header
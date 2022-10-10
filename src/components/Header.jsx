import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../assets/img/logos/logo.svg';
function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src={logo} alt="logo" />
                </Link>

                <nav className="header__nav">
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'current' : '')}
                                end>
                                Домой
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/catalog"
                                className={({ isActive }) => (isActive ? 'current' : '')}>
                                Каталог
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'current' : '')}>
                                О нас
                            </NavLink>
                        </li>
                    </ul>
                    <div className="header-contacts__socials">
                        <a href="/" target="_blank">
                            <span className="icon-instagram"></span>
                        </a>
                        <a href="/" target="_blank">
                            <span className="icon-telegram"></span>
                        </a>
                        <a href="/" target="_blank">
                            <span className="icon-twitter"></span>
                        </a>
                    </div>
                </nav>

                <div className="header__contacts header-contacts">
                    <a className="header-contacts__phone" href="tel:+37369321221">
                        +373 69 321 221
                    </a>

                    <div className="header-contacts__socials">
                        <a href="/" target="_blank">
                            <span className="icon-instagram"></span>
                        </a>
                        <a href="/" target="_blank">
                            <span className="icon-telegram"></span>
                        </a>
                        <a href="/" target="_blank">
                            <span className="icon-twitter"></span>
                        </a>
                    </div>
                    <button type="button" className="burger">
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;

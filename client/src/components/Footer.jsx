import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoWhite from '../assets/img/logos/logo-white.svg';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h6 className="footer__text">
                    ВЕСЬ КОНТЕНТ ПРИНАДЛЕЖИТ <span>LUSSO Homeware & Gifts</span> STORE
                </h6>

                <div className="footer__nav">
                    <Link to="/">
                        <img src={logoWhite} alt="logo" />
                    </Link>
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
                </div>

                <div className="footer__copyright">Copyright © 2022 Все права защищены</div>
            </div>
        </footer>
    );
}

export default Footer;

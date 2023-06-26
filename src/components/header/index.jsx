/* eslint-disable react/no-unescaped-entities */
import React from "react";
import './styles.css';
import CartWidget from "./CartWidget/CartWidget";

const Header = ({ logo, menuItem }) => {
    return (
        <header className="header">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamb" htmlFor ="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="#">Habitacion</a></li>
                    <li><a href="#">Comedor</a></li>
                    <li><a href="#">Living</a></li>
                    <li><a href="#">GiftBoxes</a></li>
                </ul>
            </nav>
            {/*<CartWidget />   */}
        </header>
    )
}

export default Header;

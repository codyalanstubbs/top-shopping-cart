import React from "react";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Cart from "./Cart";

const Nav = ({shoppingCart, toggleDisplayCart}) => {
    return (
        <header className="nav-bar">
            <Link to="/the-odin-project/21-shopping-cart/"><h2 className="hero-logo">Sensory Lexicons</h2></Link>
            <ul className="nav-links">
                <HashLink to="/the-odin-project/21-shopping-cart/#about">
                    <li className="about-link">About</li>
                </HashLink>
                <HashLink to="/the-odin-project/21-shopping-cart/#testimonials">
                    <li className="testimonials-link">Testimonials</li>
                </HashLink>
                <Link to="/the-odin-project/21-shopping-cart/shop/">
                    <li className="shop-link">Shop</li>
                </Link>
                <li onClick={toggleDisplayCart}><Cart shoppingCart={shoppingCart}/></li>
            </ul>
        </header>     
    );
};

export default Nav;
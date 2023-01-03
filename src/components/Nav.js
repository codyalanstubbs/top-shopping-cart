import React from "react";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Nav = ({shoppingCart, toggleDisplayCart}) => {
    return (
        <header className="nav-bar">
            <Link to="/"><h2 className="hero-logo">Sensory Lexicons</h2></Link>
            <ul className="nav-links">
                <a href="/#about">
                    <li className="about-link">About</li>
                </a>
                <a href="/#testimonials">
                    <li className="testimonials-link">Testimonials</li>
                </a>
                <Link to="/shop/">
                    <li className="shop-link">Shop</li>
                </Link>
                <li onClick={toggleDisplayCart}><Cart shoppingCart={shoppingCart}/></li>
            </ul>
        </header>     
    );
};

export default Nav;
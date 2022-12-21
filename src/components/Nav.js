import React from "react";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Nav = ({shoppingCart}) => {
    return (
        <header className="nav-bar">
            <Link to="/"><h2 className="hero-logo">Sensory Lexicons</h2></Link>
            <ul className="nav-links">
                <Link to="/#about">
                    <li className="about-link">About</li>
                </Link>
                <Link to="/#samples">
                    <li className="samples-link">Lexicons</li>
                </Link>
                <Link to="/#testimonials">
                    <li className="testimonials-link">Testimonials</li>
                </Link>
                <Link to="/shop/">
                    <li className="shop-link">Shop</li>
                </Link>
                <li><Cart shoppingCart={shoppingCart}/></li>
            </ul>
        </header>     
    );
};

export default Nav;
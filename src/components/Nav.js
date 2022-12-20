import React from "react";
import "../assets/css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li className="logo">LOGO</li>
                </Link>
                <Link to="/shop/">
                    <li className="shop">SHOP</li>
                </Link>
                <li className="cart">CART</li>
            </ul>
        </nav>
    );
};

export default Nav;
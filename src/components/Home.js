import React from "react";
import "../assets/css/Home.css";
import FlavorWheelImage from "../assets/images/flavor-wheel.png";

const Home = () => {
    return (
        <div>
            <main>
                <section id="about" className="about-section">
                    <div>
                        <h1 className="hero-header">Why reinvent the wheel?</h1>
                        <p className="hero-text">
                            Sensory lexicon development can takes weeks or months.
                            Develop faster with the largest online database of
                            published sensory lexicons.
                        </p>
                        <button className="hero signup">Buy</button>
                    </div>
                    <img src={FlavorWheelImage} alt="A flavor wheel." width="300px" height="300px" />
                </section>
                <section id="testimonials">
                    <em className="quote">Having a database of sensory attributes is very helpful when moving into a new product
                        category or expanding our current company lexicon.</em>
                    <strong className="speaker">-Cody Stubbs, Sensory Scientist</strong>
                </section>
                <section id="signup">
                    <div className="signup-banner">
                        <div className="cta">
                            <strong>Stop wasting time reinventing the wheel!</strong>
                            <p>Purchase the largest database of sensory lexicons.</p>
                        </div>
                        <button className="cta-btn signup">Buy</button>
                    </div>
                </section>
            </main>
            <footer>
                Copyright © Cody Alan Stubbs 2022
            </footer>
        </div>
    );
};

export default Home;
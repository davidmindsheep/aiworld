import React from 'react';
import founderImg from '../assets/harry-verity-new.jpg';
import './FounderSection.css';

const FounderSection = () => {
    return (
        <section className="founder-section container">
            <div className="glass-panel founder-card">
                <div className="founder-content">
                    <h2 className="text-gradient">Proven Growth Acceleration for Ambitious Businesses</h2>
                    <h3>Harry Verity</h3>
                    <p className="founder-role">Your Growth Transformation Partner</p>

                    <div className="founder-bio">
                        <p>
                            Former tech journalist for The Guardian, The Independent, and The Decoder (leading AI publication).
                            Previously built scalable lead generation systems for rapid-growth companies.
                        </p>
                        <p className="highlight">
                            Now I eliminate operational bottlenecks that prevent traditional businesses from scaling.
                        </p>
                    </div>

                    <div className="founder-media">
                        <span>As seen in:</span>
                        <div className="media-logos">
                            <span className="media-logo font-serif">The Guardian</span>
                            <span className="media-logo font-serif">The Independent</span>
                            <span className="media-logo">The Decoder</span>
                        </div>
                    </div>
                </div>

                <div className="founder-graphic">
                    <div className="image-wrapper glass-panel">
                        <img src={founderImg} alt="Harry Verity" className="founder-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;

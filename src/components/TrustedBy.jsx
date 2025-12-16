import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
    return (
        <section className="trusted-section">
            <div className="container">
                <div className="trusted-group">
                    <p className="trusted-label">Trusted by businesses across APAC & Middle East</p>
                    <div className="logos-grid">
                        <span className="client-logo">JAM Event Services</span>
                        <span className="client-logo font-serif">Featured in The Guardian</span>
                        <span className="client-logo font-serif">The Independent</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;

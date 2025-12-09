import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
    return (
        <section className="trusted-section">
            <div className="container">
                <div className="trusted-group">
                    <p className="trusted-label">Trusted by businesses</p>
                    <div className="logos-grid">
                        <span className="client-logo">JAM Safety</span>
                    </div>
                </div>

                <div className="trusted-group">
                    <p className="trusted-label">Featured in</p>
                    <div className="logos-grid">
                        <span className="client-logo font-serif">The Guardian</span>
                        <span className="client-logo font-serif">The Independent</span>
                        <span className="client-logo">The Decoder</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;

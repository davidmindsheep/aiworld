import React from 'react';
import logo from '../assets/images/logo.png';
import './Footer.css';

const Footer = ({ onOpenModal }) => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src={logo} alt="AI to the World" className="footer-logo-img" />
                        <p>
                            We eliminate 85% of administrative waste for traditional businesses through custom AI automation.
                            Transform your business in 90 days with guaranteed ROI.
                        </p>
                        <div className="footer-badges">
                            <span>📍 Based in Asia</span>
                            <span>🌏 Serving APAC & Middle East</span>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="link-col">
                            <h4>Services</h4>
                            <a href="#">Efficiency Audit</a>
                            <a href="#">Complete Transformation</a>
                            <a href="#">Scale Protection</a>
                        </div>
                        <div className="link-col">
                            <h4>Company</h4>
                            <a href="#">Case Studies</a>
                            <a href="#">About Harry</a>
                            <a href="#">FAQ</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); onOpenModal('General Consultation'); }}>Contact</a>
                        </div>
                        <div className="link-col">
                            <h4>Resources</h4>
                            <a href="#">ROI Calculator</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 AI to the World. All rights reserved.</p>
                    <div className="trust-badges">
                        <span>Fully Compliant AI Solutions</span>
                        <span>NDA Protected Consultations</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

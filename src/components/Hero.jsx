import React from 'react';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
    return (
        <section className="hero-section">
            <div className="hero-bg">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="container hero-content animate-fade-in">
                <h1 className="hero-title">
                    We Scale Businesses <span className="text-gradient">3 Times Faster</span> by Eliminating Their Biggest Growth Bottleneck
                </h1>

                <div className="hero-text-block">
                    <h3>What Could Your Business Achieve if Operations Weren't Holding You Back?</h3>
                    <p>
                        Growing businesses hit walls when manual processes can't keep up with demand.
                        We remove those barriers so you can scale without breaking your systems - or your team.
                    </p>
                </div>

                <div className="hero-actions">
                    <MagneticButton
                        className="btn-primary flex-center"
                        style={{ minWidth: '280px', padding: '1.25rem 2.5rem' }} // Made bigger as requested
                        onClick={() => onOpenModal('Scale Your Business')}
                    >
                        Unlock My Growth Potential
                        <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </MagneticButton>
                </div>

                <div className="hero-stats glass-panel">
                    <div className="stat-item">
                        <span className="stat-label">BEFORE</span>
                        <p>Operations team maxed out at current volume</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-label text-gradient">AFTER</span>
                        <p>Same team handles 3x the workload effortlessly</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-label text-gradient">RESULT</span>
                        <p>Ready to scale without operational chaos</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

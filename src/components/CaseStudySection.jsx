import React from 'react';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import './CaseStudySection.css';

const CaseStudySection = () => {
    return (
        <section className="case-study-section container" id="results">
            <div className="glass-panel case-study-card">
                <div className="case-header">
                    <span className="case-tag">Case Study Spotlight</span>
                    <h2 className="text-gradient">JAM Safety Transformation</h2>
                </div>

                <div className="case-grid">
                    <div className="case-details">
                        <div className="detail-item">
                            <h4>Challenge</h4>
                            <p>Operations team maxed out, couldn't handle growth</p>
                        </div>
                        <div className="detail-item">
                            <h4>Solution</h4>
                            <p>Automated workflow systems that scale infinitely</p>
                        </div>
                        <div className="detail-item">
                            <h4>Result</h4>
                            <p className="highlight">3x capacity with same headcount - ready for aggressive expansion</p>
                        </div>
                    </div>

                    <div className="case-stats-container">
                        <div className="stat-box">
                            <span className="stat-number text-gradient">3x</span>
                            <span className="stat-desc">Growth capacity</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-number">Same</span>
                            <span className="stat-desc">Team size</span>
                        </div>
                    </div>
                </div>

                <div className="case-quote">
                    <p>"From operations bottleneck to competitive advantage - now we can scale without limits."</p>
                    <span className="quote-author">- JAM Safety Representative</span>
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;

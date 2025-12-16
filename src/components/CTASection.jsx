import React, { useState } from 'react';
import './CTASection.css';

const CTASection = ({ onOpenModal }) => {
    const [employees, setEmployees] = useState(10);
    const [annualWaste, setAnnualWaste] = useState(50000);

    const calculateWaste = () => {
        // Assumption: £50,000 waste per 10 employees (based on copy "£50k+ per year") -> £5k per employee
        const waste = employees * 5000;
        setAnnualWaste(waste);
    };

    return (
        <section className="cta-section container">
            {/* Calculator */}
            <div className="glass-panel calculator-card">
                <div className="calc-content">
                    <h2 className="text-gradient">Stop Wasting Money on Manual Processes</h2>
                    <p>Every day you wait costs your business operational efficiency.</p>

                    <div className="input-group">
                        <label>Number of employees in your company:</label>
                        <div className="calc-actions">
                            <input
                                type="number"
                                value={employees}
                                onChange={(e) => setEmployees(parseInt(e.target.value) || 0)}
                                min="1"
                            />
                            <button className="btn-primary" onClick={calculateWaste}>Calculate Waste</button>
                        </div>
                    </div>
                </div>

                <div className="calc-result">
                    <span className="result-label">Estimated Annual Waste</span>
                    <span className="result-amount">£{annualWaste.toLocaleString()}</span>
                    <p className="result-sub">That's money you're throwing away on tasks that could be automated.</p>
                </div>
            </div>

            {/* Final CTA */}
            <div className="final-cta center-text">
                <h2 style={{ marginBottom: '2rem' }}>Ready to Scale without the Chaos?</h2>
                <div className="cta-buttons">
                    <button
                        className="btn-primary"
                        onClick={() => onOpenModal('Complete Transformation')}
                    >
                        Book My Transformation Call
                    </button>
                    <button
                        className="btn-outline"
                        onClick={() => onOpenModal('Operational Efficiency')}
                    >
                        Get Free ROI Analysis
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

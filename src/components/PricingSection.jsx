import React from 'react';
import { Check } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import SpotlightCard from './ui/SpotlightCard';
import './PricingSection.css';

const PricingSection = ({ onOpenModal }) => {

    const handleOpenModal = (planName) => {
        let interest = "General Consultation";
        if (planName === "The Growth Readiness Assessment") interest = "Operational Efficiency";
        if (planName === "The Complete Growth Transformation") interest = "Complete Transformation";
        if (planName === "The Scale Partnership") interest = "Scale Your Business";

        onOpenModal(interest);
    };

    const plans = [
        {
            name: "The Growth Readiness Assessment",
            price: "£1,997",
            desc: "A deep-dive audit to identify exactly where your operations are bleeding revenue.",
            features: [
                "Full Operational Audit",
                "Bottleneck Identification",
                "Automation Roadmap",
                "30-Day Action Plan",
                "ROI Projection"
            ],
            perfect: "Perfect for: Businesses needing clarity before committing."
        },
        {
            name: "The Complete Growth Transformation",
            price: "£2,500",
            period: "/mo",
            desc: "We build, install, and optimize your custom AI infrastructure.",
            popular: true,
            features: [
                "Custom AI System Integration",
                "Process Automation (Sales & Ops)",
                "Team Training & Handoff",
                "90-Day Implementation",
                "Guaranteed Efficiency Gains"
            ],
            perfect: "Perfect for: Companies ready to scale 3x fast."
        },
        {
            name: "The Scale Partnership",
            price: "Custom",
            desc: "Ongoing optimization and growth leadership.",
            features: [
                "Fractional COO/CTO Service",
                "Continuous System Evolution",
                "New Market Expansion Support",
                "Priority 24/7 Support",
                "Quarterly Strategy Pivots"
            ],
            perfect: "Perfect for: Aggressive expansion targets."
        }
    ];

    return (
        <section className="pricing-section container" id="services">
            <div className="section-header reveal-on-scroll">
                <h2 className="text-gradient">Investment That Pays for Itself</h2>
                <p className="section-subtitle">Stop paying for inefficiency. Start investing in scale.</p>
            </div>

            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <SpotlightCard key={index} className={`pricing-card reveal-on-scroll ${plan.popular ? 'popular' : ''}`}>
                        {plan.popular && <div className="popular-tag">MOST POPULAR</div>}
                        <h3>{plan.name}</h3>

                        <p className="plan-desc">{plan.desc}</p>

                        <div className="features-list">
                            {plan.features.map((feature, idx) => (
                                <div key={idx} className="feature-item">
                                    <Check size={18} className="check-icon" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="plan-footer">
                            <p className="perfect-for">{plan.perfect}</p>
                            <MagneticButton
                                className={`btn-block ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => handleOpenModal(plan.name)}
                            >
                                Get Started
                            </MagneticButton>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
};

export default PricingSection;

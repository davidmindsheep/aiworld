import React from 'react';
import SpotlightCard from './ui/SpotlightCard';
import './ProcessSection.css';

const steps = [
    {
        num: "01",
        title: "Growth Bottleneck Analysis",
        timeline: "Week 1-2",
        desc: "We identify what's preventing you from scaling and map out the operational infrastructure needed for 2x, 5x, 10x growth.",
        tag: "Strategy"
    },
    {
        num: "02",
        title: "Scalable System Implementation",
        timeline: "Week 3-8",
        desc: "We build operations that handle increased volume automatically - no linear hiring, no manual bottlenecks, no breaking points.",
        tag: "Build"
    },
    {
        num: "03",
        title: "Scale-Ready Team Training",
        timeline: "Week 9-12",
        desc: "Your team learns to manage systems that can handle any level of growth, freeing them to focus on revenue-generating activities.",
        tag: "Optimize"
    }
];

const ProcessSection = () => {
    return (
        <section className="process-section container" id="how-it-works">
            <div className="section-header reveal-on-scroll">
                <h2 className="text-gradient">From Chaos to Clarity in 90 Days</h2>
                <p className="section-subtitle">Our Proven Transformation Process</p>
            </div>

            <div className="process-grid">
                {steps.map((step, index) => (
                    <SpotlightCard key={index} className="process-card reveal-on-scroll">
                        <div className="card-number">{step.num}</div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                        <div className="process-meta">
                            <span className="step-timeline">{step.timeline}</span>
                            <span className="step-tag">{step.tag}</span>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
};

export default ProcessSection;

import React, { useRef, useEffect } from 'react';
import { AlertCircle, Users, TrendingDown, Clock, Search } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import './ProblemSection.css';
// ... (problems array definition logic skipped as it is outside replace block if I target correctly)

// Redefining whole file to ensure imports
const problems = [
    {
        icon: <AlertCircle size={24} />,
        title: "Operations that break down",
        desc: "When you try to scale, your current systems collapse."
    },
    {
        icon: <Users size={24} />,
        title: "Linear Hiring",
        desc: "Every new client requires more manual work."
    },
    {
        icon: <Search size={24} />,
        title: "Talent Waste",
        desc: "Best people stuck on administrative tasks."
    },
    {
        icon: <TrendingDown size={24} />,
        title: "Losing Deals",
        desc: "Competitors with better systems move faster."
    },
    {
        icon: <Clock size={24} />,
        title: "Slow Response Times",
        desc: "Systems that worked at £1M revenue fail at £5M."
    },
    {
        icon: <Users size={24} />,
        title: "Missed AI Opportunities",
        desc: "Stuck in manual operations instead of leveraging AI for strategic pivots."
    }
];

const ProblemSection = () => {
    return (
        <section className="problem-section container" id="about">
            <div className="section-header reveal-on-scroll">
                <h2 className="text-gradient">Your Operations Are the Ceiling on Your Growth</h2>
                <p className="section-subtitle">Growth Bottlenecks That Keep You Stuck</p>
            </div>

            <div className="problem-grid">
                {problems.map((item, index) => (
                    <SpotlightCard key={index} className="problem-card reveal-on-scroll">
                        <div className="card-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </SpotlightCard>
                ))}
            </div>

            <div className="growth-warning glass-panel reveal-on-scroll">
                <div className="warning-content">
                    <h3 className="text-gradient">Your Growth Window Is Closing</h3>
                    <p>While you're held back by operational limitations, competitors are scaling fast.</p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;

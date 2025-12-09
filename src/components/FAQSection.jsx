import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQSection.css';

const faqs = [
    { q: "How do I know this will work for my specific industry?", a: "Our systems are built on universal operational principles that apply across industries, customised to your specific workflows." },
    { q: "What if my team resists the changes?", a: "We include dedicated change management and training (Scale-Ready Team Training) to ensure buy-in and proficiency." },
    { q: "How quickly will I see results?", a: "Most clients see bottleneck relief within the first 4 weeks during the implementation phase." },
    { q: "Is this just expensive software I could buy myself?", a: "No, we build custom workflows and automations. The software is just the tool; the value is in the system architecture." },
    { q: "What's the investment for this transformation?", a: "We offer tiered value-based pricing depending on your growth stage, as outlined in our packages." },
    { q: "What happens after the 90-day transformation period?", a: "You own the systems. We offer a 'Scale Accelerator Partnership' for ongoing support if needed." },
    { q: "How do you ensure data security and compliance?", a: "We adhere to strict data protection standards and build on compliant enterprise-grade platforms." }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section container" id="faq">
            <div className="section-header center-text">
                <h2 className="text-gradient">Common Questions</h2>
                <p>Everything You Need to Know</p>
            </div>

            <div className="faq-grid">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`glass-panel faq-item ${openIndex === index ? 'open' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <h4>{faq.q}</h4>
                            <span className="faq-icon">
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer animate-fade-in">
                                <p>{faq.a}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;

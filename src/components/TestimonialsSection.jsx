import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
    {
        name: "Hadyn Evans",
        title: "CEO, Bluesky Property Investement",
        image: "https://aitotheworld.ai/wp-content/uploads/2024/10/compressed.jpg",
        content: "Very professional! Harry's AI consultancy service is a game-changer, especially for us in the property biz. They don't just give you generic tips; they really get into the nitty-gritty of what your business is about. They're super upfront about everything they're doing, which is refreshing."
    },
    {
        name: "James Banks",
        title: "CEO, Rankmax AI",
        image: "https://aitotheworld.ai/wp-content/uploads/2024/09/6DYRblGxo042es9QjE7rG9mI.png",
        content: "Harry's deep understanding of AI, combined with his strategic thinking, has provided me with invaluable guidance that has directly contributed to our success. In addition to his expertise, Harry's efforts in running the AI Founders Meetup in Bali every week have been a phenomenal platform."
    },
    {
        name: "William Littlefield III",
        title: "Chief Software Engineer, Visa",
        image: "https://aitotheworld.ai/wp-content/uploads/2024/09/B1aej5dT3boW3avJnLSJrl2ZuY.png",
        content: "Harry is a brilliant and charismatic pillar of the Bali entrepreneurship and AI communities. It is a pleasure to speak with him about business, AI, travel, and professional writing alike. Could not recommend his services more!"
    },
    {
        name: "Kanish Gosain",
        title: "Member of the Technical Staff, Open AI",
        image: "https://aitotheworld.ai/wp-content/uploads/2024/10/2024-10-01-08.52.58.jpg",
        content: "Working with Harry Verity was an inspiring experience. He has an exceptional ability to lean in and quickly grasp complex AI concepts, from the foundational mathematics to more advanced technologies. Harry knows how to frame the picture around any challenge."
    },
    {
        name: "Penn Frank & Felix Frank",
        title: "Founders of Stack Optimize",
        image: "https://aitotheworld.ai/wp-content/uploads/2024/10/2024-10-10-17.02.14.jpg",
        content: "Harry's advice on AI, marketing and strategy has been one of the key factors in helping us drive Stack Optimize, our lead generation business to over $500,000 in annual revenue. His wisdom in the latest AI tools and strategies has enabled us to take on more clients."
    }
];

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section container" id="testimonials">
            <div className="section-header text-center reveal-on-scroll">
                <h2 className="text-gradient">Hear People We've Worked With</h2>
                <p>Join the industry leaders transforming their businesses with our AI strategies.</p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div className="glass-panel testimonial-card reveal-on-scroll" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="testimonial-header">
                            <div className="testimonial-image-container">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="testimonial-image"
                                />
                            </div>
                            <div className="testimonial-info">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.title}</p>
                            </div>
                        </div>

                        <div className="testimonial-stars">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="#FBBF24" stroke="none" />
                            ))}
                        </div>

                        <p className="testimonial-content">
                            "{testimonial.content}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;

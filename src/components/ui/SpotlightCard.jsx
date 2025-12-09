import React, { useRef, useState } from 'react';

const SpotlightCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const div = cardRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={cardRef}
            className={`glass-panel spotlight-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Spotlight Overlay */}
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.1), transparent 40%)`,
                    transition: 'opacity 0.3s',
                    zIndex: 1,
                }}
            />

            {/* Border Highlight */}
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.4), transparent 40%)`,
                    zIndex: 3,
                    maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                    maskClip: 'content-box, border-box',
                    maskComposite: 'exclude',
                    padding: '1px', // Border width
                    boxSizing: 'border-box',
                    borderRadius: 'inherit'
                }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>
        </div>
    );
};

export default SpotlightCard;

import React, { useState, useRef } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, selectedPlan }) => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error'

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // Configured with User Credentials
        // Dashboard: https://dashboard.emailjs.com/admin
        const SERVICE_ID = 'service_vnn8mgl';
        const TEMPLATE_ID = 'template_004ypvp';
        const PUBLIC_KEY = 'oTYoQuzvXCBDRjbzs';

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
            setStatus('success');
            // Log for debugging (optional, can be removed in prod)
            console.log('Email sent successfully via EmailJS');
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h2>Get Started</h2>
                    <p>Tell us a bit about your needs and we'll be in touch shortly.</p>
                </div>

                {status === 'success' ? (
                    <div className="success-message" style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                            <Send size={48} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                        <p style={{ color: 'var(--text-muted)' }}>We'll get back to you as soon as possible.</p>
                        <button
                            className="submit-btn"
                            onClick={onClose}
                            style={{ marginTop: '2rem' }}
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                className="form-input"
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                className="form-input"
                                required
                                placeholder="name@company.com"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Interested In</label>
                            <select
                                name="interest"
                                className="form-select"
                                defaultValue={selectedPlan || "General Consultation"}
                                key={selectedPlan} // Force re-render when selectedPlan changes
                            >
                                <option value="General Consultation">General Consultation</option>
                                <option value="Scale Your Business">Scale Your Business</option>
                                <option value="Operational Efficiency">Operational Efficiency</option>
                                <option value="Complete Transformation">Complete Transformation</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea
                                name="message"
                                className="form-textarea"
                                placeholder="Project details, timeline, or requirements..."
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <div style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                Something went wrong. Please try again later.
                            </div>
                        )}

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Request <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactModal;

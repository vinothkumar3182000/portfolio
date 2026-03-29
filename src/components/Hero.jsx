import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

const roles = [
    'scalable web components',
    'beautiful interfaces',
    'accessible UI systems',
    'cross-framework libraries',
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && charIndex < currentRole.length) {
            timeout = setTimeout(() => setCharIndex(c => c + 1), 70);
        } else if (!isDeleting && charIndex === currentRole.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex(i => (i + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    const displayText = roles[roleIndex].substring(0, charIndex);

    return (
        <section className="hero section container" id="hero">
            <div className="hero-grid">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        Available for opportunities
                    </div>

                    <h1 className="hero-title">
                        I build{' '}
                        <span className="text-gradient typing-text">
                            {displayText}
                        </span>
                    </h1>

                    <p className="hero-description">
                        Software Engineer with 4+ years of experience crafting high-performance,
                        accessible UI components using TypeScript & React. Currently at{' '}
                        <strong style={{ color: 'var(--accent-1)' }}>Syncfusion</strong>, building
                        design systems used by thousands of developers.
                    </p>

                    <div className="hero-actions">
                        <a href="mailto:vinothkumar3182000vpm@gmail.com" className="btn-primary">
                            <Mail size={18} />
                            Get In Touch
                        </a>
                        <a href="/Vinothkumar.pdf" download className="btn-outline">
                            <Download size={18} />
                            Resume
                        </a>
                        <a href="#projects" className="btn-outline">
                            <ArrowDown size={18} />
                            View Work
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/vinothkumar3182000" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/vinothkumar-y31" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:vinothkumar3182000vpm@gmail.com" className="social-link" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-orb hero-orb-1"></div>
                    <div className="hero-orb hero-orb-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

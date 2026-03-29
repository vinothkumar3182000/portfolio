import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-socials">
                    <a href="https://github.com/vinothkumar3182000" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/vinothkumar-y31" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:vinothkumar3182000vpm@gmail.com" aria-label="Email">
                        <Mail size={20} />
                    </a>
                </div>
                <p className="footer-text">
                    Designed & Built with <Heart size={14} style={{ display: 'inline', verticalAlign: 'middle', color: '#f472b6' }} /> by{' '}
                    <span>Vinothkumar Y</span>
                </p>
                <p className="footer-text" style={{ fontSize: '0.75rem', marginTop: '4px' }}>
                    Built with React & Vite • © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;

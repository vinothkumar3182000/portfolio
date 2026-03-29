import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['about', 'experience', 'projects'];
            const scrollPos = window.scrollY + 120;

            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const links = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="navbar-logo">
                    <span className="text-gradient">V</span>inothkumar
                </a>

                <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
                    {links.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={activeSection === link.id ? 'active' : ''}
                            onClick={e => handleClick(e, link.id)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://github.com/vinothkumar3182000"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-cta"
                    >
                        GitHub
                    </a>
                </div>

                <button
                    className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

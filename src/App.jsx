import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

import Footer from './components/Footer';

function App() {
    useEffect(() => {
        // Scroll-reveal observer
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="bg-mesh"></div>
            <div className="bg-grid"></div>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />

            </main>
            <Footer />
        </>
    );
}

export default App;

import React from 'react';
import { Code, Layout, Server, Database, Globe, Palette } from 'lucide-react';

const skillCategories = [
    {
        icon: <Layout size={22} />,
        title: 'Languages',
        tags: ['TypeScript', 'JavaScript', 'C#', 'Python', 'HTML5', 'SCSS'],
    },
    {
        icon: <Server size={22} />,
        title: 'Frameworks',
        tags: ['React', 'Blazor', 'Angular', 'Vue', 'ASP.NET Core', 'React Native'],
    },
    {
        icon: <Globe size={22} />,
        title: 'Web Standards',
        tags: ['WCAG 2.0', 'Accessibility', 'CSP', 'Web Components', 'Responsive Design'],
    },
    {
        icon: <Code size={22} />,
        title: 'Tools',
        tags: ['Git', 'Jasmine', 'Visual Studio', 'VS Code', 'npm'],
    },
];

const About = () => {
    return (
        <section id="about" className="section container">
            <div className="reveal">
                <span className="section-label">About Me</span>
                <h2 className="section-title">
                    Passionate about crafting <span className="text-gradient">pixel-perfect</span> experiences
                </h2>
            </div>

            <div className="about-grid">
                <div className="about-text reveal reveal-delay-1">
                    <p>
                        Hey! I'm <strong>Vinothkumar Y</strong>, a Software Engineer based in Chennai, India.
                        I specialize in front-end and UI component development, focusing on delivering
                        high-quality, secure, and accessible products that delight users.
                    </p>
                    <p>
                        Currently at <strong style={{ color: 'var(--accent-1)' }}>Syncfusion</strong>, I build and maintain
                        scalable web components used across React, Angular, Vue, ASP.NET Core, and Blazor.
                        My work involves implementing WCAG 2.0 accessibility standards, Content Security Policy,
                        and creating enterprise-grade UI components from scratch.
                    </p>
                    <p>
                        Recently, I've transitioned into open-source work within my organization—moving some of our
                        components to the open-source community—while building side projects that solve
                        real-world problems.
                    </p>

                    <div className="about-stats">
                        <div className="stat-card">
                            <div className="stat-number">4+</div>
                            <div className="stat-label">Years Exp</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Frameworks</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">∞</div>
                            <div className="stat-label">Curiosity</div>
                        </div>
                    </div>
                </div>

                <div className="skills-grid reveal reveal-delay-2">
                    {skillCategories.map((cat, i) => (
                        <div className="skill-category" key={i}>
                            <div className="skill-category-header">
                                <div className="skill-icon">{cat.icon}</div>
                                <h3 className="skill-category-title">{cat.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {cat.tags.map((tag, j) => (
                                    <span className="skill-tag" key={j}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

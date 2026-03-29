import React from 'react';

const experiences = [
    {
        role: 'Software Engineer',
        company: 'Syncfusion',
        date: '2022 — PRESENT',
        highlights: [
            'Develop and maintain reusable web components across React, Angular, Vue, ASP.NET Core, and Blazor frameworks',
            'Implement WCAG 2.0 accessibility standards ensuring inclusive design for all users',
            'Enforce Content Security Policy (CSP) compliance across component libraries',
            'Collaborate with cross-functional teams to deliver enterprise-grade UI solutions',
            'Optimize component performance and bundle sizes for large-scale applications',
        ],
    },
    // {
    //     role: 'Junior Developer',
    //     company: 'Syncfusion',
    //     date: '2021 — 2022',
    //     highlights: [
    //         'Built UI components using TypeScript and JavaScript with test-driven development',
    //         'Wrote comprehensive unit tests with Jasmine ensuring high code coverage',
    //         'Contributed to design system documentation and developer guidelines',
    //         'Participated in code reviews and agile development processes',
    //     ],
    // },
];

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <div className="reveal">
                <span className="section-label">Career</span>
                <h2 className="section-title">
                    Where I've <span className="text-gradient">worked</span>
                </h2>
                <p className="section-subtitle">
                    Building professional-grade software components at scale.
                </p>
            </div>

            <div className="timeline">
                {experiences.map((exp, i) => (
                    <div className={`timeline-item reveal reveal-delay-${i + 1}`} key={i}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-date">{exp.date}</span>
                            <h3 className="timeline-role">{exp.role}</h3>
                            <p className="timeline-company">@ {exp.company}</p>
                            <ul className="timeline-highlights">
                                {exp.highlights.map((h, j) => (
                                    <li key={j}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

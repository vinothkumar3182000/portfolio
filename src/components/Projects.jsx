import React from 'react';
import { Github, Folder } from 'lucide-react';

const featuredProjects = [
    {
        title: 'JourneyApp',
        description:
            'A cross-platform personal journal mobile application built with React Native and TypeScript, focused on clean UI, smooth animations, and daily writing streaks.',
        tags: ['React Native', 'TypeScript', 'Expo', 'Mobile'],
        github: 'https://github.com/vinothkumar3182000/my-journal-app',
    },
    // {
    //     title: 'Profilo — Portfolio Site',
    //     description:
    //         'This very site! A modern, animated personal portfolio built with React and Vite, featuring scroll-reveal animations, typewriter effects, and a premium dark UI.',
    //     tags: ['React', 'Vite', 'CSS3', 'Animations'],
    //     github: 'https://github.com/vinothkumar3182000',
    // },
    // {
    //     title: 'Accessible Component Library',
    //     description:
    //         'Enterprise-grade UI components with full WCAG 2.0 compliance, keyboard navigation, screen reader support, and CSP-safe inline styles across 5 frameworks.',
    //     tags: ['TypeScript', 'WCAG 2.0', 'CSP', 'Web Components'],
    //     github: 'https://github.com/vinothkumar3182000',
    // },
    // {
    //     title: 'Scalping Trading Dashboard',
    //     description:
    //         'Real-time 5-minute trading assistant with live BUY/SELL signals, interactive charts, model training pipeline, and a FastAPI REST endpoint for predictions.',
    //     tags: ['Python', 'FastAPI', 'Machine Learning', 'Real-time'],
    //     github: 'https://github.com/vinothkumar3182000',
    // },
];

const ProjectCard = ({ title, description, tags, github }) => (
    <div className="project-card">
        <div className="project-card-header">
            <Folder size={36} strokeWidth={1.2} className="project-folder" />
            <div className="project-links">
                <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
                    <Github size={20} />
                </a>
            </div>
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tags">
            {tags.map((tag, i) => (
                <span className="project-tag" key={i}>{tag}</span>
            ))}
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <div className="reveal">
                <span className="section-label">Portfolio</span>
                <h2 className="section-title">
                    Things I've <span className="text-gradient">built</span>
                </h2>
                <p className="section-subtitle">
                    A collection of projects that showcase my skills and passion for building.
                </p>
            </div>

            <div className="projects-grid">
                {featuredProjects.map((project, i) => (
                    <div className={`reveal reveal-delay-${(i % 4) + 1}`} key={i}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

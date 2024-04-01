"use client";
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect'; // Make sure you have 'typewriter-effect' installed
import '../globals.css';

const SkillBar = ({ title, level, maxLevel, colorClass }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth((level / maxLevel) * 100);
    }, [level, maxLevel]);

    return (
        <div className="skill-bar-container">
            <div className="skill-bar-title">{title}</div>
            <div className="skill-bar">
                <div className={`skill-bar-fill ${colorClass}`} style={{ width: `${width}%` }}></div>
            </div>
            <div className="skill-bar-level">{level}/{maxLevel}</div>
        </div>
    );
};

const DescriptionWindow = ({ description }) => {
    return (
        <div
            className="bg-gray-900 text-secondary-300 font-mono text-base sm:text-lg md:text-xl overflow-y-scroll p-6 my-6"
            style={{ height: '45vh' }}
        >
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(10)
                        .typeString(description)
                        .start();
                }}
            />
        </div>
    );
};

const Bilan = () => {
    const skillsByYear = {
        "2022": {
            softSkills: [
                { title: "Gestion du temps", level: 3, maxLevel: 10, colorClass: 'secondary-fill' },
                { title: "Partager son point de vue", level: 4, maxLevel: 10, colorClass: 'secondary-fill' },
                { title: "Prendre des directives", level: 6, maxLevel: 10, colorClass: 'secondary-fill' },
                { title: "Etre à l'écoute", level: 5, maxLevel: 10, colorClass: 'secondary-fill' },
            ],
            techSkills: [
                { title: "Next.js", level: 0, maxLevel: 10, colorClass: 'primary-fill' },
                { title: "Python", level: 3, maxLevel: 10, colorClass: 'primary-fill' },
                { title: "Java", level: 4, maxLevel: 10, colorClass: 'primary-fill' },
                { title: "Github", level: 3, maxLevel: 10, colorClass: 'primary-fill' },
            ],
            description: `<span class='blue-text text-lg'>Scolarité :</span> 1ere année en BTS SIO SLAM et en alternance à la préfecture du Val d'Oise. <br/><span class='blue-text text-lg'>Compétences acquises :</span> Mise au point et gestion de projets à deadline.`        },
        "2023": {
            softSkills: [
                { title: "Gestion du temps", level: 6, maxLevel: 10, colorClass: 'secondary-fill' },
                { title: "Partager son point de vue", level: 7, maxLevel: 10, colorClass: 'secondary-fill' },
                { title: "Prendre des directives", level: 6, maxLevel: 10, colorClass: 'secondary-fill' },
                { title: "Etre à l'écoute", level: 5, maxLevel: 10, colorClass: 'secondary-fill' },
            ],
            techSkills: [
                { title: "Next.js", level: 5, maxLevel: 10, colorClass: 'primary-fill' },
                { title: "Python", level: 6, maxLevel: 10, colorClass: 'primary-fill' },
                { title: "Java", level: 6, maxLevel: 10, colorClass: 'primary-fill' },
                { title: "Github", level: 7, maxLevel: 10, colorClass: 'primary-fill' },
            ],
            description: `<span class='blue-text'>Scolarité :</span> 2e année en BTS SIO SLAM toujours en alternance à la préfecture du Val d'Oise. <br/><span class='blue-text'>Compétences acquises :</span> M'adapter au rythme d'alternance. Gérer mon temps de travail (avancer les projets + recherche pour amélioration de connaissances).`        },
        "2024": {
            softSkills: [
                { title: "Gestion du temps", level: 8, maxLevel: 10, colorClass: 'secondary-fill' },
                { title: "Partager son point de vue", level: 7, maxLevel: 10, colorClass: 'secondary-fill' },
                { title: "Prendre des directives", level: 8, maxLevel: 10, colorClass: 'secondary-fill' },
                { title: "Etre à l'écoute", level: 7, maxLevel: 10, colorClass: 'secondary-fill' },
            ],
            techSkills: [
                { title: "Next.js", level: 8, maxLevel: 10, colorClass: 'primary-fill' },
                { title: "Python", level: 6, maxLevel: 10, colorClass: 'primary-fill' },
                { title: "Java", level: 7, maxLevel: 10, colorClass: 'primary-fill' },
                { title: "Github", level: 9, maxLevel: 10, colorClass: 'primary-fill' },
            ],
            description: `<span class='blue-text'>Scolarité :</span> Ultime année en BTS SIO SLAM <br/><span class='blue-text'>Compétences acquises :</span> Me préparer et gérer le stress de l'approche des examens. Optimiser mon temps de travail de maniere a travailler de façon plus productive.`
        }
    };

    return (
        <div className="bilan-container">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Bilan des Compétences</h1>
            {Object.keys(skillsByYear).map((year) => (
                <div key={year} className="year-section">
                    <h2 className="text-lg sm:text-xl md:text-2xl text-secondary-300">{year}</h2>
                    <DescriptionWindow description={skillsByYear[year].description} />
                    <div className="soft-skills-section">
                        <h3>Softskills</h3>
                        {skillsByYear[year].softSkills.map((skill, index) => (
                            <SkillBar
                                key={index}
                                title={skill.title}
                                level={skill.level}
                                maxLevel={skill.maxLevel}
                                colorClass={skill.colorClass}
                            />
                        ))}
                    </div>
                    <div className="tech-skills-section">
                        <h3>Technologies</h3>
                        {skillsByYear[year].techSkills.map((skill, index) => (
                            <SkillBar
                                key={index}
                                title={skill.title}
                                level={skill.level}
                                maxLevel={skill.maxLevel}
                                colorClass={skill.colorClass}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Bilan;
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projectsData = [
    {
        id: 1,
        title: "Portfolio",
        lien: 'portfolio',
        description: "Il s'agit de mon portefolio codé en NEXT.JS et en REACT",
        image: "/images/projects/1.png",
        tag: ["Tous", "Web", "Ecole"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "EasyLine",
        lien: 'easyline',
        description: "Projet développé sous la directive de Mr. Frebourg en Java",
        image: "/images/projects/2.png",
        tag: ["Tous", "Application", "Ecole"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Rugby",
        lien: 'rugby',
        description: "Projet développé sous la directive de Mr. Guichard en Django",
        image: "/images/projects/3.png",
        tag: ["Tous", "Web", "Application", "Ecole"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Text adventure",
        lien: 'text-adventure',
        description: "Projet développé sous la directive de Mr. Hubert en Django",
        image: "/images/projects/4.png",
        tag: ["Tous", "Application", "Ecole"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Gaming Explorer",
        lien: 'gaming-explorer',
        description: "Projet développé sous la directive de Mr. Hubert et Mr. Guichard avec Matheous.KG et Fatih.CK en NEXT.JS et en REACT",
        image: "/images/projects/11.png",
        tag: ["Tous", "Web", "Ecole"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Gestion de tickets via GLPI",
        lien: 'gestion-de-tickets',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/5.png",
        tag: ["Tous", "Web", "Entreprise"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 7,
        title: "Mise à disposition d'une baie de brassage",
        lien: 'brassage',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/5.png",
        tag: ["Tous", "Web", "Entreprise"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 8,
        title: "Configuration VPN",
        lien: 'vpn',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/5.png",
        tag: ["Tous", "Web", "Entreprise"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 9,
        title: "Préparation de nouveaux arrivants",
        lien: 'arrivants',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/5.png",
        tag: ["Tous", "Web", "Entreprise"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 10,
        title: "Gestion du parc informatique",
        lien: 'parc',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/5.png",
        tag: ["Tous", "Web", "Entreprise"],
        gitUrl: "/",
        previewUrl: "/",
    },
];



const ProjectsSection = () => {
    const [selectedTag, setSelectedTag] = useState("Tous");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        if (selectedTag === newTag) {
            setSelectedTag("Tous");
        } else {
            setSelectedTag(newTag);
        }
    };

    const filteredProjects = projectsData.filter((project) =>
        selectedTag === "Tous" ? true : project.tag.includes(selectedTag)
    );

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    };


    return (
        <section id="projects">
            <div className="flex justify-center mb-4">
                <motion.button
                    className={`${
                        selectedTag === "Ecole"
                            ? "text-white border-primary-500"
                            : "text-[#ADB7BE] border-slate-600 hover:border-white"
                    } rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
                    onClick={() => handleTagChange("Ecole")}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    Ecole
                </motion.button>
                <motion.button
                    className={`${
                        selectedTag === "Entreprise"
                            ? "text-white border-primary-500"
                            : "text-[#ADB7BE] border-slate-600 hover:border-white"
                    } rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
                    onClick={() => handleTagChange("Entreprise")}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    Entreprise
                </motion.button>
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration: 0.3, delay: index * 0.4}}
                    >
                        <Link
                            href={`/projets/${project.lien}`}
                            passHref
                            legacyBehavior
                        >
                            <a>
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    imgUrl={project.image}
                                    gitUrl={project.gitUrl}
                                    previewUrl={project.previewUrl}
                                    id={project.id}
                                />
                            </a>
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;

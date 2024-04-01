"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projectsData = [
    {
        title: "Motorized Wide Area",
        lien: 'mwa',
        description: "Projet développé sous la directive de Mme Abdelmoula avec Matheous.KG et Abdelali.I",
        image: "/images/projects/1.png",
        tag: ["Tous", "Web", "Ecole"],
    },
    {
        title: "Farming Game",
        lien: 'farming',
        description: "Projet développé sous la directive de Mr. Guichard en Java",
        image: "/images/projects/farming.png",
        tag: ["Tous", "Application", "Ecole"],
    },
    {
        title: "Text adventure",
        lien: 'text-adventure',
        description: "Projet développé sous la directive de Mr. Hubert en Django",
        image: "/images/projects/text.png",
        tag: ["Tous", "Application", "Ecole"],
    },
    {
        title: "Gaming Explorer",
        lien: 'gaming-explorer',
        description: "Projet développé sous la directive de Mr. Hubert et Mr. Guichard avec Matheous.KG et Fatih.CK en NEXT.JS et en REACT",
        image: "/images/projects/11.png",
        tag: ["Tous", "Web", "Ecole"],
    },
    {
        title: "Gestion de tickets via GLPI",
        lien: 'gestion-de-tickets',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/A.png",
        tag: ["Tous", "Web", "Entreprise", "Année1"],
    },
    {
        title: "Mise à disposition d'une baie de brassage",
        lien: 'brassage',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/B.png",
        tag: ["Tous", "Web", "Entreprise", "Année1"],
    },
    {
        title: "Préparation de nouveaux arrivants",
        lien: 'arrivants',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/C.png",
        tag: ["Tous", "Web", "Entreprise", "Année1"],
    },
    {
        title: "Gestion du parc informatique",
        lien: 'parc',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/D.png",
        tag: ["Tous", "Web", "Entreprise", "Année1"],
    },
    {
        title: "Installation des copieurs",
        lien: 'copieurs',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/E.png",
        tag: ["Tous", "Web", "Entreprise", "Année1"],
    },
    {
        title: "Reconditionnement d'appareils defectueux",
        lien: 'recyclage',
        description: "Réalisation à partir de GLPI pour la prefecture du Val-D'Oise",
        image: "/images/projects/F.png",
        tag: ["Tous", "Web", "Entreprise", "Année1"],
    },
    {
        title: "Mises à jour et améliorations des équipements",
        lien: 'maj',
        description: "Maintenance et ajout d'équipements",
        image: "/images/projects/G.png",
        tag: ["Tous", "Web", "Entreprise", "Année2"],
    },
    {
        title: "Profilage des postes Noemi",
        lien: 'profilages',
        description: "Mise en place d'ordinateurs portable pour les utilisateurs",
        image: "/images/projects/H.png",
        tag: ["Tous", "Web", "Entreprise", "Année2"],
    },
    {
        title: "Préparation de visioconférences",
        lien: 'visio',
        description: "Préparation de visioconférences à la demande des membres de la préfecture",
        image: "/images/projects/I.png",
        tag: ["Tous", "Web", "Entreprise", "Année2"],
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
            <motion.button
                className={`${
                    selectedTag === "Entreprise"
                        ? "text-white border-primary-500"
                        : "text-[#ADB7BE] border-slate-600 hover:border-white"
                } rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
                onClick={() => handleTagChange("Année1")}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
            >
                Année
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

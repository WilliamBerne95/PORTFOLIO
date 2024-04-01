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
        tag: ["Tous", "Web", "Ecole", "Année2"],
    },
    {
        title: "Farming Game",
        lien: 'farming',
        description: "Projet développé sous la directive de Mr. Guichard en Java",
        image: "/images/projects/farming.png",
        tag: ["Tous", "Application", "Ecole", "Année2"],
    },
    {
        title: "Text adventure",
        lien: 'text-adventure',
        description: "Projet développé sous la directive de Mr. Hubert en Django",
        image: "/images/projects/text.png",
        tag: ["Tous", "Application", "Ecole", "Année1"],
    },
    {
        title: "Gaming Explorer",
        lien: 'gaming-explorer',
        description: "Projet développé sous la directive de Mr. Hubert et Mr. Guichard avec Matheous.KG et Fatih.CK en NEXT.JS et en REACT",
        image: "/images/projects/11.png",
        tag: ["Tous", "Web", "Ecole", "Année1"],
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
    const [schoolEntButtonText, setSchoolEntButtonText] = useState("École/Entreprise");
    const [anneeButtonText, setAnneeButtonText] = useState("Année");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };

    const filteredProjects = projectsData.filter((project) =>
        selectedTag === "Tous" ? true : project.tag.includes(selectedTag)
    );


    const handleSchoolEntChange = () => {
        // Toggle between "École" and "Entreprise" and reset "Année"
        if (selectedTag === "Ecole") {
            setSelectedTag("Entreprise");
            setSchoolEntButtonText("Entreprise");
        } else if (selectedTag === "Entreprise") {
            setSelectedTag("Tous");
            setSchoolEntButtonText("École/Entreprise");
        } else {
            setSelectedTag("Ecole");
            setSchoolEntButtonText("École");
        }
        setAnneeButtonText("Année"); // Reset the "Année" button text whenever toggling the school/enterprise filter
    };

    const handleAnneeChange = () => {
        // If currently selected is not "Année1" or "Année2", set it to "Année1"
        if (selectedTag !== "Année1" && selectedTag !== "Année2") {
            setSelectedTag("Année1");
            setAnneeButtonText("Année 1");
            setSchoolEntButtonText("École/Entreprise"); // Reset the "École/Entreprise" button text
        } else if (selectedTag === "Année1") {
            // If "Année1" is selected, switch to "Année2"
            setSelectedTag("Année2");
            setAnneeButtonText("Année 2");
        } else {
            // If "Année2" is selected, reset to show all
            setSelectedTag("Tous");
            setAnneeButtonText("Année");
        }
    };

    return (
        <section id="projects">
            <div className="flex flex-wrap mb-4 gap-2">
                <motion.button
                    className={`${
                        selectedTag === "Ecole"
                            ? "border-primary-500 text-white"
                            : selectedTag === "Entreprise"
                                ? "border-primary-500 text-white"
                                : "border-slate-600 text-[#ADB7BE]"
                    } rounded-full border-2 px-4 py-2 text-xl cursor-pointer w-full sm:w-auto sm:min-w-[200px]`}
                    onClick={handleSchoolEntChange}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {schoolEntButtonText}
                </motion.button>

                <motion.button
                    className={`${
                        selectedTag.startsWith("Année") && selectedTag !== "Tous"
                            ? "border-primary-500 text-white"
                            : "border-slate-600 text-[#ADB7BE]"
                    } rounded-full border-2 px-4 py-2 text-xl cursor-pointer w-full sm:w-auto sm:min-w-[200px]`}
                    onClick={handleAnneeChange}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {anneeButtonText}
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
                                    title={project.title}
                                    description={project.description}
                                    imgUrl={project.image}
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

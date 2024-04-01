"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "/src/components/TabButton";
import Modal from "/src/components/Modal";
import "animate.css/animate.min.css";
import MissionCard from '../../components/MissionCard';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const [tab, setTab] = useState("role");
    const [posteDescription, setPosteDescription] = useState("");
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    const [isModalOpen, setModalOpen] = useState({
        dysfonctionnements: false,
        demandes: false,
        equipements: false,
        incidents: false,
        brassage: false,
    });

    useEffect(() => {
        if (tab === "role") {
            const timer = setTimeout(() => {
                setPosteDescription(`En tant que technicien support informatique, j'étais responsable de la maintenance et de la résolution des problèmes des systèmes informatiques. Cela comprenait l'assistance aux utilisateurs, la gestion des incidents, et la mise à jour des équipements.`);
                setDescriptionVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setDescriptionVisible(false);
        }
    }, [tab]);

    const handleTabChange = (id) => {
        setTab(id);
        setPosteDescription("");
        setDescriptionVisible(false);
    };

    const openModal = (modal) => setModalOpen({ ...isModalOpen, [modal]: true });
    const closeModal = () => setModalOpen({ dysfonctionnements: false, demandes: false, equipements: false, incidents: false, brassage: false });

    return (
        <section className="text-white" id="about">
            <div className="text-center mb-8 flex justify-center items-center">
                <h2 className="text-4xl font-bold text-white mr-4">
                    {`Préfecture du Val d'Oise`}
                </h2>
                <a href="https://www.val-doise.gouv.fr" target="_blank" rel="noopener noreferrer"
                   className="flex items-center">
                    <Image src="/images/Entreprise/logo-prefecture-val-d-oise.jpg" width={500} height={500} alt={`Logo Préfecture du Val d'Oise`}
                         style={{
                             borderRadius: '20%',
                             width: '100px',
                             height: '60px',
                             transition: 'transform 0.3s ease-in-out'
                         }}
                         className="hover:scale-110"/>
                </a>
            </div>
            <div className="md:grid md:grid-cols-3 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="col-span-1">
                    <Image alt="image" src="/images/Entreprise/pref1.jpg" width={500} height={500}
                           className="rounded-md"/>
                </div>
                <div className="col-span-2 mt-4 md:mt-0 text-left flex flex-col">
                    <h2 className="text-4xl font-bold text-white mb-4">Mon entreprise</h2>
                    <p className="text-base lg:text-lg">
                        {`J'ai effectué mon alternance à la préfecture du Val-D'Oise en tant que technicien support
                            informatique,
                            et y ai effectué de nombreuses missions me permettant d'acquérir de l'expérience dans le domaine
                            de l'IT
                            et notamment du hardware.`}
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("role")} active={tab === "role"}>
                            Mon poste
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("missions")} active={tab === "missions"}>
                            Mes missions
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("equipe")} active={tab === "equipe"}>
                            {`L'équipe`}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {tab === "role" && (
                            <>
                                <h3 className="text-xl font-bold">Technicien support informatique</h3>
                                {isDescriptionVisible && (
                                    <p className={`mt-4 animate__animated animate__fadeIn`}>
                                        {posteDescription}
                                    </p>
                                )}
                            </>
                        )}
                        {tab === "missions" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <MissionCard
                                    onClick={() => openModal('dysfonctionnements')}
                                    imageSrc="/images/Entreprise/bank/Dysfonctionnements.webp"
                                    title="Dysfonctionnements signalés"
                                />
                                <MissionCard
                                    onClick={() => openModal('demandes')}
                                    imageSrc="/images/Entreprise/bank/Demandes.webp"
                                    title="Gestion des demandes"
                                />
                                <MissionCard
                                    onClick={() => openModal('equipements')}
                                    imageSrc="/images/Entreprise/bank/Equipements.webp"
                                    title="Mise à jour des équipements"
                                />
                                <MissionCard
                                    onClick={() => openModal('incidents')}
                                    imageSrc="/images/Entreprise/bank/Analyse.webp"
                                    title="Analyse des incidents"
                                />
                                <MissionCard
                                    onClick={() => openModal('brassage')}
                                    imageSrc="/images/Entreprise/bank/Brassage.webp"
                                    title="Gestion des baies de brassage"
                                />
                            </div>
                        )}
                        {tab === "equipe" && (
                            <motion.div
                                initial={{x: -100, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}} // Vous pouvez ajuster le délai ici
                            >
                                <Image alt="Équipe SID-SIC" src="/images/Entreprise/SIDSIC_equipe.png" width={650}
                                       height={650} className="rounded-md"/>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen.dysfonctionnements} onClose={closeModal} title="Dysfonctionnements signalés">
                <p>{`Cette tâche implique d'abord la réception des signalements de problèmes par les utilisateurs clés,
                    via GLPI, email, ou même par téléphone pour les cas urgents. Une fois le dysfonctionnement rapporté,
                    il est crucial d'identifier rapidement la nature du problème, d'évaluer son impact et de déterminer
                    les étapes nécessaires pour le résoudre.
                    Cette phase peut nécessiter une communication étroite avec l'utilisateur pour comprendre le contexte
                    du problème et, si nécessaire,
                    une intervention directe sur le matériel ou logiciel concerné.`}</p>
            </Modal>
            <Modal isOpen={isModalOpen.demandes} onClose={closeModal} title="Gestion des demandes">
                <p>{`Cette activité consiste à trier et prioriser les tickets reçus en fonction de leur impact sur les
                    opérations de l'entreprise et de leur ancienneté.
                    Chaque ticket doit être suivi de manière rigoureuse jusqu'à sa résolution, garantissant que
                    l'utilisateur final est tenu informé du statut de sa demande.
                    L'objectif est de résoudre les problèmes de manière efficace tout en assurant la satisfaction des
                    utilisateurs`}</p>
            </Modal>
            <Modal isOpen={isModalOpen.equipements} onClose={closeModal} title="Mise à jour des équipements">
                <p>{`Cette responsabilité englobe l'installation physique de nouveaux équipements sur site ou leur
                    configuration à distance,
                    ainsi que la mise à jour logicielle nécessaire pour maintenir le système opérationnel et sécurisé.
                    Cela peut inclure l'intégration de nouvelles solutions dans l'environnement existant, en veillant à
                    leur compatibilité et à leur performance optimale.`}</p>
            </Modal>
            <Modal isOpen={isModalOpen.incidents} onClose={closeModal} title="Analyse des incidents">
                <p>{`Faire une revue régulière des incidents résolus est essentiel pour identifier les tendances, les
                    vulnérabilités récurrentes ou les failles de sécurité.
                    Cette analyse permet d'initier des actions d'amélioration continue, visant à réduire la fréquence
                    des problèmes et à améliorer les temps de réponse.
                    Elle contribue à optimiser les processus de support technique et à augmenter la satisfaction des
                    utilisateurs finaux.`}</p>
            </Modal>
            <Modal isOpen={isModalOpen.brassage} onClose={closeModal} title="Gestion des baies de brassage">
                <p>{`Cette tâche cruciale implique la gestion et l'organisation des baies de brassage qui servent de point
                    central pour connecter
                    les équipements réseau au sein des différents bâtiments de la préfecture.
                    La responsabilité englobe le brassage des câbles pour assurer la connexion des multiples réseaux,
                    chacun dédié à des services spécifiques, garantissant ainsi leur bon fonctionnement et
                    interopérabilité.
                    En outre, cette mission comprend l'installation de nouvelles baies de brassage ainsi que le
                    remplacement des anciennes selon les nécessités,
                    assurant ainsi une infrastructure réseau fiable, sécurisée et évolutive. Cette gestion demande une
                    expertise technique pointue en matière de réseau,
                    une planification minutieuse et une capacité à résoudre les problèmes rapidement pour minimiser les
                    interruptions de service.`}</p>
            </Modal>
        </section>
    );
};

export default AboutSection;

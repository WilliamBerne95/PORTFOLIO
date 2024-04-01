"use client";
import React, { useState, useEffect } from 'react';
import { ReaCard } from "@/components/ReaCard"; // Assurez-vous que ce composant existe et est correctement importé
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const updatesData = [
    {
        path: '/images/projects/maj/maj.PNG',
        description: 'Accès aux drivers via le serveur local',
        comment: 'Accès aux drivers via le serveur local sur l\'explorateur de fichiers Windows.'
    },
    {
        path: '/images/projects/maj/maj2trellix.PNG',
        description: 'Mise à jour de sécurité Trellix',
        comment: 'Mise à jour de Trellix Endpoint Security pour renforcer la protection contre les menaces.'
    },
    {
        path: '/images/projects/maj/maj3.PNG',
        description: 'Mises à jour via Windows Update',
        comment: 'Suivi des mises à jour Windows installées pour une gestion proactive des équipements.'
    },
    {
        path: '/images/projects/maj/doubleecranticketGLPI.PNG',
        description: 'Ticket GLPI pour un deuxième écran',
        comment: 'Demande GLPI pour l’ajout d’un deuxième écran visant à améliorer le confort de travail.'
    },
    {
        path: '/images/projects/maj/20240314_162904.jpg',
        description: 'Bureau avec deux écrans',
        comment: 'Installation de deux écrans pour augmenter l’efficacité de travail.'
    },
];

const UpdatesAndImprovements = () => {
    const [zoomedItem, setZoomedItem] = useState(null);
    const [animation, setAnimation] = useState('zoomIn');

    const closeZoom = () => {
        setAnimation('zoomOut');
        setTimeout(() => {
            setZoomedItem(null);
        }, 300);
    };

    useEffect(() => {
        if (zoomedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [zoomedItem]);

    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Mises
                    à Jour et Améliorations des Équipements</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-secondary-300">
                    Suivi des mises à jour et des actions d{'\''}amélioration pour le matériel informatique.
                </p>
            </div>

            <div
                className="bg-gray-900 text-secondary-300 font-mono text-base sm:text-lg md:text-xl overflow-y-scroll p-6 my-6"
                style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString('<span class="text-primary-500 text-3xl">Objectif :</span><br>')
                            .typeString("Améliorer continuellement la sécurité et l'efficacité du matériel informatique par des mises à jour régulières et l'ajout d'équipements supplémentaires.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Processus :</span><br>')
                            .typeString("Installation de mises à jour logicielles critiques, configuration de solutions de sécurité avancées et optimisation de l'espace de travail avec de nouveaux équipements.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Date de réalisation :</span><br>01/03/2023 au 01/03/2024')
                            .start();
                    }}
                />
            </div>

            <ReaCard images={updatesData} />

            <div className="text-center mt-12">
                <Link href="/projets" legacyBehavior={true}>
                    <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default UpdatesAndImprovements;

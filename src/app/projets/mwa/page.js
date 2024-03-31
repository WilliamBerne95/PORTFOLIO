"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const motorizedWideAreaData = [
    {
        path: '/images/projects/mwa/cahier-des-charges.png',
        description: 'Cahier des Charges',
        comment: 'Document définissant les exigences du projet Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/cahier-technique.png',
        description: 'Cahier Technique',
        comment: 'Détails techniques et structure du projet Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/GANT.png',
        description: 'Diagramme GANTT',
        comment: 'Planification et suivi des tâches du projet Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/m1.png',
        description: 'Interface de Connexion',
        comment: 'Écran de connexion pour le logiciel de gestion Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/m2.png',
        description: 'Gestion de la Flotte',
        comment: 'Interface de gestion des véhicules dans Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/m3.png',
        description: 'Tableau de Bord',
        comment: 'Aperçu du tableau de bord administrateur pour Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/MotorizedWideArea.png',
        description: 'Page d’Accueil',
        comment: 'Page d’accueil du système Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/ticketing-jira.png',
        description: 'Suivi des Tickets JIRA',
        comment: 'Suivi de projet avec JIRA pour le logiciel Motorized Wide Area.'
    },
];

const MotorizedWideArea = () => {
    const [zoomedItem, setZoomedItem] = useState(null);

    // Fonction pour fermer l'overlay
    const closeZoom = () => setZoomedItem(null);

    const toggleZoom = (item) => {
        if (zoomedItem && zoomedItem.path === item.path) {
            setZoomedItem(null); // Si l'item est déjà ouvert, le fermer
        } else {
            setZoomedItem(item); // Sinon, ouvrir l'item cliqué
        }
    };

    // Utiliser useEffect pour gérer l'état de défilement de la page
    useEffect(() => {
        document.body.style.overflow = zoomedItem ? 'hidden' : 'auto';

        // Nettoyer en rétablissant l'état de défilement original à la fermeture du composant
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [zoomedItem]);


    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Motorized Wide Area</h1>
                <p className="text-xl">Visualisation du projet de gestion de parc automobile.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {motorizedWideAreaData.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4 cursor-pointer"
                         onClick={() => setZoomedItem(item)}>
                        <Image src={item.path} alt={item.description} width={500} height={300} layout="responsive"/>
                        <h3 className="text-lg font-bold my-2">{item.description}</h3>
                        <p className="text-gray-700">{item.comment}</p>
                    </div>
                ))}
            </div>

            {zoomedItem && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
                    onClick={closeZoom}
                    style={{ animation: 'fadeIn 0.5s' }} // Appliquer l'animation de fond
                >
                    <div
                        className="bg-white p-4 max-w-3xl max-h-full overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                        style={{ animation: 'zoomIn 0.3s forwards' }} // Appliquer l'animation de zoom
                    >
                        <Image
                            src={zoomedItem.path}
                            alt={zoomedItem.description}
                            width={800}
                            height={450}
                            layout="responsive"
                            onClick={closeZoom} // Cela va fermer l'overlay lors du clic sur l'image
                        />
                        <h3 className="text-lg font-bold my-2">{zoomedItem.description}</h3>
                        <p className="text-gray-700">{zoomedItem.comment}</p>
                    </div>
                </div>
            )}


            <div className="text-center mt-12">
                <Link legacyBehavior={true} href="/projets">
                    <a className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default MotorizedWideArea;

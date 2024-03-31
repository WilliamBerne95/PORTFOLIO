"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';


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
    const [animation, setAnimation] = useState('zoomIn'); // Gérer l'animation
    const [cmdText, setCmdText] = useState('');
    const fullCmdText = `Développé par:\nKOPS-GUEDES Matheus, BERNE William, IMZILEN Abdelali\n\nDescription\nLe projet vise à développer une application JavaFX de location de voitures, facilitant la gestion de la flotte, des réservations et des clients à travers 10 agences.\n\nFonctionnalités\n- Création d'une collection de favoris pour les personnages d'anime.\n- Recherche de personnages à partir de noms ou de critères spécifiques d'anime ou manga.\n- Page d'accueil pour créer un compte utilisateur et gérer une collection de personnages.\n\nSpécifications techniques\n- Front-end : HTML/CSS/JS\n- Back-end : Django (Python)`;
    const closeZoom = () => {
        setAnimation('zoomOut'); // Commencer par l'animation de sortie
        setTimeout(() => {
            setZoomedItem(null); // Fermer l'overlay après l'animation
        }, 300); // Assurez-vous que ce temps correspond à la durée de votre animation 'zoomOut'
    };
    const getOpacityClass = (index) => {
        const opacities = ['95', '90', '85', '80', '75', '70', '65', '60', '55', '50'];
        return `opacity-${opacities[index % opacities.length]}`;
    };
    // Gérer l'état de défilement de la page
    useEffect(() => {
        if (zoomedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setCmdText((cmd) => cmd + fullCmdText[currentIndex]);
            currentIndex++;
            if (currentIndex === fullCmdText.length) clearInterval(intervalId);
        }, 50); // La vitesse à laquelle le texte est écrit

        return () => clearInterval(intervalId);
    }, [zoomedItem]);


    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Motorized
                    Wide Area</h1>
                <p className="text-xl lg:text-2xl text-secondary-300">Visualisation du projet de gestion de parc automobile.</p>
            </div>

            <div className="bg-gray-900 text-secondary-300 font-mono text-lg lg:text-xl overflow-y-scroll p-6 my-6"
                 style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString('<span class="text-primary-500 text-3xl">Développé par :</span><br>KOPS-GUEDES Matheus, BERNE William, IMZILEN Abdelali<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Description :</span><br>Le projet vise à développer une application JavaFX de location de voitures, facilitant la gestion de la flotte, des réservations et des clients à travers 10 agences.<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Fonctionnalités :</span><br>')
                            .typeString('• Création d\'une collection de favoris pour les personnages d\'anime.<br>')
                            .typeString('• Recherche de personnages à partir de noms ou de critères spécifiques d\'anime ou manga.<br>')
                            .typeString('• Page d\'accueil pour créer un compte utilisateur et gérer une collection de personnages.<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Spécifications techniques :</span><br>')
                            .typeString('• Front-end : HTML/CSS/JS<br>')
                            .typeString('• Back-end : Django (Python)')
                            .start();
                    }}
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {motorizedWideAreaData.map((item, index) => (
                    <div key={index}
                         className="relative cellule bg-white rounded-lg shadow-lg overflow-hidden p-4 cursor-pointer h-auto md:h-96 lg:h-80 transform hover:scale-105 transition-transform duration-300"
                         onClick={() => setZoomedItem(item)}>
                        <Image
                            src={item.path}
                            alt={item.description}
                            width={500}
                            height={300}
                            layout="responsive"
                            className="object-cover object-center w-full h-full"
                        />
                        <div className="absolute inset-0 w-full h-full" /> {/* Ajout du pseudo-élément */}
                        <div className="absolute bottom-0 left-0 w-full p-4 z-10"> {/* Assurez-vous que le texte est au-dessus du dégradé */}
                            <h3 className="text-lg font-bold text-white"
                                style={{textShadow: '0 0 3px black'}}>{item.comment}</h3>
                        </div>
                    </div>
                ))}
            </div>


            {
                zoomedItem && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
                        onClick={closeZoom}
                        style={{animation: 'fadeIn 0.5s'}} // Appliquer l'animation de fond
                    >
                        <div
                            className="bg-white p-4 max-w-3xl max-h-full overflow-auto"
                            onClick={(e) => e.stopPropagation()}
                            style={{animation: 'zoomIn 0.3s forwards'}} // Appliquer l'animation de zoom
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
                )
            }


            <div className="text-center mt-12">
                <Link legacyBehavior={true} href="/projets">
                    <a className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour
                        aux projets</a>
                </Link>
            </div>
        </div>
    )
        ;
};

export default MotorizedWideArea;

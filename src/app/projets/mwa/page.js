"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import {ReaCard} from "@/components/ReaCard";


const images = [
    {
        path: '/images/projects/mwa/ticketing-jira.png',
        description: 'Suivi des Tickets JIRA',
        comment: 'Suivi de projet avec JIRA pour le logiciel Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/cahier-des-charges.png',
        description: 'Cahier des Charges',
        comment: 'Cahier des charges du projet Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/MotorizedWideArea.png',
        description: 'Page d’Accueil',
        comment: 'Aperçu de la page d’accueil de Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/m2.png',
        description: 'Gestion de la Flotte',
        comment: 'Aperçu de l\'interface de gestion des véhicules dans Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/m3.png',
        description: 'Tableau de Bord',
        comment: 'Aperçu du tableau de bord administrateur pour Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/cahier-technique.png',
        description: 'Cahier Technique',
        comment: 'Cahier techniques et structure du projet Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/GANT.png',
        description: 'Diagramme GANTT',
        comment: 'Planification et suivi des tâches via un diagramme GANTT.'
    },

];


const MotorizedWideArea = () => {
    const [zoomedItem, ] = useState(null);
    const [, ] = useState('zoomIn'); // Gérer l'animation
    const [, setCmdText] = useState('');
    const fullCmdText = `Développé par:\nKOPS-GUEDES Matheus, BERNE William, IMZILEN Abdelali\n\nDescription\nLe projet vise à développer une application JavaFX de location de voitures, facilitant la gestion de la flotte, des réservations et des clients à travers 10 agences.\n\nFonctionnalités\n- Création d'une collection de favoris pour les personnages d'anime.\n- Recherche de personnages à partir de noms ou de critères spécifiques d'anime ou manga.\n- Page d'accueil pour créer un compte utilisateur et gérer une collection de personnages.\n\nSpécifications techniques\n- Front-end : HTML/CSS/JS\n- Back-end : Django (Python)`;

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
        }, 10); // La vitesse à laquelle le texte est écrit

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
                            .typeString('• Back-end : Django (Python)<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Dates :</span><br>07/11/2023 au 29/03/2024')
                            .start();
                    }}
                />
            </div>

            <ReaCard images={images} />


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

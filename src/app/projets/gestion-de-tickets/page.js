"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import {ReaCard} from "@/components/ReaCard";

const images = [
    {
        path: '/images/projects/ticketglpi/Cycledevie.png',
        description: 'Cycle de vie d\'un ticket sur GLPI',
        comment: "Cycle de vie d\'un ticket sur GLPI."
    },
    {
        path: '/images/projects/ticketglpi/1GLPIinterfce.PNG',
        description: 'Interface GLPI',
        comment: "Aperçu de l'interface principale de GLPI pour la gestion des tickets."
    },
    {
        path: '/images/projects/ticketglpi/2GLPIticketnouvelarrivant1.PNG',
        description: 'Ticket GLPI',
        comment: "Détails d\'un ticket pour un nouvel arrivant montrant les étapes initiales de traitement."
    },
    {
        path: '/images/projects/ticketglpi/3GLPIticketnouvelarrivant2.PNG',
        description: 'Suivi d\'un Ticket',
        comment: "Historique des actions réalisées sur un ticket pour un nouvel arrivant."
    },
    {
        path: '/images/projects/ticketglpi/4relancemail.PNG',
        description: 'Relance par Email',
        comment: "Exemple d'un email de relance envoyé pour un ticket en attente de réponse."
    },
    {
        path: '/images/projects/ticketglpi/5connexiondistance1.PNG',
        description: 'Connexion Bureau à Distance',
        comment: "Configuration d'une connexion à distance pour la résolution de problèmes."
    },
    {
        path: '/images/projects/ticketglpi/6connexiondistance2.PNG',
        description: 'Écran de Connexion',
        comment: "Fenetre de connexion d'une session Bureau à Distance."
    },
];

const TicketManagement = () => {
    const [zoomedItem, setZoomedItem] = useState(null);
    const [animation, setAnimation] = useState('zoomIn'); // Gérer l'animation

    const closeZoom = () => {
        setAnimation('zoomOut'); // Commencer par l'animation de sortie
        setTimeout(() => {
            setZoomedItem(null); // Fermer l'overlay après l'animation
        }, 300); // Assurez-vous que ce temps correspond à la durée de votre animation 'zoomOut'
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
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                    Gestion des Tickets GLPI
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-secondary-300">
                    Visualisation du processus de suivi et résolution des tickets dans GLPI.
                </p>
            </div>

            <div className="bg-gray-900 text-secondary-300 font-mono text-base sm:text-lg md:text-xl overflow-y-scroll p-6 my-6"
                 style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString('<span class="text-primary-500 text-3xl">Taches effectuées par :</span><br>BERNE William et l\'ensemble de l\'équipe SIDSIC<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Description :</span><br>')
                            .typeString('J\'ai utilisé GLPI pour gérer efficacement la résolution des tickets, permettant ainsi de suivre, attribuer et résoudre les demandes et incidents de manière organisée. En plus de cela, j\'ai effectué la prise en main à distance et envoyé des relances par mail pour assurer un suivi complet et une résolution rapide des problèmes signalés.<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Logiciels/ plateformes utilisés :</span><br>')
                            .typeString('• GLPI<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Dates :</span><br>07/11/2023 au 29/03/2024')
                            .start();
                    }}
                />
            </div>

            <ReaCard images={images} />

            <div className="text-center mt-12">
                <Link legacyBehavior={true} href="/projets">
                    <a className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default TicketManagement;

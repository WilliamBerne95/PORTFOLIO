"use client";
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import {ReaCard} from "@/components/ReaCard";

const visioData = [
    {
        path: '/images/projects/visios/visio.png',
        description: 'Formulaire de planification pour visioconférence',
        comment: 'E-mail donnant des instructions pour participer à une réunion via Webex, indiquant l\'heure de la réunion, les codes d\'accès, et des liens pour se connecter. Des avertissements sont inclus sur la confidentialité des informations et sur l\'importance de ne pas perturber la réunion, avec des instructions spécifiques pour la connexion audio et vidéo. Des conseils sont donnés en cas de problème technique ou de difficulté à rejoindre la réunion.'
    },
    {
        path: '/images/projects/visios/visio2.PNG',
        description: 'Ticket GLPI pour réservation de visioconférence',
        comment: 'Suivi d’un ticket GLPI pour la réservation et l’organisation d’une visioconférence.'
    },
    {
        path1: '/images/projects/visios/visio789.jpg',
        path2: '/images/projects/visios/visio7.jpg',
        path3: '/images/projects/visios/visio5.jpg',
        description: 'Ecran de gestion de visioconférences',
        comment: 'Ecran avec interface permettant la gestion technique des visioconférences (réglages du son, allumage de la caméra, choix de ou des écrans de diffusion).'
    },
    {
        path1: '/images/projects/visios/visio3.jpg',
        path2: '/images/projects/visios/visio4.jpg',
        path3: '/images/projects/visios/visio6.jpg',
        description: 'Aperçu des équipements d\'une salle de visioconférence',
        comment: 'Caméra montée au plafond pour capturer la vidéo de la salle et écrans avec caméra et système audio intégré'
    },
];

const VisioConferencePreparation = () => {
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
                <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                    Préparation de Visioconférences
                </h1>
                <p className="text-xl lg:text-2xl text-secondary-300">
                    Organisation et mise en place des visioconférences pour les réunions à distance.
                </p>
            </div>

            <div
                className="bg-gray-900 text-secondary-300 font-mono text-base sm:text-lg md:text-xl overflow-y-scroll p-6 my-6"
                style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString('<span class="text-primary-500 text-3xl">Taches effectuées par :</span><br>BERNE William et l\'ensemble de l\'équipe SIDSIC<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Introduction :</span><br>')
                            .typeString("La préparation de visioconférences pour la Préfecture du Val d'Oise comprend un ensemble de procédures visant à faciliter des réunions à distance efficaces et sécurisées. Ce processus englobe tout, de la réservation des espaces adaptés à la configuration technique avancée de l'équipement.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Équipements et Configuration :</span><br>')
                            .typeString("Les installations incluent des caméras de haute définition, des microphones sensibles, et des écrans interactifs, assurant une expérience de visioconférence de qualité supérieure. Des mesures spécifiques sont prises pour garantir une connexion sécurisée et fiable.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Objectif :</span><br>')
                            .typeString("Notre but est d'offrir une solution de communication à distance, en soutenant la continuité et l'efficacité des opérations administratives au sein de la Préfecture.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Dates :</span><br>10/01/2024 au 12/01/2024')
                            .start();
                    }}
                />
            </div>

            <ReaCard images={visioData} />

            <div className="text-center mt-12">
                <Link href="/projets" legacyBehavior={true}>
                    <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default VisioConferencePreparation;

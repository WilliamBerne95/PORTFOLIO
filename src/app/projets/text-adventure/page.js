"use client";
import React, { useState, useEffect } from 'react';
import {ReaCard} from "@/components/ReaCard";
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const images = [
    {
        path: '/images/projects/textadventures/extraittextadv.PNG',
        description: 'Extrait de code',
        comment: 'Un extrait du code de TextAdventures montrant l\'interface utilisateur dans le terminal.'
    },
    {
        path: '/images/projects/textadventures/extraittextadvjeu.PNG',
        description: 'Extrait de Gameplay',
        comment: 'Une partie du jeu où le joueur choisit une action, démontrant la nature interactive de TextAdventures.'
    },
];

const TextAdventuresManagement = () => {
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
                <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                    TextAdventures Game
                </h1>
                <p className="text-xl lg:text-2xl text-secondary-300">
                    Découvrez le monde narratif et faites des choix dans TextAdventures.
                </p>
            </div>
            <div className="bg-gray-900 text-secondary-300 font-mono text-lg lg:text-xl overflow-y-scroll p-6 my-6"
                 style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString("<span class='text-primary-500 text-3xl'>Développé par :</span><br>BERNE William<br><br>")
                            .typeString("<span class='text-primary-500 text-3xl'>Description :</span><br>Dans TextAdventures, les joueurs explorent des mondes narratifs et prennent des décisions qui influencent l'histoire. C'est une aventure interactive où chaque choix compte.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Fonctionnalités :</span><br>')
                            .typeString('• Exploration de mondes variés.<br>')
                            .typeString('• Décisions qui influencent le cours de l\'histoire.<br>')
                            .typeString('• Narration riche et immersive.<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Spécifications techniques :</span><br>')
                            .typeString('• Front-end : Python<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Dates :</span><br>01/01/2023 au 01/02/2023')
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

export default TextAdventuresManagement;

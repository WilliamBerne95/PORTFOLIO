"use client";
import React, { useState, useEffect } from 'react';
import { ReaCard } from "@/components/ReaCard";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const appareilsReconditionnes = [
    {
        path1: '/images/projects/reconditionnement/20240314_151132.jpg',
        path2: '/images/projects/reconditionnement/20240314_151136.jpg',
        path3: '/images/projects/reconditionnement/20240314_151138.jpg',
        description: 'Stations d\'acceuil avec note manuscrite',
        comment: 'Une note sur une station d\'acceuil permettant le suivi des opérations.'
    },
    {
        path: '/images/projects/reconditionnement/20240314_152031.jpg',
        description: 'Poste Noemi en maintenance',
        comment: 'Notes manuscrites sur un poste Noemi indiquant des problèmes spécifiques et des tests.'
    }
];

const Reconditionnement = () => {
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
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Processus
                    de Reconditionnement</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-secondary-300">
                    Étapes et documentation pour la remise à neuf des équipements défectueux.
                </p>
            </div>

            <div
                className="bg-gray-900 text-secondary-300 font-mono text-base sm:text-lg md:text-xl overflow-y-scroll p-6 my-6"
                style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString('<span class="text-primary-500 text-3xl">Introduction :</span><br>')
                            .typeString("Le reconditionnement d'équipements défectueux est un processus crucial pour maximiser la durée de vie de notre matériel informatique. Cette démarche comprend le diagnostic des problèmes, la réparation ou le remplacement des composants endommagés, et les tests finaux pour assurer le bon fonctionnement de l'appareil.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Techniques et outils :</span><br>')
                            .typeString("• Utilisation d'outils de diagnostic pour identifier les défauts<br>")
                            .typeString("• Notes manuscrites et post-its pour le suivi des problèmes et des solutions<br>")
                            .typeString("• Tests de fonctionnement post-réparation<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Résultats attendus :</span><br>')
                            .typeString("Restauration complète de la fonctionnalité des appareils avec une documentation détaillée des interventions réalisées.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Date de réalisation :</span><br>01/06/2023 au 01/03/2024')
                            .start();
                    }}
                />
            </div>

            <ReaCard images={appareilsReconditionnes}/>

    <div className="text-center mt-12">
        <Link href="/projets" legacyBehavior={true}>
            <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour
                aux projets</a>
        </Link>
    </div>
</div>
)
    ;
};

export default Reconditionnement;

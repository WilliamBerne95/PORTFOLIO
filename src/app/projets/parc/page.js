"use client";
import React, { useState, useEffect } from 'react';
import { ReaCard } from "@/components/ReaCard";
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const images = [
    {
        path: '/images/projects/parcinfo/teleinv1.PNG',
        description: 'Aperçu de Téléinv',
        comment: 'Vue d’ensemble de la gestion des inventaires.'
    },
    {
        path: '/images/projects/parcinfo/teleinv2.PNG',
        description: 'Enregistrement de materiel sur Téléinv',
        comment: 'Enregistrement de materiel informatique dans le système de téléinventaire.'
    },
    {
        path: '/images/projects/parcinfo/OCS1.PNG',
        description: 'Aperçu d\'OCS Inventory',
        comment: 'Tableau de bord d’OCS Inventory affichant les statistiques du matériel.'
    },
    {
        path: '/images/projects/parcinfo/OCS2.PNG',
        description: 'Inventaire OCS détaillé',
        comment: 'Détails de l’inventaire des machines dans l’OCS Inventory.'
    },
    {
        path: '/images/projects/parcinfo/20240314_151100.jpg',
        description: 'Étagère de stockage matériel',
        comment: 'Vue sur l\'étagère où sont stockés le matériel informatique et les accessoires.'
    },
    {
        path: '/images/projects/parcinfo/20240314_151108.jpg',
        description: 'Espace de rangement',
        comment: 'Aperçu de l’espace de rangement contenant divers équipements et boîtes.'
    },
    {
        path: '/images/projects/parcinfo/20240314_151150.jpg',
        description: 'Stockage en réserve',
        comment: 'Zone de réserve pour le stockage de matériel informatique supplémentaire.'
    },
];

const GestionParcInformatique = () => {
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
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Gestion
                    du Parc Informatique</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-secondary-300">
                    Suivi et gestion des équipements informatiques de l{'\''}entreprise.
                </p>
            </div>

            <div
                className="bg-gray-900 text-secondary-300 font-mono text-base sm:text-lg md:text-xl overflow-y-scroll p-6 my-6"
                style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString('<span class="text-primary-500 text-3xl">Responsables du projet :</span><br>BERNE William et le reste de l\'équipe SIDSIC<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Description :</span><br>')
                            .typeString("Ce projet couvre la gestion et le suivi du parc informatique, incluant l'inventaire, le stockage et la maintenance des équipements informatiques. Les actions clés incluent l'organisation de l'espace de stockage, la mise en œuvre de solutions d'inventaire comme OCS Inventory, permettant une gestion efficace et centralisée des ressources informatiques de la préfecture.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Outils et plateformes utilisés :</span><br>')
                            .typeString("• OCS Inventory pour l'inventaire du matériel<br>")
                            .typeString("• Téléinv pour la traçabilité du materiel<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Date de réalisation :</span><br>01/03/2023 au 22/02/2024')
                            .start();
                    }}
                />
            </div>

            <ReaCard images={images} />

            <div className="text-center mt-12">
                <Link href="/projets" legacyBehavior={true}>
                    <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default GestionParcInformatique;

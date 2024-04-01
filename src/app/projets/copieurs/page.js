"use client";
import React, { useState, useEffect } from 'react';
import { ReaCard } from "@/components/ReaCard";
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const images = [

    {
        path1: '/images/projects/copieurs/20240314_162230.jpg',
        path2: '/images/projects/copieurs/20240314_162226.jpg',
        description: 'Copieur de l’administration',
        comment: 'Photo d\'un copieur de l\'administration.'
    },
    {
        path: '/images/projects/copieurs/imprimantes1.PNG',
        description: 'Liste des imprimantes sur le réseau',
        comment: 'Vue d’ensemble des imprimantes configurées et disponibles sur le réseau.'
    },
    {
        path: '/images/projects/copieurs/imprimantes2.PNG',
        description: 'Ajout d’une nouvelle imprimante',
        comment: 'Interface pour ajouter une nouvelle imprimante au réseau en utilisant son adresse IP.'
    },
    {
        path: '/images/projects/copieurs/driverscopieurs.PNG',
        description: 'Répertoire des pilotes de copieurs',
        comment: 'Répertoire sur le serveur de fichiers où les pilotes de copieurs sont stockés pour l’accès réseau.'
    },
    {
        path: '/images/projects/copieurs/imprimantes3.PNG',
        description: 'Installation de pilote d’imprimante',
        comment: 'Sélection et installation d’un pilote pour une nouvelle imprimante réseau.'
    }
];

const GestionCopieurs = () => {
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
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Installation
                    des Copieurs</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-secondary-300">
                    Processus d'installation et de configuration des copieurs pour le réseau d'entreprise.
                </p>
            </div>

            <div
                className="bg-gray-900 text-secondary-300 font-mono text-base sm:text-lg md:text-xl overflow-y-scroll p-6 my-6"
                style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString('<span class="text-primary-500 text-3xl">Responsable du projet :</span><br>BERNE William et le reste de l\'équipe SIDSIC<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Description :</span><br>')
                            .typeString("Ce projet englobe la mise en place et la configuration des copieurs dans le réseau de l'entreprise. Il couvre l'installation physique des appareils, la configuration de leur connectivité réseau, l'installation des pilotes nécessaires et la mise en place d'un accès facilité pour les utilisateurs. L'objectif est de maximiser l'efficacité opérationnelle et de garantir une gestion fluide des documents.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Outils et plateformes utilisés :</span><br>')
                            .typeString("• Panneau de configuration<br>")
                            .typeString("• Serveur de fichiers via l'explorateur Windows pour le stockage des pilotes<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Date de réalisation :</span><br>01/06/2023 au 01/02/2024')
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

export default GestionCopieurs;

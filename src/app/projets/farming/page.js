"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Données des images pour le projet Farming Game
const imagesFarmingGame = [
    {
        path: '/images/projects/farming/farmingapercu.png',
        description: 'Aperçu du jeu de ferme',
        comment: 'Image illustrant un aperçu du jeu de ferme avec différentes zones comme le champ, le poulailler et le marché.'
    },
    {
        path: '/images/projects/farming/interfacejeucode.PNG',
        description: 'Code de l’interface du jeu',
        comment: 'Capture d’écran montrant le code source de l’interface utilisateur du jeu de ferme.'
    },
    {
        path: '/images/projects/farming/trellofarming.PNG',
        description: 'Organisation du projet sur Trello',
        comment: 'Aperçu du tableau Trello utilisé pour gérer les tâches et l’avancement du projet de jeu de ferme.'
    },
    // Ajoutez d'autres images ici si nécessaire
];

const FarmingGameManagement = () => {
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
                <h1 className="text-4xl font-bold mb-4">Motorized Wide Area</h1>
                <p className="text-xl">Visualisation du projet de gestion de parc automobile.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {imagesFarmingGame.map((item, index) => (
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
                    style={{ animation: 'fadeIn 0.5s' }}
                >
                    <div
                        className="bg-white p-4 max-w-3xl max-h-full overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                        style={{ animation: 'zoomIn 0.3s forwards' }}
                    >
                        <Image
                            src={zoomedItem.path}
                            alt={zoomedItem.description}
                            width={800}
                            height={450}
                            layout="responsive"
                            onClick={closeZoom}
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

export default FarmingGameManagement;

"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const farmingGameData = [

    {
        path: '/images/projects/farming/interfacejeucode.PNG',
        description: 'Code de l’interface du jeu',
        comment: 'Capture d’écran montrant le code source de l’interface utilisateur du jeu.'
    },
    {
        path: '/images/projects/farming/trellofarming.PNG',
        description: 'Organisation du projet sur Trello',
        comment: 'Aperçu du tableau Trello utilisé pour gérer les tâches et l’avancement du projet.'
    },
    {
        path: '/images/projects/farming/farmingapercu.png',
        description: 'Aperçu du jeu',
        comment: 'Image illustrant un aperçu du jeu.'
    },
];

const FarmingGameManagement = () => {
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
                AquaFarmingGame
                </h1>
                <p className="text-xl lg:text-2xl text-secondary-300">
                    Visualisation du projet de jeu de ferme.
                </p>
            </div>
            {/* Ici, nous utilisons l'effet de machine à écrire pour présenter le projet. Adaptez cette section comme vous le souhaitez. */}
            <div className="bg-gray-900 text-secondary-300 font-mono text-lg lg:text-xl overflow-y-scroll p-6 my-6"
                 style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        // Adaptez les chaînes de caractères pour correspondre au contenu de votre projet
                        typewriter
                            .changeDelay(10)
                            .typeString("<span class='text-primary-500 text-3xl'>Développé par :</span><br>BERNE William<br><br>")
                            .typeString("<span class='text-primary-500 text-3xl'>Description :</span><br>Les joueurs sont chargés de faire progresser leurs poissons, en les nourrissant et en les vendant pour développer leur ferme. Les données de progression sont sauvegardées sur le compte utilisateur et stockées dans une base de données.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Fonctionnalités :</span><br>')
                            .typeString('• Gestion de la croissance de l\'élevage.<br>')
                            .typeString('• Avoir des revenus représentés sous forme de score.<br>')
                            .typeString('• Se connecter<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Spécifications techniques :</span><br>')
                            .typeString('• Front-end : HTML/CSS/JS<br>')
                            .typeString('• Back-end : MySQL/JS<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Dates :</span><br>15/01/2024 au 29/03/2024')
                            .start();
                    }}
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {farmingGameData.map((item, index) => (
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
                        <div className="absolute inset-0 w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                            <h3 className="text-lg font-bold text-white"
                                style={{textShadow: '0 0 3px black'}}>{item.description}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {zoomedItem && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
                    onClick={closeZoom}
                    style={{animation: 'fadeIn 0.5s'}}
                >
                    <div
                        className="bg-white p-4 max-w-3xl max-h-full overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                        style={{animation: 'zoomIn 0.3s forwards'}}
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
                    <a className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour
                        aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default FarmingGameManagement;

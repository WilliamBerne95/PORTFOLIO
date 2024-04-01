"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const images = [
    {
        path: '/images/projects/brassage/1bai1.jpg',
        description: 'Panneau de brassage',
        comment: "Installation du panneau de brassage dans la baie, assurant la centralisation des connexions réseau de l\'ensemble du bâtiment.",
    },
    {
        path: '/images/projects/brassage/2brs1.jpg',
        description: 'Panneau de brassage avec étiquettes',
        comment: 'Marquage et étiquetage des câbles pour une identification facile et une maintenance efficace.',
    },
    {
        path: '/images/projects/brassage/baiebrassage11.jpg',
        description: 'Baie de brassage ',
        comment: 'Baie de brassage montée pour la salle COD (cellule de crise).',
    },
    {
        path: '/images/projects/brassage/switchesbrassage12.jpg',
        description: 'Baie de brassage et switch réseau',
        comment: 'Baie de brassage montée pour la salle COD (cellule de crise).',
    },
    {
        path: '/images/projects/brassage/3eth.jpg',
        description: 'Prises Ethernet murales',
        comment: "Installation des prises Ethernet murales pour faciliter l\'accès au réseau dans différentes pièces.",
    },
    {
        path: '/images/projects/brassage/4ipconfig.PNG',
        description: 'Configuration IP de Windows',
        comment: 'Configuration des paramètres IP sur un poste de travail Windows pour assurer une connectivité réseau adéquate.',
    },
];

const BrassageManagement = () => {
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
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                    Montage d&aposune baie de brassage
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-secondary-300">
                    Visualisation du projet de montage et d&aposorganisation d&aposune baie de brassage.
                </p>
            </div>

            <div className="bg-gray-900 text-secondary-300 font-mono text-base sm:text-lg md:text-xl overflow-y-scroll p-6 my-6"
                 style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString('<span class="text-primary-500 text-3xl">Tâches effectuées par :</span><br>BERNE William<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Description :</span><br>')
                            .typeString("Le montage d'une baie de brassage consiste à installer et configurer une armoire contenant l'équipement réseau (serveurs, switches, routeurs) d'une organisation. Cela inclut la planification de l'espace, l'installation physique des équipements, le câblage structuré, et la configuration pour assurer la connectivité et la communication au sein du réseau. La mission vise à créer un système organisé, sécurisé, et facile à maintenir pour gérer le flux de données efficacement.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Logiciels/ plateformes utilisés :</span><br>')
                            .typeString("• Invite de commande pour s'assurer du bon raccordement réseau<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Date :</span><br>05/05/2023')
                            .start();
                    }}
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((item, index) => (
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
                        <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                            <h3 className="text-lg font-bold text-white"
                                style={{textShadow: '0 0 3px black'}}>{item.description}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {zoomedItem && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 ${animation}`}
                    onClick={closeZoom}>
                    <div className="bg-white p-4 max-w-3xl max-h-full overflow-auto"
                         onClick={(e) => e.stopPropagation()}
                         style={{animation: 'zoomIn 0.3s forwards'}}>
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

export default BrassageManagement;
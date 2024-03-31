"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
// Define your image data for Gaming Explorer project here
const gamingExplorerData = [
    {
        path: '/images/projects/gamingexplorer/github.png',
        description: 'Dépôt GitHub',
        comment: 'Le code est stocké sur Github.'
    },
    {
        path: '/images/projects/gamingexplorer/cahier-charge.png',
        description: 'Cahier des charges',
        comment: 'Projet réalisé avec des règles à respecter en plusieurs étapes.'
    },
    {
        path: '/images/projects/gamingexplorer/charte-graphique.png',
        description: 'Charte Graphique',
        comment: `Au début du projet, une exploration a été entreprise pour trouver des sources d'inspiration. Le choix s'est rapidement porté sur des couleurs sombres et vives, évoquant l'univers du gaming avec des éléments néon.

En ce qui concerne la typographie, Montserrat a été sélectionné pour les titres, tandis que Poppins a été préféré pour les paragraphes. Ces polices ont été jugées très lisibles et en harmonie avec le thème choisi.

Pour les icônes, nous avons opté pour l'utilisation de React-icons, une bibliothèque React offrant une vaste sélection d'icônes, avec une intégration aisée dans notre code.`
    },
    {
        path: '/images/projects/gamingexplorer/ticketing.png',
        description: 'Ticketing Github',
        comment: 'Pour la répartition des tâches, des tickets sont créés sur Github et attribués au groupe.'
    },
    {
        path: '/images/projects/gamingexplorer/discord.png',
        description: 'Communication de l’Équipe sur Discord',
        comment: 'Capture d’écran du canal Discord où se déroule la communication du projet.'
    },
    {
        path1: '/images/projects/gamingexplorer/firebase.png',
        path2: '/images/projects/gamingexplorer/schema-api2.png',
        description: 'Fonctionnement back-end Firebase',
        comment: '\n' +
            'Le backend de notre projet a été développé avec Google Firebase.\n' +
            '\n' +
            'Firebase offre une solution d\'authentification fiable et rapide, permettant aux utilisateurs de se connecter via différents fournisseurs (Google, Github, Facebook, Twitter, etc.).\n' +
            '\n' +
            'Nous avons également utilisé Google Firebase pour mettre en place le système de favoris.\n' +
            '\n' +
            'Toutes les données sont stockées sur Firebase et bénéficient d\'un cryptage assuré par une équipe d\'experts de Google.\n' +
            '\n' +
            'Ce choix technique s\'intègre parfaitement à notre stack Next.js.\n' +
            '\n' +
            'Voici un schéma illustrant le fonctionnement de l\'appel API entre le frontend et le backend sur Firebase.'
    },
    {
        path: '/images/projects/gamingexplorer/vercel.png',
        description: 'Deploiement via Vercel',
        comment: 'Vercel est une solution rapide, perfomante, gratuite et efficace créé par NextJS\n' +
            '\n' +
            'Elle permet de pouvoir déployer son projet stocké sur Github très facilement tout en gardant le SEO et tous les paramètres techniques\n' +
            '\n' +
            'Vercel permet également d\'avoir un suivi sur les personnes qui visitent le site et de pouvoir voir les performances du site en direct.'
    },
    {
        path: '/images/projects/gamingexplorer/ovh.png',
        description: 'Nom de domaine via OVH',
        comment: 'Une fois le déploiement du projet effectué via Vercel, l\'ajout d\'un nom de domaine personnalisé est possible.'
    },
    {
        path: '/images/projects/gamingexplorer/gamingExplorer.png',
        description: 'Page d’Accueil',
        comment: 'Section de la page d’accueil de Gaming Explorer mettant en lumière les nouveaux jeux et les tendances.'
    },
    {
        path: '/images/projects/gamingexplorer/account.png',
        description: 'Interface du Compte Utilisateur',
        comment: 'Interface du compte utilisateur de Gaming Explorer mettant en avant les jeux favoris.'
    },
    {
        path: '/images/projects/gamingexplorer/account-mobile.png',
        description: 'Interface Mobile du Compte Utilisateur',
        comment: 'Design réactif de la plateforme Gaming Explorer pour les appareils mobiles.'
    },
    {
        path: '/images/projects/gamingexplorer/gamedetail.png',
        description: 'Page de Détail du Jeu',
        comment: 'Page détaillée d’un jeu spécifique, fournissant des informations complètes et des interactions utilisateur.'
    },
    {
        path: '/images/projects/gamingexplorer/gamedetail-mobile.png',
        description: 'Page de Détail du Jeu sur Mobile',
        comment: 'Page détaillée d’un jeu optimisée pour mobile sur la plateforme Gaming Explorer.'
    },
    {
        path: '/images/projects/gamingexplorer/firebase.png',
        description: 'Découverte de Firebase',
        comment: 'Interface de la console Firebase montrant la structure des données hébergées dans le cloud.'
    },
    {
        path1: '/images/projects/gamingexplorer/schema-api2.png',
        path2: '/images/projects/gamingexplorer/api.png',
        description: 'Appel d\'API de Rawg.io',
        comment: '\n' +
            'La récupération d\'une API et le démarrage d\'un projet à partir de zéro ont constitué un défi initial. Après la maîtrise de la manipulation des données et de leur utilisation, leur intégration dans l\'application a été réalisée. Cette décision technique s\'alignait parfaitement avec notre stack Next.js.\n' +
            '\n' +
            'Ici, un schéma exposant le processus d\'appel API entre le frontend et RAWG.IO.'
    },

];
const GamingExplorerManagement = () => {
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
                    Gaming Explorer
                </h1>
                <p className="text-xl lg:text-2xl text-secondary-300">
                    Visualisation du projet Gaming Explorer.
                </p>
            </div>

            <div className="bg-gray-900 text-secondary-300 font-mono text-lg lg:text-xl overflow-y-scroll p-6 my-6"
                 style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString("<span class='text-primary-500 text-3xl'>Développé par :</span><br>Matheus, William, Fatih<br><br>")
                            .typeString("<span class='text-primary-500 text-3xl'>Description :</span><br>Gaming Explorer est un projet basé sur Next.JS qui propose un site permettant aux utilisateurs de rechercher des jeux vidéo via l'API de Rawg.io. L'application offre des fonctionnalités avancées telles qu'un compte utilisateur permettant d'ajouter des jeux aux favoris et bien plus encore.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Fonctionnalités :</span><br>')
                            .typeString('• Gestion de favoris : Permettre aux utilisateurs de marquer des jeux vidéo comme favoris.<br>')
                            .typeString('• Recherche avancée : Rechercher des jeux par nom ou par critères spécifiques tels que le genre, la plateforme, etc.<br>')
                            .typeString('• Interface responsive : Une conception qui s\'adapte aux différents appareils, offrant une expérience utilisateur optimisée pour le bureau et le mobile.<br>')
                            .typeString('• Intégration API : Utiliser l\'API de Rawg.io pour obtenir des données sur les jeux vidéo.<br>')
                            .typeString('• Authentification des utilisateurs : Créer et gérer un compte utilisateur pour des fonctionnalités personnalisées.<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Spécifications techniques :</span><br>')
                            .typeString('• Front-end : Next.js/ Tailwind CSS<br>')
                            .typeString('• Back-end : Google Firebase<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Dates :</span><br>09/05/2023 au 07/11/2023')
                            .start();
                    }}
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gamingExplorerData.map((item, index) => (
                    <div key={index}
                         className="relative cellule bg-white rounded-lg shadow-lg overflow-hidden p-4 cursor-pointer h-auto md:h-96 lg:h-80 transform hover:scale-105 transition-transform duration-300"
                         onClick={() => setZoomedItem(item)}>
                        <Image
                            src={item.path2 || item.path}
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
                <div className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 ${animation}`}
                     onClick={closeZoom}>
                    <div className="bg-white p-4 max-w-3xl max-h-full overflow-auto"
                         onClick={(e) => e.stopPropagation()}>
                        {/* If there are two images, display them on top of each other */}
                        {zoomedItem.path1 && (
                            <Image
                                src={zoomedItem.path1}
                                alt="Firebase Backend Functioning"
                                width={800}
                                height={450}
                                layout="responsive"
                            />
                        )}
                        {zoomedItem.path2 && (
                            <Image
                                src={zoomedItem.path2}
                                alt="API Schema"
                                width={800}
                                height={450}
                                layout="responsive"
                            />
                        )}
                        {/* If there is only one image, display it */}
                        {!zoomedItem.path1 && zoomedItem.path && (
                            <Image
                                src={zoomedItem.path}
                                alt={zoomedItem.description}
                                width={800}
                                height={450}
                                layout="responsive"
                            />
                        )}
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

export default GamingExplorerManagement;
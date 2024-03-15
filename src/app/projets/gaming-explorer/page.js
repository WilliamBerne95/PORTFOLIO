import React from 'react';
import Image from 'next/image';

// Define your image data for Gaming Explorer project here
const gamingExplorerData = [
    {
        path: '/images/projects/gamingexplorer/github.png',
        description: 'GitHub Repository',
        comment: 'Interface montrant le fichier README.md du projet Gaming Explorer sur GitHub.'
    },
    {
        path: '/images/projects/gamingexplorer/account.png',
        description: 'User Account Interface',
        comment: 'Interface du compte utilisateur de Gaming Explorer mettant en avant les jeux favoris.'
    },
    {
        path: '/images/projects/gamingexplorer/account-mobile.png',
        description: 'Mobile User Account Interface',
        comment: 'Design réactif de la plateforme Gaming Explorer pour les appareils mobiles.'
    },
    {
        path: '/images/projects/gamingexplorer/cahier-charge.png',
        description: 'Project Requirements',
        comment: 'Instantané du document de spécifications du projet décrivant les fonctionnalités et les fonctionnalités.'
    },
    {
        path: '/images/projects/gamingexplorer/charte-graphique.png',
        description: 'Graphic Charter',
        comment: 'Représentation visuelle de la charte graphique de Gaming Explorer, incluant le logo, la palette de couleurs et la typographie.'
    },
    {
        path: '/images/projects/gamingexplorer/discord.png',
        description: 'Team Communication on Discord',
        comment: 'Capture d\'écran du canal Discord où se déroule la communication du projet.'
    },
    {
        path: '/images/projects/gamingexplorer/firebase.png',
        description: 'Firebase Console',
        comment: 'Interface de la console Firebase montrant la structure des données hébergées dans le cloud.'
    },
    {
        path: '/images/projects/gamingexplorer/gamedetail.png',
        description: 'Game Detail Page',
        comment: 'Page détaillée d\'un jeu spécifique, fournissant des informations complètes et des interactions utilisateur.'
    },
    {
        path: '/images/projects/gamingexplorer/gamedetail-mobile.png',
        description: 'Mobile Game Detail Page',
        comment: 'Page détaillée d\'un jeu optimisée pour mobile sur la plateforme Gaming Explorer.'
    },
    {
        path: '/images/projects/gamingexplorer/gamingExplorer.png',
        description: 'Homepage New Releases',
        comment: 'Section de la page d\'accueil de Gaming Explorer mettant en lumière les nouveaux jeux et les tendances.'
    },
    {
        path: '/images/projects/gamingexplorer/github.png',
        description: 'Gaming Explorer GitHub Repository',
        comment: 'Le README.md de Gaming Explorer montrant les détails du projet sur GitHub.'
    },
    {
        path: '/images/projects/gamingexplorer/account.png',
        description: 'User Account on Gaming Explorer',
        comment: 'L\'interface du compte utilisateur montrant les jeux favoris sur Gaming Explorer.'
    },
    {
        path: '/images/projects/gamingexplorer/account-mobile.png',
        description: 'Mobile View of User Account',
        comment: 'La vue mobile réactive pour la section du compte utilisateur de Gaming Explorer.'
    },
];
const GamingExplorerImages = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <section className="mb-8">
                <h1 className="text-4xl font-bold mb-4">Gaming Explorer</h1>
                <p>
                    {`Gaming Explorer est un projet basé sur Next.JS qui propose un site
          permettant aux utilisateurs de rechercher des jeux vidéo via l'API de Rawg.io.
          L'application offre des fonctionnalités avancées telles qu'un compte utilisateur
          permettant d'ajouter des jeux aux favoris et bien plus encore.`}
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Propriétaires du projet</h2>
                <p>Matheus, William, Fatih</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">API utilisée</h2>
                <p>Rawg.io</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Durée du projet</h2>
                <p>Mai - Septemebre 2023</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
                <ul className="list-disc pl-6">
                    <li>Next.JS</li>
                    <li>Google Firebase</li>
                    <li>Tailwind CSS</li>
                    <li>Vercel</li>
                </ul>
            </section>
    <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Gaming Explorer Project Visuals</h1>
            <p className="text-xl">Un guide illustratif du design et des fonctionnalités de la plateforme Gaming Explorer.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamingExplorerData.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                    <Image src={item.path} alt={item.description} width={500} height={300} layout="responsive"/>
                    <h3 className="text-lg font-bold my-2">{item.description}</h3>
                    <p className="text-gray-700">{item.comment}</p>
                </div>
            ))}
        </div>
    </div>
        </div>
    )}


export default GamingExplorerImages;
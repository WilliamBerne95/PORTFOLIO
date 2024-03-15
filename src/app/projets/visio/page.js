import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define your image data for videoconference preparation here
const visioData = [
    {
        path: '/images/projects/visios/visio.png',
        description: 'Formulaire de réservation pour visioconférence',
        comment: 'Formulaire de demande à remplir pour réserver l’accès à une visioconférence.'
    },
    {
        path: '/images/projects/visios/visio2.PNG',
        description: 'Ticket GLPI pour réservation de visioconférence',
        comment: 'Suivi d’un ticket GLPI pour la réservation et l’organisation d’une visioconférence.'
    },
    {
        path: '/images/projects/visios/visio789.jpg',
        description: 'Salle de conférence équipée pour visioconférence',
        comment: 'Vue d’une salle de conférence prête pour une session de visioconférence avec l’équipement nécessaire.'
    },
    {
        path: '/images/projects/visios/visio3.jpg',
        description: 'Caméra de visioconférence',
        comment: 'Caméra montée au plafond pour capturer la vidéo de la salle.'
    },
    {
        path: '/images/projects/visios/visio4.jpg',
        description: 'Affichage de l’interface de visioconférence',
        comment: 'Écran montrant l’interface utilisateur de l’appareil de visioconférence.'
    },
    {
        path: '/images/projects/visios/visio5.jpg',
        description: 'Interface de visioconférence tactile',
        comment: 'Panneau tactile pour contrôler les fonctions de la visioconférence.'
    },
    {
        path: '/images/projects/visios/visio6.jpg',
        description: 'Configuration arrière de l’écran de visioconférence',
        comment: 'Détail des connexions à l’arrière de l’écran pour les réglages de visioconférence.'
    },
    {
        path: '/images/projects/visios/visio7.jpg',
        description: 'Préparation des équipements de visioconférence',
        comment: 'Matériel de visioconférence prêt à être utilisé pour une réunion.'
    },
];

const VisioConferencePreparation = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Préparation de Visioconférences</h1>
                <p className="text-xl">Organisation et mise en place des visioconférences pour les réunions à
                    distance.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visioData.map((visio, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                        <Image src={visio.path} alt={visio.description} width={500} height={300} layout="responsive"/>
                        <h3 className="text-lg font-bold my-2">{visio.description}</h3>
                        <p className="text-gray-700">{visio.comment}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link legacyBehavior={true} href="/projets">
                    <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour
                        aux projets</a>
                </Link>
            </div>
</div>
)
    ;
};

export default VisioConferencePreparation;

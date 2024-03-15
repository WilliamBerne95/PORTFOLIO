import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define your image data for the Motorized Wide Area project here
const motorizedWideAreaData = [
    {
        path: '/images/projects/mwa/cahier-des-charges.png',
        description: 'Cahier des Charges',
        comment: 'Document définissant les exigences du projet Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/cahier-technique.png',
        description: 'Cahier Technique',
        comment: 'Détails techniques et structure du projet Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/GANT.png',
        description: 'Diagramme GANTT',
        comment: 'Planification et suivi des tâches du projet Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/m1.png',
        description: 'Interface de Connexion',
        comment: 'Écran de connexion pour le logiciel de gestion Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/m2.png',
        description: 'Gestion de la Flotte',
        comment: 'Interface de gestion des véhicules dans Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/m3.png',
        description: 'Tableau de Bord',
        comment: 'Aperçu du tableau de bord administrateur pour Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/MotorizedWideArea.png',
        description: 'Page d’Accueil',
        comment: 'Page d’accueil du système Motorized Wide Area.'
    },
    {
        path: '/images/projects/mwa/ticketing-jira.png',
        description: 'Suivi des Tickets JIRA',
        comment: 'Suivi de projet avec JIRA pour le logiciel Motorized Wide Area.'
    },
];

const MotorizedWideArea = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Motorized Wide Area</h1>
                <p className="text-xl">Visualisation du projet de gestion de parc automobile.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {motorizedWideAreaData.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                        <Image src={item.path} alt={item.description} width={500} height={300} layout="responsive" />
                        <h3 className="text-lg font-bold my-2">{item.description}</h3>
                        <p className="text-gray-700">{item.comment}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link legacyBehavior={true} href="/projets">
                    <a className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default MotorizedWideArea;

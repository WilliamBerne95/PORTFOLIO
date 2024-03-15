import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
    {
        original: '/images/projects/ticketglpi/1GLPIinterfce.PNG',
        thumbnail: '/images/projects/ticketglpi/1GLPIinterfce.PNG',
        description: 'Interface GLPI',
        comment: "Aperçu de l'interface principale de GLPI pour la gestion des tickets."
    },
    {
        original: '/images/projects/ticketglpi/2GLPIticketnouvelarrivant1.PNG',
        thumbnail: '/images/projects/ticketglpi/2GLPIticketnouvelarrivant1.PNG',
        description: 'Ticket Nouvel Arrivant',
        comment: "Détails du ticket pour un nouvel arrivant montrant les étapes initiales de traitement."
    },
    {
        original: '/images/projects/ticketglpi/3GLPIticketnouvelarrivant2.PNG',
        thumbnail: '/images/projects/ticketglpi/3GLPIticketnouvelarrivant2.PNG',
        description: 'Suivi de Ticket',
        comment: "Historique des actions réalisées sur le ticket pour un nouvel arrivant."
    },
    {
        original: '/images/projects/ticketglpi/4relancemail.PNG',
        thumbnail: '/images/projects/ticketglpi/4relancemail.PNG',
        description: 'Relance par Email',
        comment: "Exemple d'un email de relance envoyé pour un ticket en attente de réponse."
    },
    {
        original: '/images/projects/ticketglpi/5connexiondistance1.PNG',
        thumbnail: '/images/projects/ticketglpi/5connexiondistance1.PNG',
        description: 'Connexion Bureau à Distance',
        comment: "Configuration d'une connexion à distance pour la résolution de problèmes."
    },
    {
        original: '/images/projects/ticketglpi/6connexiondistance2.PNG',
        thumbnail: '/images/projects/ticketglpi/6connexiondistance2.PNG',
        description: 'Écran de Connexion',
        comment: "Écran d'accueil d'une session Bureau à Distance."
    },
];

const TicketManagement = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Gestion des Tickets GLPI</h1>
                <p className="text-xl">Processus de suivi et résolution des tickets dans le système GLPI.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold underline decoration-wavy mb-6">Description</h2>
                <p>{`Vue d'ensemble du système de gestion des tickets utilisé pour le support informatique.`}</p>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold underline decoration-wavy mb-6">{`Processus de Gestion des Tickets`}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image src={image.original} alt={image.description} width={500} height={300} layout="responsive" />
                            <div className="p-6">
                                <p className="text-lg font-bold mb-2">{image.description}</p>
                                <p className="text-gray-700 text-sm">{image.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12">
                <Link legacyBehavior={true} href="/projets">
                    <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour aux projets</a>
                </Link>

            </div>
        </div>
    );
};

export default TicketManagement;

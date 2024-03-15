import React from 'react';
import Image from 'next/image';
import Link from "next/link";

// Define your image data here
const updatesData = [
    {
        path: '/images/projects/maj/20240314_162904.jpg',
        description: 'Bureau avec deux écrans et logiciel de sécurité',
        comment: 'Installation de deux écrans pour augmenter l’efficacité de travail et mise à jour de la solution de sécurité.'
    },
    {
        path: '/images/projects/maj/doubleecranticketGLPI.PNG',
        description: 'Ticket GLPI pour un deuxième écran',
        comment: 'Demande GLPI pour l’ajout d’un deuxième écran visant à améliorer le confort de travail.'
    },
    {
        path: '/images/projects/maj/maj.PNG',
        description: 'Mise à jour Windows en cours',
        comment: 'Processus de mise à jour des systèmes d’exploitation Windows pour garantir la sécurité et l’efficacité.'
    },
    {
        path: '/images/projects/maj/maj2trellix.PNG',
        description: 'Mise à jour de sécurité Trellix',
        comment: 'Mise à jour de Trellix Endpoint Security pour renforcer la protection contre les menaces.'
    },
    {
        path: '/images/projects/maj/maj3.PNG',
        description: 'Historique des mises à jour Windows',
        comment: 'Suivi des mises à jour Windows installées pour une gestion proactive des équipements.'
    }
];

const UpdatesAndImprovements = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Mises à Jour et Améliorations des Équipements</h1>
                <p className="text-xl">{`Suivi des mises à jour et des actions d'amélioration pour le matériel
                    informatique.`}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {updatesData.map((update, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                        <Image src={update.path} alt={update.description} width={500} height={300} layout="responsive"/>
                        <h3 className="text-lg font-bold my-2">{update.description}</h3>
                        <p className="text-gray-700">{update.comment}</p>
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

export default UpdatesAndImprovements;

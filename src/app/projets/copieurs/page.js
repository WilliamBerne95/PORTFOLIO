import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
    {
        original: '/images/projects/copieurs/20240314_162226.jpg',
        description: 'Espace de stockage de copieurs',
        comment: 'Zone de stockage où les copieurs et les fournitures associées sont conservés.'
    },
    {
        original: '/images/projects/copieurs/20240314_162230.jpg',
        description: 'Copieur et interface d’administration',
        comment: 'Copieur multifonction avec un écran affichant l’interface d’administration.'
    },
    {
        original: '/images/projects/copieurs/driverscopieurs.PNG',
        description: 'Répertoire des pilotes de copieurs',
        comment: 'Répertoire sur le serveur de fichiers où les pilotes de copieurs sont stockés pour l’accès réseau.'
    },
    {
        original: '/images/projects/copieurs/imprimantes1.PNG',
        description: 'Liste des imprimantes sur le réseau',
        comment: 'Vue d’ensemble des imprimantes configurées et disponibles sur le réseau.'
    },
    {
        original: '/images/projects/copieurs/imprimantes2.PNG',
        description: 'Ajout d’une nouvelle imprimante',
        comment: 'Interface pour ajouter une nouvelle imprimante au réseau en utilisant son adresse IP.'
    },
    {
        original: '/images/projects/copieurs/imprimantes3.PNG',
        description: 'Installation de pilote d’imprimante',
        comment: 'Sélection et installation d’un pilote pour une nouvelle imprimante réseau.'
    }
];

const GestionCopieurs = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Installation des Copieurs</h1>
                <p className="text-xl">{`Processus d'installation et de configuration des copieurs pour le réseau d'entreprise.`}</p>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold underline decoration-wavy mb-6">{`Procédure d'Installation`}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                            <Image src={image.original} alt={image.description} width={500} height={300} layout="responsive" />
                            <h3 className="text-lg font-bold my-2">{image.description}</h3>
                            <p className="text-gray-700">{image.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12">
                <Link href="/projets" legacyBehavior={true}>
                    <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default GestionCopieurs;

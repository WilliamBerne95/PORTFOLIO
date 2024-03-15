import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
    {
        original: '/images/projects/parcinfo/20240314_151100.jpg',
        description: 'Étagère de stockage matériel',
        comment: 'Vue sur l\'étagère où sont stockés le matériel informatique et les accessoires.'
    },
    {
        original: '/images/projects/parcinfo/20240314_151108.jpg',
        description: 'Espace de rangement',
        comment: 'Aperçu de l’espace de rangement contenant divers équipements et boîtes.'
    },
    {
        original: '/images/projects/parcinfo/20240314_151150.jpg',
        description: 'Stockage en réserve',
        comment: 'Zone de réserve pour le stockage de matériel informatique supplémentaire.'
    },
    {
        original: '/images/projects/parcinfo/OCS1.PNG',
        description: 'Statistiques OCS Inventory',
        comment: 'Tableau de bord de l’OCS Inventory affichant les statistiques du matériel.'
    },
    {
        original: '/images/projects/parcinfo/OCS2.PNG',
        description: 'Inventaire OCS détaillé',
        comment: 'Détails de l’inventaire des machines dans l’OCS Inventory.'
    },
    {
        original: '/images/projects/parcinfo/teleinv1.PNG',
        description: 'Téléinventaire - Vue générale',
        comment: 'Vue d’ensemble de la gestion des inventaires à distance.'
    },
    {
        original: '/images/projects/parcinfo/teleinv2.PNG',
        description: 'Téléinventaire - Liste des machines',
        comment: 'Liste des machines avec détails associés dans le système de téléinventaire.'
    }
];

const GestionParcInformatique = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Gestion du Parc Informatique</h1>
                <p className="text-xl">{`Suivi et gestion des équipements informatiques de l'entreprise.`}</p>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold underline decoration-wavy mb-6">Inventaire et Logistique</h2>
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

export default GestionParcInformatique;

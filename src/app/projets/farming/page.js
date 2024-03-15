import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Données des images pour le projet Farming Game
const imagesFarmingGame = [
    {
        path: '/images/projects/farming/farmingapercu.png',
        description: 'Aperçu du jeu de ferme',
        comment: 'Image illustrant un aperçu du jeu de ferme avec différentes zones comme le champ, le poulailler et le marché.'
    },
    {
        path: '/images/projects/farming/interfacejeucode.PNG',
        description: 'Code de l’interface du jeu',
        comment: 'Capture d’écran montrant le code source de l’interface utilisateur du jeu de ferme.'
    },
    {
        path: '/images/projects/farming/trellofarming.PNG',
        description: 'Organisation du projet sur Trello',
        comment: 'Aperçu du tableau Trello utilisé pour gérer les tâches et l’avancement du projet de jeu de ferme.'
    },
    // Ajoutez d'autres images ici si nécessaire
];

const FarmingGameManagement = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Jeu de Farming</h1>
                <p className="text-xl">{`Processus de développement et d'organisation du jeu de ferme.`}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {imagesFarmingGame.map((image, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                        <Image src={image.path} alt={image.description} width={500} height={300} layout="responsive"/>
                        <h3 className="text-lg font-bold my-2">{image.description}</h3>
                        <p className="text-gray-700">{image.comment}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="/projets" legacyBehavior={true}>
                    <a className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">Retour aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default FarmingGameManagement;

import React from 'react';
import Image from 'next/image';

const appareilsReconditionnes = [
    {
        original: '/images/projects/reconditionnement/20240314_151132.jpg',
        description: 'Bloc d’alimentation avec note manuscrite',
        comment: 'Une note indiquant un problème avec le circuit d’alimentation.'
    },
    {
        original: '/images/projects/reconditionnement/20240314_151136.jpg',
        description: 'Appareil avec plusieurs notes',
        comment: 'Des notes détaillant les procédures de test de l’appareil et les informations de diagnostic.'
    },
    {
        original: '/images/projects/reconditionnement/20240314_151138.jpg',
        description: 'Ordinateur portable avec post-it',
        comment: 'Des post-it décrivant les problèmes rencontrés et les pièces nécessitant une attention.'
    },
    {
        original: '/images/projects/reconditionnement/20240314_152031.jpg',
        description: 'Unité d’alimentation avec notes',
        comment: 'Notes manuscrites sur une unité d’alimentation indiquant des problèmes spécifiques et des tests.'
    }
];

const Reconditionnement = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Processus de Reconditionnement</h1>
                <p className="text-xl">Étapes et documentation pour la remise à neuf des équipements défectueux.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold underline decoration-wavy mb-6">Appareils Reconditionnés</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {appareilsReconditionnes.map((appareil, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                            <Image src={appareil.original} alt={appareil.description} width={500} height={300} layout="responsive" />
                            <h3 className="text-lg font-bold my-2">{appareil.description}</h3>
                            <p className="text-gray-700">{appareil.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reconditionnement;

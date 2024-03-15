import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const images = [
    {
        original: '/images/projects/brassage/1bai1.jpg',
        thumbnail: '/images/projects/brassage/1bai1.jpg',
        description: 'Panneau de brassage',
        comment: "Installation du panneau de brassage dans la baie, assurant la centralisation des connexions réseau de l'ensemble du bâtiment.",
    },
    {
        original: '/images/projects/brassage/2brs1.jpg',
        thumbnail: '/images/projects/brassage/2brs1.jpg',
        description: 'Panneau de brassage avec étiquettes',
        comment: 'Marquage et étiquetage des câbles pour une identification facile et une maintenance efficace.',
    },
    {
        original: '/images/projects/brassage/3eth.jpg',
        thumbnail: '/images/projects/brassage/3eth.jpg',
        description: 'Prises Ethernet murales',
        comment: "Installation des prises Ethernet murales pour faciliter l'accès au réseau dans différentes pièces.",
    },
    {
        original: '/images/projects/brassage/4ipconfig.PNG',
        thumbnail: '/images/projects/brassage/4ipconfig.PNG',
        description: 'Configuration IP de Windows',
        comment: 'Configuration des paramètres IP sur un poste de travail Windows pour assurer une connectivité réseau adéquate.',
    },
    {
        original: '/images/projects/brassage/baiebrassage11.jpg',
        thumbnail: '/images/projects/brassage/baiebrassage11.jpg',
        description: 'Baie de brassage ',
        comment: 'Baie de brassage montée pour la salle COD (cellule de crise).',
    },
    {
        original: '/images/projects/brassage/switchesbrassage12.jpg',
        thumbnail: '/images/projects/brassage/switchesbrassage12.jpg',
        description: 'Baie de brassage',
        comment: 'Baie de brassage montée pour la salle COD (cellule de crise).',
    },
];

const Brassage = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">{`Montage d'une baie de brassage`}</h1>
                <p className="text-xl">Mai - Septembre 2023</p>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold underline decoration-wavy mb-6">Description</h2>
                <p>{`Description détaillée du projet ici.`}</p>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold underline decoration-wavy mb-6">{`Travaux réalisés`}</h2>
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

export default Brassage;

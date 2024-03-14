import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const images = [
    {
        original: '/images/projects/brassage/1bai1.jpg',
        thumbnail: '/images/projects/brassage/1bai1.jpg',
        description: 'Panneau de brassage',
    },
    {
        original: '/images/projects/brassage/2brs1.jpg',
        thumbnail: '/images/projects/brassage/2brs1.jpg',
        description: 'Panneau de brassage avec étiquettes',
    },
    {
        original: '/images/projects/brassage/3eth.jpg',
        thumbnail: '/images/projects/brassage/3eth.jpg',
        description: 'Prises Ethernet murales',
    },
    {
        original: '/images/projects/brassage/4ipconfig.PNG',
        thumbnail: '/images/projects/brassage/4ipconfig.PNG',
        description: 'Configuration IP de Windows',
    },
];

const Brassage = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-8">{`Montage d'une baie de brassage`}</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p>{`Description`}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Durée du projet</h2>
                <p>Mai - Septembre 2023</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{`Galerie d'images`}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="mb-4">
                            <Image src={image.original} alt={image.description} width={1000} height={1000} className="w-full h-auto" />
                            <p className="text-center mt-2">{image.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Link href="/projets" legacyBehavior>
                &lt; Retour
            </Link>
        </div>
    );
};

export default Brassage;

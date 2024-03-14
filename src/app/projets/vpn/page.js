"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

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
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // This will only be true when running in the browser
        setIsClient(typeof window !== 'undefined');
    }, []);

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-8">{`Montage d'une baie de brassage`}</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p>
                    {`Gaming Explorer est un projet basé sur Next.JS qui propose un site
                        permettant aux utilisateurs de rechercher des jeux vidéo via l'API de Rawg.io.
                        L'application offre des fonctionnalités avancées telles qu'un compte utilisateur
                        permettant d'ajouter des jeux aux favoris et bien plus encore.`}
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Durée du projet</h2>
                <p>Mai - Septemebre 2023</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{`Galerie d'images`}</h2>
                {isClient && <ImageGallery items={images}/>}
            </section>

            <Link href="/projets" legacyBehavior>
                &lt; Retour
            </Link>
        </div>
    );
};

export default Brassage;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
    {
        original: '/images/projects/configvpn/1CertificatsVPN.PNG',
        thumbnail: '/images/projects/configvpn/1CertificatsVPN.PNG',
        description: 'Certificats VPN',
        comment: "Chargement et gestion des certificats nécessaires pour établir une connexion VPN sécurisée.",
    },
    {
        original: '/images/projects/configvpn/2DNSVIDE.PNG',
        thumbnail: '/images/projects/configvpn/2DNSVIDE.PNG',
        description: 'Configuration Réseau',
        comment: "Réglage des paramètres DNS et IP pour assurer la communication correcte à travers le VPN.",
    },
    {
        original: '/images/projects/configvpn/3vpn.PNG',
        thumbnail: '/images/projects/configvpn/3vpn.PNG',
        description: 'Statut de Connexion VPN',
        comment: "Confirmation visuelle de la connexion réussie au réseau de confiance via le VPN.",
    },
];

const vpn = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Configuration du VPN</h1>
                <p className="text-xl">Procédure de mise en place et vérification de la connexion VPN.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold underline decoration-wavy mb-6">Description</h2>
                <p>{`Procédure détaillée de configuration d'une connexion VPN pour sécuriser la communication réseau.`}</p>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold underline decoration-wavy mb-6">{`Étapes de configuration`}</h2>
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

export default vpn;
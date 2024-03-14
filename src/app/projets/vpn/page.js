import React from 'react';
import Link from 'next/link';

const images = [
    {
        original: '/images/projects/configvpn/1CertificatsVPN.PNG',
        thumbnail: '/images/projects/configvpn/1CertificatsVPN.PNG',
        description: 'Sélection de certificats VPN',
    },
    {
        original: '/images/projects/configvpn/2DNSVIDE.PNG',
        thumbnail: '/images/projects/configvpn/2DNSVIDE.PNG',
        description: 'Configuration DNS Vide',
    },
    {
        original: '/images/projects/configvpn/3vpn.PNG',
        thumbnail: '/images/projects/configvpn/3vpn.PNG',
        description: 'VPN Connecté',
    },
];

const vpn = () => {

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-8">{`Configuration VPN`}</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p>
                    {`Le processus de configuration VPN implique la sélection des certificats
                        appropriés et la configuration des paramètres réseau pour établir une
                        connexion sécurisée.`}
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{`Durée du projet`}</h2>
                <p>Mai - Septembre 2023</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{`Galerie d'images`}</h2>
            </section>

            <Link href="/projets" legacyBehavior>
                &lt; Retour
            </Link>

        </div>
    );
};

export default vpn;

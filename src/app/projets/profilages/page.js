import React from 'react';
import Image from 'next/image';
import Link from "next/link";

// Define your image data for NOEMI workstation setup here
const masterisationData = [
    {
        path: '/images/projects/profilage/20240314_151332.jpg',
        description: 'Checklist pour la masterisation de postes Noemi',
        comment: 'Une feuille de route détaillée pour la configuration standard des postes Noemi.'
    },
    {
        path: '/images/projects/profilage/20240314_162846.jpg',
        description: 'Ordinateur portable Dell prêt pour la masterisation',
        comment: 'Un ordinateur portable de marque Dell étiqueté et prêt pour la masterisation.'
    },
    {
        path: '/images/projects/profilage/20240314_162852.jpg',
        description: 'Processus de masterisation en cours',
        comment: 'Écran d’ordinateur affichant le processus de masterisation en cours d’exécution.'
    },
    {
        path: '/images/projects/profilage/Cryptage.png',
        description: 'Étape de cryptage du disque dur',
        comment: 'Instructions détaillées pour le cryptage du disque dur dans le cadre de la masterisation.'
    },
    {
        path: '/images/projects/profilage/Cryptageetdivers.png',
        description: 'Configuration du cryptage et réglages divers',
        comment: 'Paramètres supplémentaires et configurations de sécurité pour les postes de travail.'
    },
    {
        path: '/images/projects/profilage/importvpn1.png',
        description: 'Importation de configuration VPN',
        comment: 'Procédure d’importation des paramètres VPN pour un poste de travail.'
    },
    {
        path: '/images/projects/profilage/importvpn2.png',
        description: 'Finalisation de la configuration VPN',
        comment: 'Étapes finales pour s’assurer que la configuration VPN est correctement établie.'
    },
    {
        path: '/images/projects/profilage/1CertificatsVPN.PNG',
        description: 'Certificats VPN nécessaires',
        comment: 'Liste des certificats VPN nécessaires pour la masterisation d’un poste de travail Noemi.'
    },
    {
        path: '/images/projects/profilage/3vpn.PNG',
        description: 'Connexion VPN établie',
        comment: 'Confirmation visuelle qu’une connexion VPN a été correctement établie.'
    }
];

const MasterisationNoemi = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Masterisation des Postes Noemi</h1>
                <p className="text-xl">Processus de préparation et de déploiement des postes de travail Noemi.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {masterisationData.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                        <Image src={item.path} alt={item.description} width={500} height={300} layout="responsive"/>
                        <h3 className="text-lg font-bold my-2">{item.description}</h3>
                        <p className="text-gray-700">{item.comment}</p>
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

export default MasterisationNoemi;

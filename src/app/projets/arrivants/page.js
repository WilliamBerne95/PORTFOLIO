import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
    {
        original: '/images/projects/newarrivants/AD.PNG',
        description: 'Utilisateurs Active Directory',
        comment: 'Gestion des comptes utilisateurs et des permissions dans Active Directory.'
    },
    {
        original: '/images/projects/newarrivants/arboicasso.jpg',
        description: 'Arborescence des associations',
        comment: 'Visualisation de la structure des associations dans le système.'
    },
    {
        original: '/images/projects/newarrivants/BALF1.PNG',
        description: 'Boîtes aux lettres fonctionnelles',
        comment: 'Configuration des boîtes aux lettres fonctionnelles pour les utilisateurs.'
    },
    {
        original: '/images/projects/newarrivants/BALF2.PNG',
        description: 'Détails des boîtes aux lettres',
        comment: 'Affichage des propriétés spécifiques des boîtes aux lettres fonctionnelles.'
    },
    {
        original: '/images/projects/newarrivants/Creaboite mailOBM.PNG',
        description: 'Création d’une boîte mail OBM',
        comment: 'Procédure de création d’une nouvelle boîte mail dans OBM.'
    },
    {
        original: '/images/projects/newarrivants/CreationprofilGLPI.PNG',
        description: 'Création de profil dans GLPI',
        comment: 'Étape de création d’un profil utilisateur dans l’outil GLPI.'
    },
    {
        original: '/images/projects/newarrivants/droitsAD.png',
        description: 'Droits d’accès Active Directory',
        comment: 'Configuration des droits d’accès pour les répertoires de travail sur le serveur de fichiers.'
    },
    {
        original: '/images/projects/newarrivants/fichemob1.jpg',
        description: 'Fiche de mouvement du personnel - Page 1',
        comment: 'Première page du formulaire de mouvement du personnel.'
    },
    {
        original: '/images/projects/newarrivants/fichemob2.jpg',
        description: 'Fiche de mouvement du personnel - Page 2',
        comment: 'Seconde page du formulaire de mouvement du personnel, détaillant les moyens informatiques demandés.'
    },
    {
        original: '/images/projects/newarrivants/fichemob3.jpg',
        description: 'Fiche de mouvement du personnel - Page 3',
        comment: 'Troisième page du formulaire de mouvement du personnel, incluant les droits d’accès.'
    },
    {
        original: '/images/projects/newarrivants/GLPIticketnouvelarrivant3.PNG',
        description: 'Suivi de ticket GLPI pour un nouvel arrivant',
        comment: 'Suivi des étapes de traitement d’un ticket pour un nouvel arrivant dans GLPI.'
    },
    {
        original: '/images/projects/newarrivants/NOUVEL-ARRIVANTv4.jpg',
        description: 'Procédure pour un nouvel arrivant',
        comment: 'Document détaillant les étapes de configuration pour un nouvel arrivant.'
    },
    {
        original: '/images/projects/newarrivants/profilAD.png',
        description: 'Propriétés de profil dans Active Directory',
        comment: 'Modification des propriétés d’un utilisateur dans Active Directory.'
    }
];

const NouveauxArrivants = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Accueil des Nouveaux Arrivants</h1>
                <p className="text-xl">Documentation et procédures d'intégration des nouveaux membres du personnel.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold underline decoration-wavy mb-6">Processus d'Intégration</h2>
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
                    <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour aux procédures</a>
                </Link>
            </div>
        </div>
    );
};

export default NouveauxArrivants;

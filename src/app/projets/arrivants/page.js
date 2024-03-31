"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const images = [
    {
        path: '/images/projects/newarrivants/AD.PNG',
        description: 'Utilisateurs Active Directory',
        comment: 'Gestion des comptes utilisateurs et des permissions dans Active Directory.'
    },
    {
        path: '/images/projects/newarrivants/arboicasso.jpg',
        description: 'Arborescence des associations',
        comment: 'Visualisation de la structure des associations dans le système.'
    },
    {
        path: '/images/projects/newarrivants/BALF1.PNG',
        description: 'Boîtes aux lettres fonctionnelles',
        comment: 'Configuration des boîtes aux lettres fonctionnelles pour les utilisateurs.'
    },
    {
        path: '/images/projects/newarrivants/BALF2.PNG',
        description: 'Détails des boîtes aux lettres',
        comment: 'Affichage des propriétés spécifiques des boîtes aux lettres fonctionnelles.'
    },
    {
        path: '/images/projects/newarrivants/Creaboite mailOBM.PNG',
        description: 'Création d’une boîte mail OBM',
        comment: 'Procédure de création d’une nouvelle boîte mail dans OBM.'
    },
    {
        path: '/images/projects/newarrivants/CreationprofilGLPI.PNG',
        description: 'Création de profil dans GLPI',
        comment: 'Étape de création d’un profil utilisateur dans l’outil GLPI.'
    },
    {
        path: '/images/projects/newarrivants/droitsAD.png',
        description: 'Droits d’accès Active Directory',
        comment: 'Configuration des droits d’accès pour les répertoires de travail sur le serveur de fichiers.'
    },
    {
        path: '/images/projects/newarrivants/fichemob1.jpg',
        description: 'Fiche de mouvement du personnel - Page 1',
        comment: 'Première page du formulaire de mouvement du personnel.'
    },
    {
        path: '/images/projects/newarrivants/fichemob2.jpg',
        description: 'Fiche de mouvement du personnel - Page 2',
        comment: 'Seconde page du formulaire de mouvement du personnel, détaillant les moyens informatiques demandés.'
    },
    {
        path: '/images/projects/newarrivants/fichemob3.jpg',
        description: 'Fiche de mouvement du personnel - Page 3',
        comment: 'Troisième page du formulaire de mouvement du personnel, incluant les droits d’accès.'
    },
    {
        path: '/images/projects/newarrivants/GLPIticketnouvelarrivant3.PNG',
        description: 'Suivi de ticket GLPI pour un nouvel arrivant',
        comment: 'Suivi des étapes de traitement d’un ticket pour un nouvel arrivant dans GLPI.'
    },
    {
        path: '/images/projects/newarrivants/NOUVEL-ARRIVANTv4.jpg',
        description: 'Procédure pour un nouvel arrivant',
        comment: 'Document détaillant les étapes de configuration pour un nouvel arrivant.'
    },
    {
        path: '/images/projects/newarrivants/profilAD.png',
        description: 'Propriétés de profil dans Active Directory',
        comment: 'Modification des propriétés d’un utilisateur dans Active Directory.'
    }
];

const NouveauxArrivants = () => {
    const [zoomedItem, setZoomedItem] = useState(null);
    const [animation, setAnimation] = useState('zoomIn');

    const closeZoom = () => {
        setAnimation('zoomOut');
        setTimeout(() => {
            setZoomedItem(null);
        }, 300);
    };

    useEffect(() => {
        if (zoomedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [zoomedItem]);

    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Accueil
                    des Nouveaux Arrivants</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-secondary-300">{`Documentation et procédures d'intégration des nouveaux membres du personnel.`}</p>
            </div>

            <div
                className="bg-gray-900 text-secondary-300 font-mono text-base sm:text-lg md:text-xl overflow-y-scroll p-6 my-6"
                style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString('<span class="text-primary-500 text-3xl">Responsable du projet :</span><br>BERNE William et le reste de l\'équipe SIDSIC<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Description :</span><br>')
                            .typeString("L'accueil des nouveaux arrivants consiste à préparer et à intégrer efficacement les nouveaux membres du personnel au sein de l'organisation. Cela inclut la création de leurs comptes utilisateurs, l'assignation des permissions nécessaires, la configuration de leur espace de travail numérique, et la fourniture des informations nécessaires pour leur bonne intégration. L'objectif est d'assurer une transition fluide pour les nouveaux employés et de les rendre rapidement opérationnels.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Outils et plateformes utilisés :</span><br>')
                            .typeString("• Active Directory pour la gestion des comptes utilisateurs<br>")
                            .typeString("• GLPI pour le suivi des demandes<br>")
                            .typeString("• OBM pour la création des boîtes mail<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Date de réalisation :</span><br>10/02/2023 au 01/03/2024')
                            .start();
                    }}
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((item, index) => (
                    <div key={index}
                         className="relative cellule bg-white rounded-lg shadow-lg overflow-hidden p-4 cursor-pointer h-auto md:h-96 lg:h-80 transform hover:scale-105 transition-transform duration-300"
                         onClick={() => setZoomedItem(item)}>
                        <Image
                            src={item.path}
                            alt={item.description}
                            width={500}
                            height={300}
                            layout="responsive"
                            className="object-cover object-center w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                            <h3 className="text-lg font-bold text-white"
                                style={{textShadow: '0 0 3px black'}}>{item.description}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {zoomedItem && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 ${animation}`}
                    onClick={closeZoom}>
                    <div className="bg-white p-4 max-w-3xl max-h-full overflow-auto"
                         onClick={(e) => e.stopPropagation()}
                         style={{animation: 'zoomIn 0.3s forwards'}}>
                        <Image
                            src={zoomedItem.path}
                            alt={zoomedItem.description}
                            width={800}
                            height={450}
                            layout="responsive"
                            onClick={closeZoom}
                        />
                        <h3 className="text-lg font-bold my-2">{zoomedItem.description}</h3>
                        <p className="text-gray-700">{zoomedItem.comment}</p>
                    </div>
                </div>
            )}

            <div className="text-center mt-12">
                <Link legacyBehavior={true} href="/projets">
                    <a className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour
                        aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default NouveauxArrivants;
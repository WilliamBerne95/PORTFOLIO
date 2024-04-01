"use client";
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from "next/link";
import {ReaCard} from "@/components/ReaCard";


// Define your image data for NOEMI workstation setup here
const images = [
    {
        path: '/images/projects/profilage/1CertificatsVPN.PNG',
        description: 'Import de certificats VPN',
        comment: 'Liste des certificats VPN nécessaires pour la masterisation d’un poste de travail Noemi.'
    },
    {
        path1: '/images/projects/profilage/importvpn1.png',
        path2: '/images/projects/profilage/importvpn2.png',
        description: 'Importation de configuration VPN',
        comment: 'Procédure d’importation des paramètres VPN pour un poste de travail.'
    },
    {
        path: '/images/projects/profilage/3vpn.PNG',
        description: 'Connexion VPN établie',
        comment: 'Confirmation visuelle qu’une connexion VPN a été correctement établie.'
    },
    {
        path1: '/images/projects/profilage/20240314_162852.jpg',
        path2: '/images/projects/profilage/20240314_162846.jpg',
        description: 'Ordinateur portable Dell prêt pour la masterisation',
        comment: 'Ordinateur affichant le processus de mise à jour de Trellix. Sur la deuxieme image, un ordinateur portable de marque Dell étiqueté et prêt pour la masterisation.'
    },
    {
        path: '/images/projects/profilage/20240314_151332.jpg',
        description: 'Feuille de suivi pour la masterisation de postes Noemi',
        comment: 'Une feuille de route détaillée pour la configuration des postes Noemi.'
    },
    {
        path1: '/images/projects/profilage/Cryptage.png',
        path2: '/images/projects/profilage/Cryptageetdivers.png',
        description: 'Étapes de cryptage du disque dur',
        comment: 'Instructions détaillées pour le cryptage du disque dur dans le cadre de la masterisation.'
    },
    {
        path1: '/images/projects/profilage/FinaliserunNOEMIDDI_page-0001.jpg',
        path2: '/images/projects/profilage/FinaliserunNOEMIDDI_page-0002.jpg',
        path3: '/images/projects/profilage/FinaliserunNOEMIDDI_page-0003.jpg',
        path4: '/images/projects/profilage/FinaliserunNOEMIDDI_page-0004.jpg',
        path5: '/images/projects/profilage/FinaliserunNOEMIDDI_page-0005.jpg',
        path6: '/images/projects/profilage/FinaliserunNOEMIDDI_page-0006.jpg',
        path7: '/images/projects/profilage/FinaliserunNOEMIDDI_page-0007.jpg',
        description: 'Finaliser un Noemi',
        comment: 'Demarches pour finaliser la masterisation d\'un poste Noemi.'
    },
    {
        path: '/images/projects/profilage/sacocheaccessoires.jpg',
        description: 'Sacoche et accessoires',
        comment: 'Cette sacoche sera fourni avec le chargeur et la souris au demandeur de poste Noemi.'
    },

];

const MasterisationNoemi = () => {
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
                <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Masterisation
                    des Postes Noemi</h1>
                <p className="text-xl lg:text-2xl text-secondary-300">
                    Processus de préparation et de déploiement des postes de travail Noemi.
                </p>
            </div>

            <div
                className="bg-gray-900 text-secondary-300 font-mono text-base sm:text-lg md:text-xl overflow-y-scroll p-6 my-6"
                style={{height: '45vh'}}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString('<span class="text-primary-500 text-3xl">Taches effectuées par :</span><br>BERNE William et l\'ensemble de l\'équipe SIDSIC<br><br>')
                            .typeString('<span class="text-primary-500 text-3xl">Description :</span><br>')
                            .typeString("Le profilage de postes Noemi englobe le processus méticuleux de configuration et de personnalisation de stations de travail pour répondre aux besoins spécifiques des utilisateurs dans un environnement professionnel. Ce processus inclut la masterisation de systèmes d'exploitation, l'installation de logiciels nécessaires, le cryptage de disques durs pour la sécurité des données, ainsi que la configuration de connexions VPN pour un accès sécurisé à distance. Chaque poste est également équipé d'accessoires essentiels et passe par une série de vérifications et de tests pour s'assurer de sa conformité avec les standards de l'organisation et sa préparation optimale pour le demandeur. Ce processus vise à fournir un environnement de travail efficient, sécurisé, et adapté aux tâches spécifiques de chaque utilisateur.<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Outils et étapes :</span><br>')
                            .typeString("• Trellix Endpoint Security comme anti-virus<br>")
                            .typeString("• Configuration VPN<br>")
                            .typeString("• Cryhod pour le cryptage des disques<br><br>")
                            .typeString('<span class="text-primary-500 text-3xl">Dates :</span><br>10/01/2024 au 12/01/2024')
                            .start();
                    }}
                />
            </div>

            <ReaCard images={images} />

            <div className="text-center mt-12">
                <Link href="/projets" legacyBehavior={true}>
                    <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Retour aux projets</a>
                </Link>
            </div>
        </div>
    );
};

export default MasterisationNoemi;

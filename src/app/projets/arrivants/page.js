"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import {ReaCard} from "@/components/ReaCard";

const images = [
    {
        path1: '/images/projects/newarrivants/fichemob1.jpg',
        path2: '/images/projects/newarrivants/fichemob2.jpg',
        path3: '/images/projects/newarrivants/fichemob3.jpg',
        description: 'Fiche mobilité du personnel',
        comment: 'Formulaire de mouvement du personnel.'
    },
    {
        path: '/images/projects/newarrivants/GLPIticketnouvelarrivant3.PNG',
        description: 'Suivi de ticket GLPI pour un nouvel arrivant',
        comment: 'Suivi des étapes de traitement d’un ticket pour un nouvel arrivant dans GLPI.'
    },
    {
        path: '/images/projects/newarrivants/AD.PNG',
        description: 'Utilisateurs Active Directory',
        comment: 'Gestion des comptes utilisateurs et des permissions dans Active Directory.'
    },
    {
        path: '/images/projects/newarrivants/profilAD.png',
        description: 'Propriétés de profil dans Active Directory',
        comment: 'Modification des propriétés d’un utilisateur dans Active Directory.'
    },
    {
        path: '/images/projects/newarrivants/droitsAD.png',
        description: 'Droits d’accès Active Directory',
        comment: 'Configuration des droits d’accès pour les répertoires de travail sur le serveur de fichiers.'
    },
    {
        path: '/images/projects/newarrivants/CreationprofilGLPI.PNG',
        description: 'Création de profil dans GLPI',
        comment: 'Étape de création d’un profil utilisateur dans l’outil GLPI.'
    },
    {
        path: '/images/projects/newarrivants/Creaboite mailOBM.PNG',
        description: 'Création d’une boîte mail OBM',
        comment: 'Procédure de création d’une nouvelle boîte mail dans OBM.'
    },
    {
        path: '/images/projects/newarrivants/arboicasso.jpg',
        description: 'Arborescence des associations',
        comment: 'Visualisation de la structure des associations dans le système via l\'arborescence ICASSO.'
    },
    {
        path: '/images/projects/newarrivants/BALF2.PNG',
        description: 'Ajout des boîtes aux lettres fonctionnelles',
        comment: 'Affichage des propriétés spécifiques des boîtes aux lettres fonctionnelles.'
    },
    {
        path: '/images/projects/newarrivants/BALF1.PNG',
        description: 'Boîtes aux lettres fonctionnelles',
        comment: 'Configuration des boîtes aux lettres fonctionnelles pour les utilisateurs.'
    },
    {
        path: '/images/projects/newarrivants/NOUVEL-ARRIVANTv4.jpg',
        description: 'Procédure pour un nouvel arrivant',
        comment: 'Document détaillant les étapes de configuration pour un nouvel arrivant.'
    },

];

const NouveauxArrivants = () => {

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

            <ReaCard images={images}/>

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
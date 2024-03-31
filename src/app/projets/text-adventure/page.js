"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";

const textAdventuresData = [
    {
        path: '/images/projects/textadventures/extraittextadv.PNG',
        description: 'Extrait de Gameplay',
        comment: 'Un extrait du gameplay de TextAdventures montrant l\'interface utilisateur dans le terminal.'
    },
    {
        path: '/images/projects/textadventures/extraittextadvjeu.PNG',
        description: 'Action de Gameplay',
        comment: 'Une partie du jeu où le joueur choisit une action, démontrant la nature interactive de TextAdventures.'
    },
];

const TextAdventures = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Text Adventures Game</h1>
                <p className="text-xl">Explore the narrative world and make choices in TextAdventures.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {textAdventuresData.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                        <Image src={item.path} alt={item.description} width={500} height={300} layout="responsive"/>
                        <h3 className="text-lg font-bold my-2">{item.description}</h3>
                        <p className="text-gray-700">{item.comment}</p>
                    </div>
                ))}
            </div>
            {/* You can add navigation or any other interactive elements below */}
            <div className="text-center mt-12">
                <Link legacyBehavior={true} href="/projets">
                    <a className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Return to Projects</a>
                </Link>
            </div>
        </div>
    );
};

export default TextAdventures;

import React from "react";

const TextAdventure = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-8">Présentation de EasyLine</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p>
                    Gaming Explorer est un projet basé sur Next.JS qui propose un site
                    permettant aux utilisateurs de rechercher des jeux vidéo via l'API de Rawg.io.
                    L'application offre des fonctionnalités avancées telles qu'un compte utilisateur
                    permettant d'ajouter des jeux aux favoris et bien plus encore.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Propriétaire du projet</h2>
                <p>William</p>
            </section>


            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Durée du projet</h2>
                <p>Mai - Septemebre 2023</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
                <ul className="list-disc pl-6">
                    <li>Java</li>
                    <li>Google Firebase</li>
                    <li>Tailwind CSS</li>
                    <li>Vercel</li>
                </ul>
            </section>
        </div>
    );
};

export default TextAdventure;
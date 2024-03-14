import React from "react";
import Link from 'next/link';
const Rugby = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-8">Présentation de Rugby</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p>
                    {`Il s'agit d'une application mobile développée en Django pour générer les matchs de Rugby avec un système de billet`}
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Objectifs</h2>
                <p>
                    {`Créer une interface distincte pour le scanner de billets et les données relatives au rugby. Mettre en place
                        un ORM Django pour effectuer les requêtes d'API et exploiter les informations des matchs stockées dans la
                        base de données afin de générer les billets`}
                </p>
            </section>


            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Propriétaire du projet</h2>
                <p>William</p>
            </section>


            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Durée du projet</h2>
                <p>Septembre - Décembre 2023</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
                <ul className="list-disc pl-6">
                    <li>Django</li>
                </ul>
            </section>
            <Link href="/projets" legacyBehavior>
                &lt; Retour
            </Link>
        </div>
    );
};

export default Rugby;
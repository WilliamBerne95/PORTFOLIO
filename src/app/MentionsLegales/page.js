import React from "react";

const Mentionslegales = () => {
    return (
        <div className="container mx-auto mt-12 text-white">
            <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>

            {/* Section for the legal notice header */}
            <p className="mb-4">En vigueur au 01/03/2024</p>

            {/* Legal dispositions section */}
            <p>
                Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004
                pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des
                utilisateurs et visiteurs, ci-après l'"Utilisateur", du site https://www.eliawu.fr, ci-après le "Site", les
                présentes mentions légales.
            </p>
            <p>
                La connexion et la navigation sur le Site par l'Utilisateur implique acceptation intégrale et sans
                réserve des présentes mentions légales.
            </p>
            <p>
                Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».
            </p>

            {/* Editor section */}
            <h2 className="text-2xl font-bold mt-6 mb-4">ARTICLE 1 - L'ÉDITEUR</h2>
            <p>
                L'édition et la direction de la publication du Site est assurée par William Berne, domicilié
                10 rue des Tournelles, 78510 TRIEL-SUR-SEINE, dont le numéro de téléphone est 07 86 13 97 16, et l'adresse
                e-mail william.berne@outlook.com. Ci-après "l'Éditeur".
            </p>

            {/* Hosting section */}
            <h2 className="text-2xl font-bold mt-6 mb-4">ARTICLE 2 - L'HÉBERGEUR</h2>
            <p>
                L'hébergeur du Site est la société OVH Cloud, dont le siège social est situé au 2 rue Kellermann,
                59100 Roubaix, avec le numéro de téléphone : 09 72 10 10 07.
            </p>

            {/* Access to the site section */}
            <h2 className="text-2xl font-bold mt-6 mb-4">ARTICLE 3 - ACCES AU SITE</h2>
            <p>
                Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption
                programmée ou non et pouvant découler d'une nécessité de maintenance.
            </p>
            <p>
                En cas de modification, interruption ou suspension du Site, l'Éditeur ne saurait être tenu responsable.
            </p>

            {/* Data collection section */}
            <h2 className="text-2xl font-bold mt-6 mb-4">ARTICLE 4 - COLLECTE DES DONNEES</h2>
            <p>
                Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL)
                dans la mesure où il ne collecte aucune donnée concernant les utilisateurs.
            </p>
            <p>
                Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du
                site, sans autorisation de l'Éditeur est prohibée et pourra entraîner des actions et poursuites
                judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
            </p>

            {/* Continue with other articles as necessary */}
        </div>
    );
};

export default Mentionslegales;

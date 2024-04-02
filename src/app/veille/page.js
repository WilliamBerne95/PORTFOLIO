"use client";
import React, { useState, useRef, useEffect } from "react";
import VeilleCard from "./VeilleCard";
import Popup from '../../components/Popup'; // Assure-toi d'ajuster le chemin d'importation selon ton organisation de fichiers
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const articlesData = [
    {
        id: 1,
        title: "Radeon RX Vega ou RX 500 Series sous Windows : AMD va-t-il les abandonner ?",
        description: "",
        image: "/images/veille/5.jpg",
        tag: ["All", "Hardware"],
        articleUrl: "https://www.ginjfo.com/actualites/composants/cartes-graphiques/radeon-rx-vega-ou-rx-500-series-sous-windows-amd-va-t-il-les-abandonner-20231026",
        rating: 3,
        date: new Date(2023, 10, 26), // 26/10/2023
        summary: "L'article souligne l'incertitude des joueurs utilisant des cartes graphiques Radeon RX Vega ou RX 500 series quant à l'avenir du support des drivers sous Windows par AMD. Bien qu'AMD ait déplacé ces solutions vers les pilotes graphiques Adrenalin pour Windows en septembre, elles n'ont pas reçu de mises à jour depuis. Alors que le support pour les architectures Vega et Polaris a été arrêté sur Linux, aucune annonce n'a été faite pour Windows. Cette situation inquiète les utilisateurs car l'absence de mises à jour pourrait entraîner des problèmes d'optimisation dans les jeux et les logiciels, malgré le soutien de certaines technologies récentes comme FidelityFX Super Resolution 3.0 pour la Radeon RX 590.",
    },
    {
        id: 2,
        title: "Radeon Vega et Polaris : AMD ralentit les mises à jour des pilotes graphiques",
        description: "",
        image: "/images/veille/6.jpg",
        tag: ["All", "Hardware"],
        articleUrl: "https://www.ginjfo.com/actualites/composants/cartes-graphiques/radeon-vega-et-polaris-amd-ralentit-les-mises-a-jour-des-pilotes-graphiques-20231109",
        rating: 3,
        date: new Date(2023, 11, 9),
        summary: "AMD ralentit le développement des pilotes graphiques pour les anciennes générations de cartes graphiques, notamment celles antérieures à la série des Radeon RX 5000. Les utilisateurs des cartes graphiques avec des GPU des architectures \"Vega\" ou \"Polaris\" doivent s'attendre à des mises à jour moins fréquentes. Cependant, les séries plus récentes, comme les RX 5000, RX 6000 et RX 7000, continueront à bénéficier d'une maintenance soutenue avec des mises à jour régulières. Cette décision n'est pas surprenante, car AMD a déjà séparé ses pilotes graphiques pour les GPU RDNA des générations plus anciennes. Les utilisateurs des séries \"Polaris\" et \"Vega\" recevront toujours des mises à jour critiques, mais moins fréquentes, avec un package de pilotes distinct.\n",
    },
    {
        id: 3,
        title: "Be Quiet! lance des alimentations ATX 3.0 grand public et sa première pâte thermique métal liquide",
        description: "",
        image: "/images/veille/7.jpg",
        tag: ["All", "Hardware"],
        articleUrl: "https://www.tomshardware.fr/be-quiet-lance-des-alimentations-atx-3-0-grand-public-et-sa-premiere-pate-thermique-metal-liquide/",
        rating: 5,
        date: new Date(2023, 1, 25),
        summary: "Be Quiet! lance les alimentations Pure Power 12 M, certifiées ATX 3.0 jusqu'à 1000 W, et les pâtes thermiques DC2 et DC2 Pro, cette dernière étant la première pâte thermique métal liquide de la marque. Les Pure Power 12 M sont modulaires et certifiées 80+ Gold, tandis que les pâtes thermiques offrent des conductivités thermiques respectives de 7,5 W/mK et 80 W/mK. Disponibles à partir du 7 février, les prix vont de 7,90 euros à 11,90 euros.",
    },
    {
        id: 4,
        title: "Radeon RX 8000 : attendez-vous à une gamme incomplète et très clairsemée",
        description: "Source : tomshardware",
        image: "/images/veille/8.jpg",
        tag: ["All", "Hardware"],
        articleUrl: "https://www.tomshardware.fr/radeon-rx-8000-attendez-vous-a-une-gamme-incomplete-et-tres-clairsemee/",
        rating: 2,
        date: new Date(2023, 9, 14),
        summary: "La gamme Radeon RX 8000 pourrait être incomplète et peu abondante, avec la majeure partie de la production d'AMD allouée à des produits destinés aux centres de données. Cette priorité pourrait affecter les Radeon RX 8000, qui pourraient être en nombre limité. Il y a des spéculations sur l'absence d'un GPU Big Navi RDNA 4, mais cela ne signifie pas nécessairement l'absence de la Radeon RX 8900. Il est possible qu'AMD opte pour des solutions MCM avec plusieurs GPU moins complexes. Cette décision pourrait résulter de contraintes de production chez TSMC, où AMD donne la priorité à d'autres produits comme les FPGA et les GPGPU. NVIDIA a également réalloué une partie de sa production de GeForce vers les GPU H100, ce qui pourrait entraîner des réorganisations similaires chez AMD et NVIDIA dans les gammes de produits à venir.\n",
    },
    {
        id: 5,
        title: `AMD championne de la longévité : vieilles cartes mères d'il y a 7 ans toujours mises à jour`,
        description: "",
        image: "/images/veille/9.jpg",
        tag: ["All", "Hardware"],
        articleUrl: "https://www.tomshardware.fr/amd-championne-de-la-longevite-de-vieilles-cartes-meres-dil-y-a-7-ans-toujours-mises-a-jour/",
        rating: 4,
        date: new Date(2023, 10, 10),
        summary: "AMD maintient la longévité de ses cartes mères AM4 avec des mises à jour BIOS, dépassant largement les cinq ans de support initialement promis. Les cartes mères série 300 reçoivent encore des mises à jour, alors que chez Intel, les plateformes série 300 n'ont plus été mises à jour depuis 2021. Cette longévité témoigne de l'engagement d'AMD envers ses utilisateurs, avec des cartes mères pouvant toujours accueillir les nouveaux processeurs Ryzen. Lisa Su a également promis une longue durée de vie pour la future plateforme AM5.",
    },
    {
        id: 6,
        title: "Intel commence à tester ses GPU Battlemage : davantage de broches pour plus de puissance",
        description: "",
        image: "/images/veille/10.jpg",
        tag: ["All", "Hardware"],
        articleUrl: "https://www.tomshardware.fr/intel-commence-a-tester-ses-gpu-battlemage-davantage-de-broches-pour-plus-de-puissance/",
        rating: 3,
        date: new Date(2023, 8, 16),
        summary: "Intel a commencé à tester ses GPU Battlemage, dotés de davantage de broches pour plus de puissance. Ces GPU représentent une avancée majeure pour Intel dans le domaine des graphiques dédiés. Les broches supplémentaires permettent d'augmenter la puissance et les performances des cartes graphiques, ce qui pourrait être crucial pour concurrencer les offres d'AMD et de NVIDIA sur le marché. Cette étape de test marque une progression significative dans le développement des GPU Intel Battlemage.",
    },
];

const VeilleHardware = () => {
    const [tag, setTag] = useState("All");
    const [sortByDate, setSortByDate] = useState(false);
    const [sortByRating, setSortByRating] = useState(false);
    const [sortDirection, setSortDirection] = useState("asc");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveringTitle, setIsHoveringTitle] = useState(false);
    const [definitionVisible, setDefinitionVisible] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const openPopup = (article) => {
        setSelectedArticle(article);
        setPopupOpen(true);
    };


    const closePopup = () => {
        setPopupOpen(false);
        setSelectedArticle(null);
    };

    useEffect(() => {
        if (isHoveringTitle) {
            setDefinitionVisible(true);
        } else {
            setDefinitionVisible(false);
        }
    }, [isHoveringTitle]);

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const handleSortByDate = () => {
        setSortByDate(!sortByDate);
        setSortDirection(sortByDate ? "asc" : "desc");
    };

    const handleSortByRating = () => {
        setSortByRating(!sortByRating);
        setSortDirection(sortByRating ? "asc" : "desc");
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnterTitle = () => {
        setIsHoveringTitle(true);
    };

    const handleMouseLeaveTitle = () => {
        setIsHoveringTitle(false);
    };

    const filteredArticles = articlesData
        .filter((article) => article.tag.includes(tag));

    let sortedArticles = [...filteredArticles];

    if (sortByDate) {
        sortedArticles = sortedArticles.sort((a, b) => {
            return sortByDate
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date);
        });
    }

    if (sortByRating) {
        sortedArticles = sortedArticles.sort((a, b) => b.rating - a.rating);
    }

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    const titleVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    const definitionVariants = {
        hidden: { y: -60, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: -60, opacity: 0 }
    };

    return (
        <section id="veille">
            <motion.h1
                className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={titleVariants}
                onMouseEnter={handleMouseEnterTitle}
                onMouseLeave={handleMouseLeaveTitle}
            >
                Veille Hardware
            </motion.h1>

            <motion.p
                className="text-white text-lg mb-8 definition"
                variants={definitionVariants}
                initial="hidden"
                animate="visible" // Changed this line
                exit="exit"
                transition={{duration: 1}}
            >
                {`Le matériel informatique, aussi appelé "hardware", désigne l'ensemble
      des composants physiques d'un système informatique. Cela englobe les
      éléments tels que les processeurs, les cartes graphiques, la mémoire,
      les disques durs, les alimentations, etc. Le matériel constitue la
      base physique sur laquelle les logiciels s'exécutent. Ma veille
      consiste à surveiller les évolutions, les nouveautés et les
      informations importantes liées à ces composants.`}
            </motion.p>

            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <button
                    className={`${
                        sortByDate
                            ? "text-white border-primary-500"
                            : "text-[#ADB7BE] border-slate-600 hover:border-white"
                    } rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
                    onClick={handleSortByDate}
                >
                    Trier par date
                </button>
                <button
                    className={`${
                        sortByRating
                            ? "text-white border-primary-500"
                            : "text-[#ADB7BE] border-slate-600 hover:border-white"
                    } rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
                    onClick={handleSortByRating}
                >
                    Trier par note
                </button>
            </div>

            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {sortedArticles.map((article, index) => (
                    <motion.li
                        key={article.id} // Utiliser article.id comme key ici est préférable
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.1
                        }} // Le délai pourrait être trop long avec index * 0.4
                    >
                        <VeilleCard
                            article={article} // Passer l'objet article entier
                            openPopup={() => openPopup(article)} // Passer la fonction openPopup
                        />
                    </motion.li>
                ))}
            </ul>
            <Popup isOpen={popupOpen} closePopup={closePopup} article={selectedArticle}/>
        </section>
    );
};

export default VeilleHardware;
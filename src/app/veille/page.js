"use client";
import React, { useState, useRef, useEffect } from "react";
import VeilleCard from "./VeilleCard";
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
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <VeilleCard
                            key={article.id}
                            title={article.title}
                            description={article.description}
                            image={article.image}
                            articleUrl={article.articleUrl}
                            rating={article.rating}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default VeilleHardware;
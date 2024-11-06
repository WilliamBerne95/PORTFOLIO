"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Compétences",
        id: "competences",
        content: (
            <ul className="list-disc pl-2">
                <li>Next.js</li>
                <li>Python</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Django</li>
                <li>MySQL</li>
                <li>Linux</li>
            </ul>
        ),
    },
    {
        title: "parcours",
        id: "parcours",
        content: (
            <ul className="list-disc pl-2">
                <li>2018 - BAC STI2D option ITEC à Lycée Jules Verne, Cergy-le-Haut (95800)</li>
                <li>2020 - BTS Aquaculture au Lycée agricole de Coulogne, Coulogne (62137)</li>
                <li>2022 - BTS SIO option SLAM à l&apos;ESIEE-IT, Pontoise (95300)</li>
                <li>2024 - Bachelor L3 spécialisé en développement à l&apos;ESIEE-IT, Pontoise (95300)</li>
            </ul>
        ),
    },
];

function AboutSection() {
    const [age, setAge] = useState(23);
    const [tab, setTab] = useState("competences");

    useEffect(() => {
        const calculateAge = () => {
            const birthday = new Date('2000-06-27');
            const currentDate = new Date();
            const diff = Math.abs(currentDate - birthday);
            const ageInYears = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
            setAge(ageInYears);
        };

        calculateAge();
        const interval = setInterval(calculateAge, 1000 * 60 * 60 * 24); // Update daily

        return () => clearInterval(interval);
    }, []);

    const handleTabChange = (newTab) => {
        setTab(newTab);
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/bluecomputer.png" alt="Ordinateur bleu représentant la technologie" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">A propos de Moi 👨🏽‍💻</h2>
                    <p className="text-base lg:text-lg">
                        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>William Berne ({age} ans)</span>
                        <br />
                        <h3>
                            {`Depuis toujours passionné par l&apos;informatique, j&apos;ai constamment cherché à en apprendre davantage. 
                            Mon intérêt prolongé dans ce domaine m&apos;a conduit à développer un faible pour le hardware. 
                            À l&apos;âge de 14 ans, j&apos;ai assemblé mon premier ordinateur de manière autonome, 
                            et dès mes 11 ans, j&apos;ai collaboré avec deux amis pour coder en Python un jeu de course 3D via Blender.`}
                        </h3>
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("competences")}
                            active={tab === "competences"}
                        >
                            {" "}
                            Compétences{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("parcours")}
                            active={tab === "parcours"}
                        >
                            {" "}
                            Parcours{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
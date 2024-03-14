"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Modal from "react-modal";

const HeroSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/images/PDF/CVWilliamBerne2023.pdf';
        link.download = 'CVWilliamBerne2023.pdf';
        link.click();
    };

    const openPdfInNewTab = (pdfUrl) => {
        window.open(pdfUrl, "_blank");
    };

    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="bg-neutral-900 rounded-xl p-5 text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold overflow-hidden">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-secondary-900">
                Bonjour, je suis{" "}
            </span>
                        <br></br>
                        <div style={{ height: "3em", maxWidth: "6em" }}>
                            <TypeAnimation
                                sequence={[
                                    "William",
                                    1000,
                                    "Développeur web",
                                    1000,
                                    "Développeur d'applications",
                                    1000,
                                    "Étudiant à l'ESIEE-IT",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                style={{ color: "#ADB7BE" }}
                                className={'text-center'}
                            />
                        </div>
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Bienvenue sur mon Portfolio ! &#x1F603;
                    </p>
                    <div>
                        <div
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                            onClick={openModal}
                        >
                            Certifications mooc
                        </div>
                        <button
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                            onClick={handleDownload}
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Télécharger mon CV
                            </span>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <div className="backdrop-blur-lg absolute top-0 left-0 w-full h-full rounded-full filter blur-lg bg-gradient-to-br from-primary-950 to-secondary-950"></div>
                        <Image
                            src="/images/IA.gif"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={{
                        content: {
                            width: "60%",
                            height: "40%",
                            margin: "auto",
                            backgroundColor: "#333333",
                            borderRadius: "8px",
                            padding: "20px",
                        },
                        overlay: {
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                        },
                    }}
                >
                    <div className="text-center">
                        <h2>Certifications mooc</h2>
                        <p>
                            <button
                                className="bg-gradient-to-br from-primary-500 to-secondary-500 px-4 py-2 text-white rounded-full mt-4"
                                onClick={() => openPdfInNewTab("/images/PDF/Certificat1_.pdf")}
                            >
                                MOOC 1
                            </button>
                        </p>
                    </div>
                </Modal>
            </div>
        </section>
    );
};

export default HeroSection;

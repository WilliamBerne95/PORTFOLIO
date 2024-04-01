"use client";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Entreprise",
    path: "/entreprise",
  },
  {
    title: "Réalisations",
    path: "/projets",
  },
  {
    title: "Veille",
    path: "/veille",
  },
  {
    title: "Bilan",
    path: "/bilan",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    // Cette fonction vérifie si le clic a eu lieu sur un lien et ferme la navbar
    const handleLinkClick = (event) => {
      if (event.target.closest('a')) {
        setNavbarOpen(false);
      }
    };

    if (navbarOpen) {
      window.addEventListener('click', handleLinkClick);
    }

    // Nettoie l'événement lors du démontage ou si la navbar est fermée
    return () => window.removeEventListener('click', handleLinkClick);
  }, [navbarOpen]);

  // Fonction pour basculer l'état de la navbar
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Fonction pour fermer la navbar
  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
      <nav className="fixed inset-x-0 top-0 z-10 border-b border-gray-800 backdrop-filter backdrop-blur-md"
           style={{background: 'linear-gradient(to bottom, rgba(30, 20, 67, 0.95), rgba(58, 58, 58, 0))'}}>
        <div className="container flex items-center justify-between px-4 py-2 mx-auto">
          <Link href="/" className="animated-gradient text-2xl font-semibold text-transparent bg-clip-text md:text-5xl">
            WILLIAM
          </Link>
          <div className="block md:hidden">
            {!navbarOpen ? (
                <button
                    onClick={toggleNavbar}
                    className="flex items-center px-3 py-2 text-gray-200 border rounded hover:text-white hover:border-white"
                >
                  <Bars3Icon className="w-5 h-5"/>
                </button>
            ) : (
                <button
                    onClick={toggleNavbar}
                    className="flex items-center px-3 py-2 text-gray-200 border rounded hover:text-white hover:border-white"
                >
                  <XMarkIcon className="w-5 h-5"/>
                </button>
            )}
          </div>
          <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex p-4 mt-0 md:flex-row md:space-x-8 md:p-0">
              {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} onClick={closeNavbar}/>
                  </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen && <MenuOverlay links={navLinks} onClose={closeNavbar}/>}
      </nav>
  );
};

export default Navbar;
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-black border-r-black text-white">
            <div className="container p-12 flex justify-between">
                <span>WILLIAM.B</span>
                <Link href="/MentionsLegales" legacyBehavior>
                    <button className="text-slate-600 hover:text-white focus:outline-none">
                        Mentions légales
                    </button>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

// MissionCard.jsx
import React from 'react';

import Image from 'next/Image'
import { motion } from 'framer-motion';

const MissionCard = ({ onClick, imageSrc, title, delay = 0 }) => (
    <motion.div
        className="mission-card overflow-hidden rounded-lg cursor-pointer"
        onClick={onClick}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.05 }}
        style={{ boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
    >
        <Image src={imageSrc} alt={title} width={1000} height={1000} className="rounded-t-lg w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-center mt-2 text-lg font-semibold">{title}</h3>
        </div>
    </motion.div>
);

export default MissionCard;

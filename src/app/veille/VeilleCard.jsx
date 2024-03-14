import React from "react";
import Link from "next/link";
import Image from "next/Image";

const VeilleCard = ({ title, description, articleUrl, image, rating }) => {
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="relative">
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <div
                    className="image-container mb-4 relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image
                        src={image}
                        alt={title}
                        width={1000}
                        height={1000}
                        className="image"
                    />
                    {hovered && (
                        <div className="rating-overlay">
                            <div className="rating-popup">
                                <p className="text-white text-lg mb-2">Note :</p>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className="cursor-pointer text-xl"
                                            style={{ color: star <= rating ? "#FFD700" : "#A0AEC0" }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-between items-center">
                    <a
                        href={articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-400"
                    >
                        {`Lire l'article`}
                    </a>
                </div>
            </div>
            <style jsx>{`
                .image-container {
                    overflow: hidden;
                    height: 200px;
                }
                .image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .rating-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .rating-popup {
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default VeilleCard;
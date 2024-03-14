import React, { useState } from "react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, id }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const redirectToProjectDetails = () => {
        window.location.href = `/projets/${id}`;
    };

    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;

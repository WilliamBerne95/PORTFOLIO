import React from 'react';
import ReactDOM from 'react-dom';

const Popup = ({ isOpen, closePopup, article }) => {
    if (!isOpen || !article) return null;

    return ReactDOM.createPortal(
        <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h2>{article.title}</h2>
                <p>{article.summary}</p> {/* Ajouté pour afficher le résumé */}
                <p>Note: {article.rating} / 5</p>
                <a href={article.articleUrl} target="_blank" rel="noopener noreferrer">Lire l{'\''}article</a>
                <button onClick={closePopup}>Fermer</button>
            </div>
        </div>,
        document.body
    );
};

export default Popup;
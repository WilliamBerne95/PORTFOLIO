
import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-grey p-4 rounded-lg max-w-md w-full space-y-4">
                <h4 className="font-bold mb-2">{title}</h4>
                {children}
                <button onClick={onClose} className="mt-4 bg-primary-600 text-white p-2 rounded hover:bg-secondary-700">
                    Fermer
                </button>
            </div>
        </div>
    );
};

export default Modal;

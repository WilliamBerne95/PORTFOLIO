'use client'
import React from "react";
import Image from "next/image";

export const ReaCard = (props) => {
    const [zoomedItem, setZoomedItem] = React.useState(null);
    const [zoomedIndex, setZoomedIndex] = React.useState(null);
    const [animation, setAnimation] = React.useState('zoomIn');
    const [autoScrollAnimation, setAutoScrollAnimation] = React.useState('');

    React.useEffect(() => {
        document.body.style.overflow = zoomedItem ? 'hidden' : 'auto';

        let timeoutId;
        if (zoomedItem) {
            timeoutId = setTimeout(() => {
                switchToNextItem();
            }, 10000); // Change after 10 seconds
        }

        return () => clearTimeout(timeoutId); // Cleanup timeout
    }, [zoomedItem, zoomedIndex, props.images.length]);

    const switchToNextItem = () => {
        // Trouver l'index suivant
        const nextIndex = (zoomedIndex + 1) % props.images.length;

        // Appliquer l'animation de défilement
        setAutoScrollAnimation('slideLeft');

        // Attendre que l'animation se termine pour changer l'image
        setTimeout(() => {
            setZoomedItem(props.images[nextIndex]);
            setZoomedIndex(nextIndex);
            // Réinitialiser les animations après le changement
            setAnimation('zoomIn');
            setAutoScrollAnimation('');
        }, 500); // Correspond à la durée de l'animation 'slideLeft'
    };

    const closeZoom = () => {
        setAnimation('zoomOut');
        setTimeout(() => {
            setZoomedItem(null);
            setZoomedIndex(null);
            setAnimation('zoomIn');
            setAutoScrollAnimation('');
        }, 300);
    };

    const handleZoom = (item, index, e) => {
        e.stopPropagation(); // Empêcher la propagation pour éviter la fermeture immédiate
        // Si l'élément cliqué est déjà ouvert, le fermer
        if (zoomedItem && zoomedItem === item) {
            closeZoom();
        } else {
            setZoomedItem(item);
            setZoomedIndex(index);
            setAnimation('zoomIn');
        }
    };

    const renderZoomedImage = (item) => {
        if (item.path && !item.path1) {
            return (
                <Image
                    src={item.path}
                    alt={item.description}
                    width={800}
                    height={450}
                    layout="responsive"
                    onClick={(e) => {
                        e.stopPropagation(); // Stop propagation here too if necessary
                        closeZoom();
                    }}
                />
            );
        } else {
            return [...Array(7)].map((_, i) => item[`path${i + 1}`] && (
                <Image
                    key={i}
                    src={item[`path${i + 1}`]}
                    alt={item.description}
                    width={800}
                    height={450}
                    layout="responsive"
                    onClick={(e) => {
                        e.stopPropagation();
                        closeZoom();
                    }}
                />
            ));
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {props.images.map((item, index) => (
                    <div key={index}
                         className="relative group cellule bg-white rounded-lg shadow-lg overflow-hidden p-4 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                         style={{ height: '300px' }}
                         onClick={(e) => handleZoom(item, index, e)}>
                        <Image src={item.path2 || item.path} alt={item.description} width={800} height={450} layout="responsive" className="object-cover object-center w-full h-full" />
                        <div className="absolute bottom-0 left-0 w-full z-10">
                            <div className={`transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 bg-gradient-to-t from-primary-500 to-transparent p-4 pt-14 w-full h-full`}></div>
                            <h3 className="absolute bottom-0 left-0 p-4 text-lg font-bold text-white" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>{item.description}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {zoomedItem && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[999] p-4 ${animation} ${autoScrollAnimation}`}
                    onClick={closeZoom}>
                    <div className="bg-white p-4 max-w-3xl max-h-full overflow-auto"
                         onClick={(e) => e.stopPropagation()} style={{animation: `${animation} 0.3s forwards`}}>
                        {renderZoomedImage(zoomedItem)}
                        <h3 className="text-lg font-bold my-2">{zoomedItem.description}</h3>
                        <p className="text-gray-700">{zoomedItem.comment}</p>
                    </div>
                </div>
            )}
        </>
    );
};

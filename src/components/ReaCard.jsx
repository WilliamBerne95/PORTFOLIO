'use client'

import React from "react";

import Image from "next/image";


export const ReaCard = (props) => {
    const [zoomedItem, setZoomedItem] = React.useState(null);

    React.useEffect(() => {
        if (zoomedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [zoomedItem]);

    const [animation, setAnimation] = React.useState('zoomIn');

    const closeZoom = () => {
        setAnimation('zoomOut');
        setTimeout(() => {
            setZoomedItem(null);
        }, 300);
    };

    return(
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {props.images.map((item, index) => (
                    <div key={index}
                         className="relative group cellule bg-white rounded-lg shadow-lg overflow-hidden p-4 cursor-pointer h-auto md:h-96 lg:h-80 transform hover:scale-105 transition-transform duration-300"
                         onClick={() => setZoomedItem(item)}>
                        <Image
                            src={item.path2 || item.path}
                            alt={item.description}
                            width={500}
                            height={300}
                            layout="responsive"
                            className="object-cover object-center w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 w-full z-10">
                            <div className={`transition duration-[0.5s] opacity-0 group-hover:opacity-100 bg-gradient-to-t from-primary-500 to-transparent p-4 pt-14 w-full h-full`}></div>
                            <h3 className="absolute bottom-0 left-0 p-4 text-lg font-bold text-white"
                                style={{textShadow: '0 0 3px black'}}>{item.description}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {zoomedItem && (
                <div className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[999] p-4 ${animation}`}
                     onClick={closeZoom}>
                    <div className="bg-white p-4 max-w-3xl max-h-full overflow-auto"
                         onClick={(e) => e.stopPropagation()}
                         style={{animation: 'zoomIn 0.3s forwards'}}>
                        {/* If there are two images, display them on top of each other */}
                        {zoomedItem.path1 && (
                            <Image
                                src={zoomedItem.path1}
                                alt="Firebase Backend Functioning"
                                width={800}
                                height={450}
                                layout="responsive"
                                onClick={closeZoom}
                            />
                        )}
                        {zoomedItem.path2 && (
                            <Image
                                src={zoomedItem.path2}
                                alt="API Schema"
                                width={800}
                                height={450}
                                layout="responsive"
                                onClick={closeZoom}
                            />
                        )}
                        {/* If there is only one image, display it */}
                        {!zoomedItem.path1 && zoomedItem.path && (
                            <Image
                                src={zoomedItem.path}
                                alt={zoomedItem.description}
                                width={800}
                                height={450}
                                layout="responsive"
                                onClick={closeZoom}
                            />
                        )}
                        <h3 className="text-lg font-bold my-2" onClick={closeZoom}>{zoomedItem.description}</h3>
                        <p className="text-gray-700" onClick={closeZoom}>{zoomedItem.comment}</p>
                    </div>
                </div>
            )}
        </>
    )
}
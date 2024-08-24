import React, { useState, useEffect } from 'react';
import "./carousel.css";

const Carousel = ({ settings, children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState();
    const [showIndividualArrow, setShowIndividualArrow] = useState({
        leftArrow: false,
        rightArrow: true,
    });

    //Destructing of settings come from props and initialize default value
    const { showArrows = true, responsive = { desktop: { slidesToShow: 4 } } } = settings;

    //Function for next/prev slider functionality
    const nextSlide = () => {
        let endSlidesCount = (children.length - itemsToShow) - 1;
        if (currentIndex <= endSlidesCount) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setShowIndividualArrow(prev => ({ ...prev, leftArrow: true }));
        } else {
            setShowIndividualArrow(prev => ({ ...prev, rightArrow: false }));
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1));
            setShowIndividualArrow(prev => ({ ...prev, rightArrow: true }));
        } else {
            setShowIndividualArrow(prev => ({ ...prev, leftArrow: false }));
        }
    };

    useEffect(() => {
        // Set item to show on initial load
        const updateItemsToShow = () => {
            if (window.innerWidth < responsive.mobile?.breakpoint) {
                setItemsToShow(responsive.mobile.slidesToShow); // Show item on small screens
            } else if (window.innerWidth < responsive.tablet?.breakpoint) {
                setItemsToShow(responsive.tablet.slidesToShow); // Show items on medium screens
            } else {
                setItemsToShow(responsive.desktop.slidesToShow); // Show items on larger screens
            }
        };
        updateItemsToShow();

        window.addEventListener('resize', updateItemsToShow);
        //Cleanup for event listener
        return () => {
            window.removeEventListener('resize', updateItemsToShow);
        };
    }, [responsive]);

    return (
        <div className="carousel">
            {/* Slider Item to show */}
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
                {
                    children.map((childElement, index) =>
                        <div
                            key={index}
                            className="carousel-item"
                            style={{ minWidth: `${100 / itemsToShow}%` }}
                        >
                            {childElement}
                        </div>
                    )
                }
            </div>

            {/* Slider arrow button */}
            {showArrows &&
                <>
                    <button
                        className={`carousel-control prev ${showIndividualArrow.leftArrow ? "enable" : ""}`}
                        onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button
                        className={`carousel-control next ${showIndividualArrow.rightArrow ? "enable" : ""}`}
                        onClick={nextSlide}>
                        &#10095;
                    </button>
                </>
            }
        </div>
    );
};

export default Carousel;

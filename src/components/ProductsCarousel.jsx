/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Products() {
    const [Categories, setAllCategories] = useState([]);


    var numberOfCategory = 1;
    useEffect(() => {
        const fetchCategories = async () => {
            const rsp = await fetch('/categories.json');
            const categories = await rsp.json();
            setAllCategories(categories);
        };

        fetchCategories();
    }, []);
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                {Categories.map((category, key) => {
                                    return (
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto" key={key} style={{ cursor: "pointer" }}>
                                                <img src={category.image} alt="black chair and white table" className="object-cover object-center w-full" style={{ height: "300" + "px", padding: "1" + "px", background: "#fff" }} />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <Link to={`/categories:${numberOfCategory}`} className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Category {numberOfCategory++}</Link>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white" key={key}>{category.name}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                        </Slide>
                                    )
                                })}
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider >
            </div >
        </div >
    );
}

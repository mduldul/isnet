import React from "react";
import { useState, useCallback, useEffect } from 'react';
import { Container, Row } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/pagination"

SwiperCore.use([Pagination]);


const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);

        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
};

export default function BrandSlider({ contentList,headerText }) {
    const sm = useMediaQuery(425);
    return (
        <div className="md:w-145 lg:w-full">
            <Container fluid className="xs:mt-5">
                <Row>
                    <span className="text-featureTextBlue font-bold text-xl font-Montserrat ml-4 lg:after:w-10/12 lg:after:bg-gray-200 lg:after:h-1 lg:after:absolute lg:after:mt-3 after:ml-8">{headerText}</span>
                </Row>
                <div className="w-full mx-auto">
                    <Swiper slidesPerView={sm ? 1 : 6} pagination={{ "clickable": true }} slidesPerGroup={sm ? 1 : 4} loop={true} autoplay={true}>
                        {contentList.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-60 pb-14">
                                    <a href={item.href} className="flex h-24">
                                        <img src={item.img} className="filter grayscale transition duration-500 hover:grayscale-0 bg-center bg-no-repeat bg-cover mx-auto" />
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

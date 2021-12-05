import React from "react";
import { useState, useCallback, useEffect } from 'react';
import { Container, Row } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/pagination"
import Title from "../title/title";

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

export default function BrandSlider({ contentList, headerText }) {
    const sm = useMediaQuery(425);
    return (
        <div>
            <Container fluid className="xs:mt-5">
                <Title TitleText={headerText} />
                <div className="w-full mx-auto pb-14">
                    <Swiper slidesPerView={sm ? 1 : 6} pagination={{ "clickable": true }} slidesPerGroup={sm ? 1 : 4} loop={true} autoplay={true}>
                        {contentList.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center xs:pb-14">
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

import React from "react";
import { useState, useCallback, useEffect } from 'react';
import { Container, Row } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import Title from '../title/title'

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
export default function News({ contentList, headerText }) {
    const sm = useMediaQuery(425);
    return (
        <div>
            <Container fluid className="xs:mt-5">
                <Title TitleText={headerText} />
                <Swiper slidesPerView={sm ? 1 : 3} spaceBetween={30} pagination={{ "clickable": true }}>
                    {contentList.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-5">
                                <Row>
                                    <a href="#" className="flex">
                                        <div>
                                            <img src={item.img} className="transition hover:scale-50 ease-in" />
                                        </div>
                                    </a>
                                </Row>
                                <Row>
                                    <div className="mt-3">
                                        <span className="text-featureTextBlue font-Montserrat font-bold text-xl">{item.title}</span>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="mt-3">
                                        <p className="text-gray-600 font-Montserrat text-sm font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </Row>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    )
}

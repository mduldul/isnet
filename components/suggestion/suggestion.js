import React from "react";
import { Container, Grid, Row } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/pagination"

SwiperCore.use([Pagination]);

export default function Suggestion({ contentList, headerText }) {
    return (
        <div className="md:w-145 lg:w-full">
            <Container fluid className="xs:mt-5">
                <Row>
                    <span className="text-featureTextBlue font-bold text-xl font-Montserrat ml-4 lg:after:w-10/12 lg:after:bg-gray-200 lg:after:h-1 lg:after:absolute lg:after:mt-3 after:ml-8">{headerText}</span>
                </Row>
                <Swiper slidesPerView={1} spaceBetween={30} pagination={{ "clickable": true }}>
                    {contentList.map((item, index) => (
                        <SwiperSlide key={index} className="mb-8">
                            <Grid.Container justify="center">
                                <Grid sm={3} md={2}>
                                    <div className="pt-3 ml-5">
                                        <div>
                                            <img src={item.profileImg} className="lg:w-60 xs:w-80" />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid sm={6} md={8}>
                                    <div className="flex-col xs:mx-10 text-justify">
                                        <div className="pt-5">
                                            <span className="font-Montserrat text-xl font-bold text-featureTextBlue">{item.name}</span>
                                        </div>
                                        <div className="pt-3">
                                            <h5 className="font-Montserrat font-bold text-featureTextBlue">{item.title}</h5>
                                        </div>
                                        <div className="">
                                            <p className="font-Montserrat">{item.content}</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid sm={3} md={2}>
                                    <a href="#" target="_blank">
                                        <img src={item.logo} className="w-60" />
                                    </a>
                                </Grid>
                            </Grid.Container>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    )
}

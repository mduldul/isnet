import React from "react";
import { useState, useCallback, useEffect } from 'react';
import { Container, Row } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/pagination"

SwiperCore.use([Pagination]);

const newsList = [
    {
        title: 'Golden Global Yatırım Bank İşNet ile Hızlı, Çevik ve Güvenilir BT Altyapısına Kavuştu',
        desc: 'Müşteri odaklı çalışmak ve sürekliliğin sağlanması değerlerine önem veren Golden Global Bank, İşNet’in sağladığı...',
        img: '/news_slider/golden-global-logo.png'
    },
    {
        title: 'İşNet’ten Uygun Maliyetli Bulut Platformu, bluuty.com Hizmetinizde!',
        desc: 'İşNet anında sanal sunucu oluşturma ihtiyacı olan ve uygun fiyatlı çözümler arayan işletmeler, yazılımcılar ve girişimciler için b...',
        img: '/news_slider/bluuty-logo.png'
    },
    {
        title: 'Alpet, Dijital Dönüşümünü İşNet ile Gerçekleştiriyor',
        desc: "Altınbaş Holding Enerji Grubu şirketlerinden ALPET, Türkiye ve KKTC'de faaliyet göstermekte ve bölgesel güç olma hedefi ile büyümeye devam etmekt...",
        img: '/news_slider/alpet-logo.jpeg'
    },
    {
        title: "İş Bankası'ndan İşNet Altyapısıyla Yerli Depolama Uygulaması",
        desc: "Türkiye İş Bankası, güvenli depolama uygulaması Dijital Kasa’yı kullanıma sundu. Türkiye İş Bankası, depolama uygulaması Dijital Kas...",
        img: '/news_slider/isbankasi-dijital-kasa.jpeg'
    },
    {
        title: 'İşlerinizdeki Dijital Yardımcınız İşNet',
        desc: 'İşNet e-Dönüşüm Hizmetleri Müdürü Ayhan Akgöz 2020 hedefleri hakknıda bilgiler verdi. 2020 yılı için dijital dönüşüm hangi aşamada nasıl değerlendiriyorsunuz? 509 n...',
        img: '/news_slider/isnet-news-img.png'
    }
]

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
export default function News() {
    const sm = useMediaQuery(425);
    return (
        <div className="md:w-145 lg:w-full">
            <Container fluid className="xs:mt-5">
                <Row>
                    <span className="text-featureTextBlue font-bold text-xl font-Montserrat ml-4 lg:after:w-10/12 lg:after:bg-gray-200 lg:after:h-1 lg:after:absolute lg:after:mt-3 after:ml-8">BİZDEN HABERLER</span>
                </Row>
                <Swiper slidesPerView={sm ? 1 : 3} spaceBetween={30} pagination={{ "clickable": true }}>
                    {newsList.map((item, index) => (
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

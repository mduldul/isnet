import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import classNames from "classnames";

SwiperCore.use([Navigation]);

export default function Slider() {
    const sliderList = [
        {
            Id: 1,
            bg: 'bg-uzaktan-calisma',
            text: 'Uzaktan Çalışma Modeline Uygun Servis, Danışmanlık ve Altyapı Çözümlerimizle Yanınızdayız'
        },
        {
            Id: 2,
            bg: 'bg-bluuty-slider',
            text: `"bluuty.com"a Gelin, Size En Uygun Sanal Sunucuyu Belirleyin, Hemen Kullanmaya Başlayın!`
        },
        {
            Id: 3,
            bg: 'bg-el-birligi-dijital-donusum',
            text: `İş Bankası’ndan KOBİ’lere Özel Dijital Dönüşüm Kredisi Kampanyasından Yararlanın`
        },
        {
            Id: 4,
            bg: 'bg-ssl-vpn',
            text: `Uzaktan Erişim (SSL VPN) Çözümümüzle Kurum Ağınıza Güvenle Bağlanın`
        },
        {
            Id: 5,
            bg: 'bg-bulut-santral-cozumleri',
            text: `İşteSantral ile Şirket Hatlarınızdan Gelen Çağrıları Ofisteymiş Gibi Karşılayın`
        },
        {
            Id: 6,
            bg: 'bg-e-donusum-min',
            text: `e-Dönüşüm Süreçlerinizde, Güvenli ve Esnek Uygulamalarımızla Yanınızdayız`
        },
        {
            Id: 7,
            bg: 'bg-uydu-erisim',
            text: `Uydu Erişimi Hizmetimizden Yararlanın, Canlı Yayınlarınızı Yüksek Kalitede Gerçekleştirin`
        },
        {
            Id: 8,
            bg: 'bg-isnet-veeam-cloud',
            text: `İşNet Veeam Cloud Connect Altyapısı ile Veri Kayıplarının Önüne Geçin`
        },
        {
            Id: 9,
            bg: 'bg-robotik-surec',
            text: `Robotik Süreç Otomasyonu Çözümlerimizle Verimliliği Yakalayın`
        },
        {
            Id: 10,
            bg: 'bg-veri-guvenligi',
            text: `Kişisel Verilerin Koruması Kanunu'na Yönelik Danışmanlık Hizmetlerimizden Yararlanın`
        }


    ]
    return (
        <section className="w-screen">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
            <Swiper navigation={true} loop={true} autoplay={true}>
                {sliderList.map((value, index, arr) => (
                    <SwiperSlide key={value.Id}>
                        <div className={classNames("w-full flex h-slider bg-cover", value.bg)}>
                            <div className="relative top-1/3 flex justify-center">
                                <div className="w-7/12 text-center">
                                    <h2 className={"text-5xl text-white leading-tight font-Montserrat"} style={{ textShadow: "3px 2px 1px #000" }}>
                                        {value.text}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

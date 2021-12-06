import { Container, Pagination } from '@nextui-org/react'
import React, { useState } from 'react'
import BreadCrumb from '../../components/breadcrumb/breadcrumb'
import Title from '../../components/title/title'

const news = [
    {
        id: 1,
        title: 'Golden Global Yatırım Bank İşNet ile Hızlı, Çevik ve Güvenilir BT Altyapısına Kavuştu',
        content: `Müşteri odaklı çalışmak ve sürekliliğin sağlanması değerlerine önem veren Golden Global Bank,
        İşNet’in sağladığı kaliteli, güvenli, hızlı ve kesintisiz veri iletimi çözümlerini kullanmaya başladı`,
        img: '/brand_slider/goldenglobal-logo.png',
        author: 'İşNet',
        date: '04.06.2021'
    },
    {
        id: 2,
        title: 'İşNet’ten Uygun Maliyetli Bulut Platformu, bluuty.com Hizmetinizde!',
        content: `İşNet anında sanal sunucu oluşturma ihtiyacı olan ve uygun fiyatlı 
        çözümler arayan işletmeler, yazılımcılar ve girişimciler için bluuty adını verdiği bulut platformunu pazara sundu.`,
        author: 'İşNet',
        img: '/news_slider/bluuty-logo.png',
        date: '05.01.2021'
    },
    {
        id: 3,
        title: 'Alpet, Dijital Dönüşümünü İşNet ile Gerçekleştiriyor',
        content: `Altınbaş Holding Enerji Grubu şirketlerinden ALPET, 
        Türkiye ve KKTC'de faaliyet göstermekte ve bölgesel güç olma hedefi ile büyümeye devam etmektedir.
        ALPET, KKTC’de temellerinin atıldığı 1997 yılından itibaren, genç, dinamik ve sektörde tecrübeli 
        ekibi ile faaliyette bulunduğu her ülkede hizmet ve ürün kalitesiyle fark yaratarak enerji sektöründe 
        dinamikleri belirleyen firmalar arasına girmiştir.`,
        author: 'BThaber Gazetesi',
        img: '/news_slider/alpet-logo.jpeg',
        date: '29.09.2020'
    },
    {
        id: 4,
        title: `İş Bankası'ndan İşNet Altyapısıyla Yerli Depolama Uygulaması`,
        content: `Altınbaş Holding Enerji Grubu şirketlerinden ALPET, 
        Türkiye ve KKTC'de faaliyet göstermekte ve bölgesel güç olma hedefi ile büyümeye devam etmektedir.
        ALPET, KKTC’de temellerinin atıldığı 1997 yılından itibaren, genç, dinamik ve sektörde tecrübeli 
        ekibi ile faaliyette bulunduğu her ülkede hizmet ve ürün kalitesiyle fark yaratarak enerji sektöründe 
        dinamikleri belirleyen firmalar arasına girmiştir.`,
        author: 'digitale.com',
        img: '/news_slider/isbankasi-dijital-kasa.jpeg',
        date: '20.08.2020'
    },
    {
        id: 5,
        title: `İşlerinizdeki Dijital Yardımcınız İşNet`,
        content: `509 nolu VUK Genel Tebliği ile 2018 veya 2019 yılı brüt satış hasılatı, 5 milyon TL üzeri 
        olan firmalar 01.07.2020 itibari ile  e-Arşiv, e-Fatura ve e-Defter kullanımına başlayacaklar. 
        Aynı tebliğ kapsamında, 01.06.2020 yılı itibariyle e-SMM, zorunlu hale gelecek, 
        diğer zorunlu belgeler ise e-İrsaliye, e-SMM, e-Bilet uygulamaları olarak karşımıza çıkacak.`,
        author: 'Hizmetix Dergisi',
        img: '/news_slider/isnet-news-img.png',
        date: '13.03.2020'
    },
    {
        id: 6,
        title: 'Kadoil, İşNet ile Rekabette Fark Yaratıyor',
        content: `Akaryakıt sektörünün öncü şirketlerinden Kadoil hızlı, kaliteli, güvenli, 
        kesintisiz veri iletimi ve tam otomasyon için İşNet'i tercih ederek rakiplerinden her zaman önde olmayı hedefliyor.`,
        img: '/brand_slider/kadoil-logo.png',
        author: 'İşNet',
        date: '07.10.2019'
    }
]

const BizdenHaberler = () => {
    const [page, setPage] = useState(1);
    return (
        <div>
            <BreadCrumb pageName="Bizden Haberler" pageRoute="/hakkimizda/bizdenhaberler" />
            <Title TitleText="BİZDEN HABERLER" />
            <Container fluid>
                <div className="mb-5">
                    {
                        news?.slice(
                            (page - 1) * 2,
                            page * 2
                        ).map((item, index) => (
                            <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-2xl mt-4 w-100 mx-2" key={index}>
                                <div className="h-64 w-auto md:w-1/2">
                                    <img className="inset-0 h-full w-full object-cover object-center" src={item.img} />
                                </div>
                                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                    <h3 className="font-semibold text-lg leading-tight truncate">{item.title}</h3>
                                    <p className="mt-2">
                                        {item.content}
                                    </p>
                                    <p className="text-sm text-gray-700 tracking-wide font-semibold mt-2">
                                        {item.author} &bull; {item.date}
                                    </p>
                                    <button type="button" className="lg:w-1/6 md:w-auto rounded-md border border-transparent shadow-sm px-4 py-2 bg-featureBgBlue text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:text-sm">
                                        Detay
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </Container>
            <div className="my-5">
                <center>
                    <Pagination total={3} initialPage={1} size="xlarge" page={page} onChange={(page) => setPage(page)} />
                </center>
            </div>
        </div>
    )
}

export default BizdenHaberler

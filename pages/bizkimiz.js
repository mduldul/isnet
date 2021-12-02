import { Container, Grid, Row } from '@nextui-org/react'
import React from 'react'

const BizKimiz = () => {
    return (
        <div>
            <nav class="text-sm text-left bg-footerDarkBlue h-16 flex items-center justify-end" role="alert">
                <ul class="list-reset flex text-white mr-5">
                    <li><a href="/" class="font-bold text-white font-WorkSans">Anasayfa</a></li>
                    <li><span class="mx-2">→</span></li>
                    <li><a href="/bizkimiz" class="font-bold text-white font-WorkSans">Biz Kimiz ↓</a></li>

                </ul>
            </nav>
            <Container fluid>
                <Row>
                    <span className="text-featureTextBlue font-bold text-xl font-Montserrat ml-4 lg:after:w-10/12 lg:after:bg-gray-200 lg:after:h-1 lg:after:absolute lg:after:mt-3 after:ml-8">Biz Kimiz ?</span>
                </Row>
                <Grid.Container>
                    <Grid xs={12} md={5}>
                        <div className="flex py-5">
                            <img src="https://www.isnet.net.tr/img/biz-kimiz-isnet.jpg" />
                        </div>
                    </Grid>
                    <Grid xs={12} md={7} className="flex-col">
                        <Row>
                            <p className="pl-5 font-WorkSans text-sm leading-5">
                                Türkiye İş Bankası’nın iştiraki olan İşNet, internet bankacılığının kullanımını yaygınlaştırmak ve internete bağlı müşteri sayısını artırmak amacı ile 1999 yılında kurulmuştur. Teknolojinin ilerlemesine paralel olarak geliştirdiği internet altyapısıyla farklı kurumlara da iletişim ve telekomünikasyon alanında hizmet sunmaya başlamıştır.
                            </p>
                        </Row>
                        <Row>
                            <p className="pl-5 font-WorkSans text-sm leading-5">
                                İlk olarak 2004 yılında yapılan yatırımlarla ses hizmetleri sağlama lisansı alan İşNet, uydu hizmetlerini de portföyüne katarak uçtan uca iletişim çözümleri sunmaya başlamıştır. 2005 yılından bu yana yapılan yatırımlar sayesinde, 81 ilde POP noktasına sahip olmuştur.
                            </p>
                        </Row>
                        <Row>
                            <p className="pl-5 font-WorkSans text-sm leading-5">
                                Türk Telekom’un yanı sıra, yurt içi ve yurt dışı telekom operatörleriyle kurduğu ara bağlantılar ve Intelsat, Eutelsat, Avanti gibi uydu operatörleri üzerinden 7x24 kesintisiz iletişim ve veri hizmetleri sunmaktadır.
                            </p>
                        </Row>
                        <Row>
                            <p className="pl-5 font-WorkSans text-sm leading-5">
                                İşNet, faaliyet alanını ve hizmet yelpazesini yıllar içerisinde genişleterek; Ses, Veri Merkezi, İnternet, Sanal Ağ-VPN, Uydu Hizmetlerini her ölçekteki şirkete ve kamu kurumlarına sunmaktadır. 2013 yılı itibarıyla özel entegratör olarak NetteFatura markası ile hizmet vermeye başlayarak; e-fatura, e-arşiv fatura, NetteArşiv sanal saklama platformu ve ayrıca TÜRMOB ile işbirliği kapsamında NetteFatura ile tam entegrasyon olanağı sunan LucaNet KOBİ Ticari Yazılımı’nı dijital ürün ve hizmetler yelpazesine eklemiştir.
                            </p>
                        </Row>
                        <Row>
                            <p className="pl-5 font-WorkSans text-sm leading-5">
                                Güçlü kurumsal yapısı, müşteri odaklı yaklaşımı, donanımlı ekibiyle İşNet, önümüzdeki dönemde; şirketlerin “dijital dönüşüm dostu” olma vizyonuyla, robotik süreç otomasyon sistemi, nesnelerin interneti, siber güvenlik, bulut ve yapay zeka alanındaki yatırımlarla, inovatif, katma değeri yüksek çözümler sunmaktadır.
                            </p>
                        </Row>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}

export default BizKimiz

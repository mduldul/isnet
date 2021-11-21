import { Grid, Row, Col } from "@nextui-org/react";
import { CheckIcon, PhoneIcon, ThumbUpIcon, DesktopComputerIcon } from '@heroicons/react/solid'

export default function Features() {
    return (
        <Grid.Container>
            <Grid lg={3} md={6} sm={12} justify="center">
                <Col className="xs:my-8">
                    <Row justify="center">
                        <div className="w-28 h-28 bg-featureBgGray rounded-full hover:-translate-y-2 transition ease-in">
                            <div className="w-12 p-8">
                                <PhoneIcon className="text-featureIconBlue w-12" />
                            </div>
                        </div>
                    </Row>
                    <Row justify="center" className="mt-5">
                        <h3 className="text-featureTextBlue font-Montserrat text-xl">7/24 DESTEK</h3>
                    </Row>
                    <Row justify="center">
                        <h5 className="text-gray-500 font-Montserrat font-normal text-center xs:mx-5">Alanında uzman ve tecrübeli ekiplerimize her zaman ulaşma imkanı</h5>
                    </Row>
                </Col>
            </Grid>
            <Grid lg={3} md={6} sm={12} justify="center">
                <Col className="xs:my-8">
                    <Row justify="center">
                        <div className="w-28 h-28 bg-featureBgGray rounded-full hover:-translate-y-2 transition ease-in">
                            <div className="w-12 p-8">
                                <CheckIcon className="text-featureIconBlue w-12" />
                            </div>
                        </div>
                    </Row>
                    <Row justify="center" className="mt-5">
                        <h3 className="text-featureTextBlue font-Montserrat text-xl">81 İLDE POP NOKTASI</h3>
                    </Row>
                    <Row justify="center">
                        <h5 className="text-gray-500 font-Montserrat font-normal text-center xs:mx-5">Türkiye’nin tüm şehirlerinde yer alan POP(Point of Presence) noktalarımızla uçtan uca iletişim ve veri hizmetleri</h5>
                    </Row>
                </Col>
            </Grid>
            <Grid lg={3} md={6} sm={12} justify="center">
                <Col className="xs:my-8">
                    <Row justify="center">
                        <div className="w-28 h-28 bg-featureBgGray rounded-full hover:-translate-y-2 transition ease-in">
                            <div className="w-12 p-8">
                                <ThumbUpIcon className="text-featureIconBlue w-12" />
                            </div>
                        </div>
                    </Row>
                    <Row justify="center" className="mt-5">
                        <h3 className="text-featureTextBlue font-Montserrat text-xl">E-DÖNÜŞÜMDE GÜVEN</h3>
                    </Row>
                    <Row justify="center">
                        <h5 className="text-gray-500 font-Montserrat font-normal text-center xs:mx-5">Sahip olduğumuz ileri teknoloji ve yedekli bulut altyapımızla sunduğumuz geniş kapsamlı e-dönüşüm hizmetleri</h5>
                    </Row>
                </Col>
            </Grid>
            <Grid lg={3} md={6} sm={12} justify="center">
                <Col className="xs:my-8">
                    <Row justify="center">
                        <div className="w-28 h-28 bg-featureBgGray rounded-full hover:-translate-y-2 transition ease-in">
                            <div className="w-12 p-8">
                                <DesktopComputerIcon className="text-featureIconBlue   w-12" />
                            </div>
                        </div>
                    </Row>
                    <Row justify="center" className="mt-5">
                        <h3 className="text-featureTextBlue font-Montserrat text-xl">DİJİTALLEŞME ÇÖZÜMLERİ</h3>
                    </Row>
                    <Row justify="center">
                        <h5 className="text-gray-500 font-Montserrat font-normal text-center xs:mx-5">Siber güvenlik, robotik süreç otomasyonu ve nesnelerin interneti gibi yeni nesil teknolojilerde güvenilir çözüm ortağı</h5>
                    </Row>
                </Col>
            </Grid>
        </Grid.Container>
    )
}

import { Grid, Row, Col } from "@nextui-org/react";
import { CheckIcon, PhoneIcon, ThumbUpIcon, DesktopComputerIcon } from '@heroicons/react/solid'

const featureList = [
    {
        name: '7/24 DESTEK',
        description: 'Alanında uzman ve tecrübeli ekiplerimize her zaman ulaşma imkanı',
        icon: PhoneIcon
    },
    {
        name: '81 İLDE POP NOKTASI',
        description: 'Türkiye’nin tüm şehirlerinde yer alan POP(Point of Presence) noktalarımızla uçtan uca iletişim ve veri hizmetleri',
        icon: CheckIcon
    },
    {
        name: 'E-DÖNÜŞÜMDE GÜVEN',
        description: 'Sahip olduğumuz ileri teknoloji ve yedekli bulut altyapımızla sunduğumuz geniş kapsamlı e-dönüşüm hizmetleri',
        icon: ThumbUpIcon
    },
    {
        name: 'DİJİTALLEŞME ÇÖZÜMLERİ',
        description: 'Siber güvenlik, robotik süreç otomasyonu ve nesnelerin interneti gibi yeni nesil teknolojilerde güvenilir çözüm ortağı',
        icon: DesktopComputerIcon
    }
]
export default function Features() {
    return (
        <Grid.Container>
            {featureList.map((item) => (
                <Grid lg={3} md={6} sm={12} justify="center" key={item.name}>
                    <Col className="xs:my-8">
                        <Row justify="center">
                            <div className="w-28 h-28 bg-featureBgGray rounded-full hover:-translate-y-2 transition ease-in">
                                <div className="w-12 p-8">
                                    <item.icon className="text-featureIconBlue w-12" />
                                </div>
                            </div>
                        </Row>
                        <Row justify="center" className="mt-5">
                            <h3 className="text-featureTextBlue font-Montserrat text-xl">{item.name}</h3>
                        </Row>
                        <Row justify="center">
                            <h5 className="text-gray-500 font-Montserrat font-normal text-center xs:mx-5">{item.description}</h5>
                        </Row>
                    </Col>
                </Grid>
            ))}
        </Grid.Container>
    )
}

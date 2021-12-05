import { Container, Grid, Text } from '@nextui-org/react'
import { DeviceMobileIcon, LocationMarkerIcon, MailIcon, PhoneIcon, PhoneIncomingIcon } from '@heroicons/react/solid'
import { ImFacebook, ImTwitter, ImLinkedin, ImYoutube, ImInstagram } from 'react-icons/im';

export default function Footer() {
    return (
        <footer>
            <Container fluid className="bg-footerLightBlue">
                <Grid.Container justify="flex-start">
                    <Grid sm={6} lg={3}>
                        <div className="pt-10 pb-5 lg:pl-5">
                            <ul className="list-none">
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Ana Sayfa
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Biz Kimiz
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Teknolojik Altyapımız
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        İnsan Kaynakları
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Bilgi Toplum Hizmetleri
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Kişisel Verilerin Korunması
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Güvenli İnternet
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        İşnet Çerez (Cookies) Politikası
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid sm={6} lg={3}>
                        <div className="pt-10 pb-5 lg:pl-5">
                            <ul className="list-none">
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Ana Sayfa
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Biz Kimiz
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Teknolojik Altyapımız
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        İnsan Kaynakları
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Bilgi Toplum Hizmetleri
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Kişisel Verilerin Korunması
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        Güvenli İnternet
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        İşnet Çerez (Cookies) Politikası
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid sm={6} lg={3}>
                        <div className="pt-10 pb-5 lg:pl-5">
                            <ul className="list-none">
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-bold text-sm font-WorkSans">
                                        İşNet Genel Müdürlük
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-light text-sm font-WorkSans flex">
                                        <LocationMarkerIcon className="w-10 self-start mr-3" />
                                        İçmeler Mah. Piri Reis Cd. No: 62 Türkiye İş Bankası Tuzla Teknoloji ve Operasyon Merkezi D Blok Tuzla/İstanbul
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-light text-sm font-WorkSans flex">
                                        <PhoneIcon className="w-5 self-start mr-2" /> 0 850 290 0 290
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-light text-sm font-WorkSans flex">
                                        <DeviceMobileIcon className="w-5 self-start mr-2" />0 216 514 73 50
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-light text-sm font-WorkSans flex">
                                        <MailIcon className="w-5 self-start mr-2" /> info@is.net.tr
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid sm={6} lg={3}>
                        <div className="pt-10 pb-5 lg:pl-5">
                            <ul className="list-none">
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-light text-sm font-WorkSans flex">
                                        <PhoneIncomingIcon className="w-5" /> <b>e-Belge ve NetteArşiv Destek Hattı:</b>0850 724 33 87
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-light text-sm font-WorkSans flex">
                                        <MailIcon className="w-5 self-start mr-3" />efaturadestek@is.net.tr
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-light text-sm font-WorkSans flex">
                                        <MailIcon className="w-5 self-start mr-2" /> nettearsiv@is.net.tr
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-light text-sm font-WorkSans flex">
                                        <DeviceMobileIcon className="w-5 self-start mr-2" /><b>LucaNet Destek Hattı:</b>0850 724 58 22
                                    </a>
                                </li>
                                <li className="leading-none">
                                    <a href="#" className="text-white text-left font-light text-sm font-WorkSans flex">
                                        <MailIcon className="w-5 mr-2 self-start" />lucanetdestek@is.net.tr
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid.Container>
            </Container>
            <Container fluid className="bg-footerDarkBlue py-3">
                <Grid.Container justify="flex-start">
                    <Grid sm={4}>
                        <div>
                            <ul className="list-none inline-flex space-x-2">
                                <li>
                                    <a href="#" className="flex p-4 bg-footerLinkDarkBlue">
                                        <ImFacebook color="#fff" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-4 bg-footerLinkDarkBlue">
                                        <ImTwitter color="#fff" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-4 bg-footerLinkDarkBlue">
                                        <ImLinkedin color="#fff" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-4 bg-footerLinkDarkBlue">
                                        <ImYoutube color="#fff" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-4 bg-footerLinkDarkBlue">
                                        <ImInstagram color="#fff" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid sm={4}>
                        <div className="self-center">
                            <a href="#">
                                <img src="/footerisbankbrand.png" />
                            </a>
                        </div>
                    </Grid>
                    <Grid sm={4} justify="flex-end">
                        <div className="self-center text-sm">
                            <p className="text-white">Tüm hakları saklıdır. © İşNet AŞ 2021 </p>
                        </div>
                    </Grid>
                </Grid.Container>
            </Container>
        </footer>
    )
}

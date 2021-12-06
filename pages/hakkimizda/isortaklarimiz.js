import React, { useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import BreadCrumb from '../../components/breadcrumb/breadcrumb'
import Title from '../../components/title/title'
import { Grid, Container, Row, Pagination } from '@nextui-org/react'

const companyList = [
    {
        name: 'A ELEKTRONİK',
        adress: 'Toplu Konutlar 2.Etap Albatros Çık. 2D Blok Daire:15 Küçükçekmece',
        city: 'İstanbul',
        number: '0535 235 26 56'
    },
    {
        name: 'AKYOL ELEKTRONİL',
        adress: 'Reşatbey Mah. 62017 Sok. Teke Apt. No:29/2 Seyhan',
        city: 'Adana',
        number: '0554 582 03 14'
    },
    {
        name: 'BİLİMNET BİLİŞİM TEKNOLOJİLERİ İLETİŞİM SANAYİ VE TİCARET LİMİTED ŞİRKETİ',
        adress: 'Kızılırmak Mah. 1445 Sok. No:2/B İç Kapı No: 113 Çankaya',
        city: 'Ankara',
        number: '0549 785 44 71'
    },
    {
        name: 'CCS ELEKTRONİK',
        adress: 'K.bakkalköy Mah. Selvili Sok. No:4/48 Ataşehir',
        city: 'İstanbul',
        number: '0532 300 51 84'
    },
    {
        name: 'ÇÖZÜM BİLGİSAYAR İLETİŞİM MAKİNA MEDİKAL SİSTEMLERİ TİC. LTD. ŞTİ.',
        adress: 'Sümer 2 Sokağı No:37/9 Kızılay, Çankaya',
        city: 'Ankara',
        number: '0312 231 65 75'
    },
    {
        name: 'LOREM İPSUM',
        adress: 'Reşatbey Mah. 62017 Sok. Teke Apt. No:29/2 Seyhan',
        city: 'Adana',
        number: '0554 582 03 14'
    },
    {
        name: 'Softech',
        adress: 'Kızılırmak Mah. 1445 Sok. No:2/B İç Kapı No: 113 Çankaya',
        city: 'Ankara',
        number: '0549 785 44 71'
    },
    {
        name: 'İş Bankası',
        adress: 'K.bakkalköy Mah. Selvili Sok. No:4/48 Ataşehir',
        city: 'İstanbul',
        number: '0532 300 51 84'
    },
]

const IsOrtaklarimiz = () => {
    const [page, setPage] = useState(1);
    return (
        <div>
            <BreadCrumb pageName="İş Ortaklarımız" pageRoute="/hakkimizda/isortaklarimiz" />
            <Title TitleText="İŞ ORTAKLARIMIZ" />

            <Container fluid>
                <div className="mt-5 md:px-10 xs:md-2">
                    <img src="https://www.isnet.net.tr/img/%C4%B1sortaklar%C4%B1m%C4%B1z.png" className="w-full" />
                </div>
                <Grid.Container className="pt-5">
                    {
                        companyList?.slice(
                            (page - 1) * 4,
                            page * 4
                        ).map((item, index) => (
                            <Grid md={6} xs={12} key={index}>
                                <div className="w-full px-4" >
                                    <div className="w-full max-w-xl p-2 mx-auto bg-white rounded-2xl">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                                        <span>{item.name}</span>
                                                        <ChevronUpIcon
                                                            className={`${open ? 'transform rotate-180' : ''
                                                                } w-5 h-5 text-blue-500`}
                                                        />
                                                    </Disclosure.Button>
                                                    <Transition

                                                        enter="transition duration-100 ease-out"
                                                        enterFrom="transform scale-95 opacity-0"
                                                        enterTo="transform scale-100 opacity-100"
                                                        leave="transition duration-75 ease-out"
                                                        leaveFrom="transform scale-100 opacity-100"
                                                        leaveTo="transform scale-95 opacity-0"
                                                    >
                                                        <Disclosure.Panel className="px-5 pt-4 pb-2 text-sm text-gray-700">
                                                            <Row className="mb-2">
                                                                <b>Adres : </b> {item.adress}
                                                            </Row>
                                                            <Row className="mb-2">
                                                                <b>Şehir : </b> {item.city}
                                                            </Row>
                                                            <Row>
                                                                <b>Telefon : </b> {item.number}
                                                            </Row>
                                                        </Disclosure.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid.Container>
            </Container>
            <div className="my-5">
                <center>
                    <Pagination total={2} initialPage={1} size="large" page={page} onChange={(page) => setPage(page)} />
                </center>
            </div>
        </div >
    )
}

export default IsOrtaklarimiz

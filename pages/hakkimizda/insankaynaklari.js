import { Fragment, useRef, useState } from 'react'
import Title from '../../components/title/title'
import BreadCrumb from '../../components/breadcrumb/breadcrumb'
import UploadModal from '../../components/modal/uploadmodal'
import CvModal from '../../components/modal/cvmodal'

export default function InsanKaynaklari() {
    const [open, setOpen] = useState(false)
    const [cvopen, setcvOpen] = useState(false)
    return (
        <div>
            <BreadCrumb pageName="İnsan Kaynakları" pageRoute="/hakkimizda/insankaynaklari" />
            <Title TitleText="İnsan Kaynakları" />
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Özgeçmiş bilgileri oluşturarak</span>{' '}<br />
                                    <span className="block text-featureIconBlue xl:inline">İşNet'li olabilirsin.</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    İş ortaklarımıza verdiğimiz kaliteli hizmeti eksiksiz ve kesintisiz yerine getirebilmenin bir ön koşulu en yeni
                                    teknolojilerden ve yöntemlerden yararlanmaksa, diğeri; vizyoner, işine hakim, farklı uzmanlıklara sahip,
                                    mutlu bir takım olmaktır.İşNet’te biz böyle bir aileyiz.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <button
                                            type="button"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                                            onClick={() => setOpen(true)}
                                        >
                                            Özgeçmiş Yükle
                                        </button>
                                        {open && <UploadModal isOpen={setOpen} />}
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <button
                                            onClick={() => setcvOpen(true)}
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            Özgeçmiş Doldur
                                            {cvopen && <CvModal isOpen={setcvOpen} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover bg-center sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="/insankaynaklaribanner.jpeg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

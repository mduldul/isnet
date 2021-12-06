import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BriefcaseIcon, UserIcon } from '@heroicons/react/outline'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CvModal = ({ isOpen }) => {
    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root
            show={true}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={() => isOpen(false)}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    {/* Modal Hizalama */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child as={Fragment}>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <BriefcaseIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Özgeçmiş Doldur
                                        </Dialog.Title>
                                        <Tab.Group>
                                            <div>
                                                <Tab.List>
                                                    <div className="mx-0 pt-4 xs:px-4 md:px-0">
                                                        <div className="flex items-center justify-between">
                                                            <Tab>
                                                                <div className="flex items-center text-blue-500 relative">
                                                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-500">
                                                                        <UserIcon className="w-6 h-6 mx-auto" />
                                                                    </div>
                                                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-500">
                                                                        Kişisel Bilgiler
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab>
                                                                <div className="flex items-center text-white relative">
                                                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-blue-500 border-blue-500">
                                                                        <UserIcon className="w-6 h-6 mx-auto" />
                                                                    </div>
                                                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-500">
                                                                        Yabancı Dil
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab>
                                                                <div className="flex items-center text-gray-500 relative">
                                                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                                                        <UserIcon className="w-6 h-6 mx-auto" />
                                                                    </div>
                                                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                                                                        Eğitim
                                                                    </div>
                                                                </div>

                                                            </Tab>
                                                            <Tab>
                                                                <div className="flex items-center text-gray-500 relative">
                                                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                                                        <UserIcon className="w-6 h-6 mx-auto" />
                                                                    </div>
                                                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                                                                        İş Tecrübeleri
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                        </div>
                                                    </div>
                                                </Tab.List>
                                            </div>
                                            {/* KİŞİSEL BİLGİLER */}
                                            <Tab.Panel className="mt-10">
                                                <div>
                                                    <div className="mt-50 sm:mt-0">
                                                        <form action="#" method="POST">
                                                            <div className="px-4 md:pt-10 bg-white sm:p-6">
                                                                <div className="grid grid-cols-6 gap-6">
                                                                    <div className="lg:col-span-6 sm:col-span-6 xs:col-span-12">
                                                                        <input
                                                                            type="text"
                                                                            name="first-name"
                                                                            placeholder="Ad"
                                                                            id="first-name"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="lg:col-span-6 sm:col-span-6 xs:col-span-6">
                                                                        <input
                                                                            type="text"
                                                                            name="last-name"
                                                                            id="last-name"
                                                                            placeholder="Soyad"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>

                                                                    <div className="lg:col-span-6 sm:col-span-6 xs:col-span-6">
                                                                        <input
                                                                            type="text"
                                                                            name="email-address"
                                                                            id="email-address"
                                                                            placeholder="E-Mail"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>

                                                                    <div className="lg:col-span-6 sm:col-span-6 xs:col-span-12">
                                                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                                            Uyruk
                                                                        </label>
                                                                        <select
                                                                            id="country"
                                                                            name="country"
                                                                            autoComplete="country-name"
                                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        >
                                                                            <option>Türkiye</option>
                                                                            <option>Diğer</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className="lg:col-span-12 sm:col-span-6 xs:col-span-12">
                                                                        <input
                                                                            type="text"
                                                                            name="street-address"
                                                                            id="street-address"
                                                                            placeholder="Adres"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="lg:col-span-6 sm:col-span-6 xs:col-span-12">
                                                                        <input
                                                                            type="text"
                                                                            name="city"
                                                                            id="city"
                                                                            placeholder="Telefon Numarası"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="lg:col-span-6 sm:col-span-3 xs:col-span-12">
                                                                        <input
                                                                            type="date"
                                                                            name="region"
                                                                            id="region"
                                                                            placeholder="Doğum Tarihi"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                            {/* YABANCI DİL */}
                                            <Tab.Panel className="mt-10">
                                                <div>
                                                    <div className="mt-10 sm:mt-0">
                                                        <form action="#" method="POST">
                                                            <div className="px-4 md:py-10 bg-white sm:py-5">
                                                                <div className="grid grid-cols-6 gap-16">
                                                                    {/* RESET WİDTH HEADERLİST */}

                                                                    <div className="col-span-6 sm:col-span-3">
                                                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                                            Yabancı Dil
                                                                        </label>
                                                                        <select
                                                                            id="country"
                                                                            name="country"
                                                                            autoComplete="country-name"
                                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        >
                                                                            <option>Seçiniz</option>
                                                                            <option>İngilizce</option>
                                                                            <option>Almanca</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-span-6 sm:col-span-3">
                                                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                                            Seviye
                                                                        </label>
                                                                        <select
                                                                            id="country"
                                                                            name="country"
                                                                            autoComplete="country-name"
                                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        >
                                                                            <option>Seçiniz</option>
                                                                            <option>Orta</option>
                                                                            <option>İyi</option>
                                                                            <option>Çok İyi</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                            {/* EĞİTİM */}
                                            <Tab.Panel className="mt-10">
                                                <div>
                                                    <div className="sm:mt-0">
                                                        <form action="#" method="POST">
                                                            <div className="px-4 bg-white md:p-0 sm:p-6">
                                                                <div className="grid grid-cols-6 gap-8">
                                                                    <div className="md:col-span-12 sm:col-span-6 xs:col-span-12">
                                                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                                            Öğrenim Durumu
                                                                        </label>
                                                                        <select
                                                                            id="country"
                                                                            name="country"
                                                                            autoComplete="country-name"
                                                                            placeholder="Seçiniz"
                                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        >
                                                                            <option>Lisans</option>
                                                                            <option>Ön Lisans</option>
                                                                            <option>Lise</option>
                                                                            <option>İlköğretim</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="md:col-span-6 sm:col-span-3 xs:col-span-12">
                                                                        <input
                                                                            type="text"
                                                                            name="first-name"
                                                                            placeholder="Üniversite"
                                                                            id="first-name"
                                                                            className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="md:col-span-6 sm:col-span-3 xs:col-span-12">
                                                                        <input
                                                                            type="text"
                                                                            name="first-name"
                                                                            placeholder="Bölüm"
                                                                            id="first-name"
                                                                            className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="md:col-span-6 sm:col-span-3 xs:col-span-12">
                                                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                                            Başlangıç Tarihi
                                                                        </label>
                                                                        <input
                                                                            type="date"
                                                                            name="first-name"
                                                                            placeholder="Başlangıç Tarihi"
                                                                            id="first-name"
                                                                            className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="md:col-span-6 sm:col-span-3 xs:col-span-12">
                                                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                                            Mezuniyet Tarihi
                                                                        </label>
                                                                        <input
                                                                            type="date"
                                                                            name="first-name"
                                                                            placeholder="Mezuniyet Tarihi"
                                                                            id="first-name"
                                                                            className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                            {/* REFERANS */}
                                            <Tab.Panel className="mt-10">
                                                <div>
                                                    <div className="sm:mt-0">
                                                        <form action="#" method="POST">
                                                            <div className="px-4 bg-white md:p-0 sm:p-6">
                                                                <div className="grid grid-cols-6 gap-6">
                                                                    <div className="md:col-span-3 sm:col-span-3 xs:col-span-6">
                                                                        <input
                                                                            type="text"
                                                                            name="first-name"
                                                                            placeholder="Adı Soyadı"
                                                                            id="first-name"
                                                                            className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="md:col-span-3 sm:col-span-3 xs:col-span-6">
                                                                        <input
                                                                            type="text"
                                                                            name="first-name"
                                                                            placeholder="Görevi"
                                                                            id="first-name"
                                                                            className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="md:col-span-3 sm:col-span-3 xs:col-span-12">
                                                                        <input
                                                                            type="text"
                                                                            name="first-name"
                                                                            placeholder="İşyerinin Adı"
                                                                            id="first-name"
                                                                            className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="md:col-span-3 sm:col-span-3 xs:col-span-12">
                                                                        <input
                                                                            type="tel"
                                                                            name="first-name"
                                                                            placeholder="Telefonu"
                                                                            id="first-name"
                                                                            className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                        </Tab.Group>
                                    </div>
                                </div>
                            </div>
                            {/* BUTTONLAR */}
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => isOpen(false)}
                                >
                                    Gönder
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => isOpen(false)}
                                    ref={cancelButtonRef}
                                >
                                    Vazgeç
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default CvModal

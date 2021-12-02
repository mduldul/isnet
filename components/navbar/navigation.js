import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon, CalendarIcon, ChartBarIcon, CursorClickIcon, MenuIcon, PhoneIcon, PlayIcon,
    IdentificationIcon, DesktopComputerIcon, UserGroupIcon, NewspaperIcon, BriefcaseIcon,
    RefreshIcon, ShieldCheckIcon, SupportIcon, ViewGridIcon, XIcon, ChatAltIcon, UsersIcon, MailIcon, StatusOnlineIcon, GlobeAltIcon, FingerPrintIcon, DatabaseIcon, CubeIcon, PuzzleIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const kategorilerList = [
    {
        name: 'Hakkımızda',
        href: '#',
        icon: IdentificationIcon,
    },
    {
        name: 'Hizmetlerimiz',
        href: '#',
        icon: BriefcaseIcon,
    },
    {
        name: 'Dijitalleşme',
        href: '#',
        icon: DesktopComputerIcon,
    },
    {
        name: 'E-Dönüşüm',
        href: '#',
        icon: NewspaperIcon,
    },
    {
        name: 'Blog',
        href: '#',
        icon: ChatAltIcon,
    },
    {
        name: 'İletişim',
        href: '#',
        icon: UsersIcon,
    },
    {
        name: 'WebMail',
        href: '#',
        icon: MailIcon,
    },
    {
        name: 'Online İşlemler',
        href: '#',
        icon: StatusOnlineIcon,
    }
]

const hakkimizdaDropdown = [
    {
        name: 'Biz Kimiz ?',
        description: 'Kuruluşumuz hakkında en doğru ve güncel bilgilere bu sayfa altından ulaşabilirsiniz.',
        href: '/bizkimiz',
        icon: IdentificationIcon,
    },
    {
        name: 'Teknolojik Altyapımız',
        description: 'İleri teknolojiye sahip yaygın ve güçlü bir altyapı için İşNet',
        href: '#',
        icon: DesktopComputerIcon,
    },
    {
        name: 'İnsan Kaynakları',
        description: "Gelişmekte olan bilişim sektöründe, İşNet ailesinin bir üyesi olamk ister misiniz?",
        href: '#',
        icon: UserGroupIcon
    },
    {
        name: 'Bizden Haberler',
        description: "Basında İşNet hakkında yer alan haberlere buradan ulaşabilirsiniz.",
        href: '#',
        icon: NewspaperIcon,
    },
    {
        name: 'İş Ortaklarımız',
        description: `İşNet'in ayrıcalıklarından faydalanan firmalarımız`,
        href: '#',
        icon: BriefcaseIcon,
    },
]
const hizmetlerimizList = [
    {
        name: 'İnternet',
        href: '#',
        icon: GlobeAltIcon
    },
    {
        name: 'Sanal Ağ VPN',
        href: '#',
        icon: FingerPrintIcon
    },
    {
        name: 'Ses',
        href: '#',
        icon: PhoneIcon
    },
    {
        name: 'Uydu Erişim',
        href: '#',
        icon: StatusOnlineIcon
    },
    {
        name: 'Veri Merkezi',
        href: '#',
        icon: DatabaseIcon
    },
    {
        name: 'Siber Güvenlik',
        href: '#',
        icon: ShieldCheckIcon
    }
]
const dijitallesmeList = [
    {
        name: 'Robotik Süreç Otomasyonu',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'Nesnelerin İnterneti (IoT)',
        href: '#',
        icon: PuzzleIcon
    }
]
const edonusumList = [
    {
        name: 'e-Fatura',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'e-Arsiv Fatura',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'e-SMM',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'e-MM',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'e-İrsaliye',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'Nette Arşiv Platformu',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'e-Çırak SM',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'e-Çırak Ticari',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'LucaNet KOBİ Ticari Yazılımı',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'DES Otomatik Katılım Entegrasyon Sistemi',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'DijitalEkoSistem Portalı',
        href: '#',
        icon: CubeIcon
    },
    {
        name: 'Online Sözleşme',
        href: '#',
        icon: CubeIcon
    }
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Tüketici Öneri ve Şikayetleri',
        description: 'Şikayet ve önerin için mutlaka bize yazın !',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Borç Alacak Sorgulama',
        description: 'Abone.isnet üzerinden tüm borç işlemlerini kolayca yapabilirsin.',
        href: '#',
        icon: BookmarkAltIcon,
    }
]
const recentPosts = [
    { id: 1, name: 'Dijital Trendler:Clubhouse', href: '#' },
    { id: 2, name: 'Sürdürülebilirlik ve Dijitalleşme Trendi', href: '#' },
    { id: 3, name: 'Insan: Dijital Çağın Neresinde?', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-0">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-end md:justify-start md:space-x-10">
                    {/* İŞNET LOGO */}
                    <div className="xl:flex lg:hidden md:hidden justify-start lg:-ml-0  lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">İşnet</span>
                            <img
                                className="h-8 min-w-max sm:h-10"
                                src="/isnet_logo.png"
                                alt="işnet"
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        {/* HAKKIMIZDA */}
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900'
                                        )}
                                    >
                                        <span>Hakkımızda</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {hakkimizdaDropdown.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        {/* HİZMETLERİMİZ */}
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 '
                                        )}
                                    >
                                        <span>Hizmetlerimiz</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {hizmetlerimizList.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        {/* DİJİTALLEŞME */}
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 '
                                        )}
                                    >
                                        <span>Dijitalleşme</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {dijitallesmeList.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        {/* E-DÖNÜŞÜM */}
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900'
                                        )}
                                    >
                                        <span>EDönüşüm</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {edonusumList.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                {/* <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                    <div>
                                                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                                                        <ul role="list" className="mt-4 space-y-4">
                                                            {edonusumList.map((post) => (
                                                                <li key={post.id} className="text-base truncate">
                                                                    <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                                        {post.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-5 text-sm">
                                                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                                            {' '}
                                                            View all posts <span aria-hidden="true">&rarr;</span>
                                                        </a>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        {/* BLOG */}
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">BLOG</a>
                        {/* İLETİŞİM */}
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900'
                                        )}
                                    >
                                        <span>İletişim</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {resources.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                    <div>
                                                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Blog Akışı</h3>
                                                        <ul role="list" className="mt-4 space-y-4">
                                                            {recentPosts.map((post) => (
                                                                <li key={post.id} className="text-base truncate">
                                                                    <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                                        {post.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-5 text-sm">
                                                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                                            {' '}
                                                            Daha fazla <span aria-hidden="true">&rarr;</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        {/* WEBMAİL VE ONLİNE İSLEMLER */}
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">WEBMAİL</a>
                        <a href="#" className="text-base font-medium text-gray-700 hover:text-gray-900">ONLİNEİŞLEMLER</a>
                    </Popover.Group>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"

            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 z-10 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="/isnet_logo.png"
                                        alt="İşNet Logo"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {kategorilerList.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Başvuru Formu
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Adres ve Telefonlarımız
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

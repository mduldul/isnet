import { Container, Grid, Row } from '@nextui-org/react'
import BreadCrumb from '../components/breadcrumb/breadcrumb'
import Title from '../components/title/title'
import { BadgeCheckIcon } from '@heroicons/react/solid'

const teknolojikaltyapimizList = [
    {
        img: `https://www.isnet.net.tr/img/teknolojik-altyapimiz-isnet.jpg`
    },
    {
        title: `İleri Teknolojiye Sahip Yaygın ve Güçlü Bir Altyapı`,
        subTitle: `Kurulduğu günden bu yana gelişen ihtiyaç ve teknolojilere paralel olarak yatırımlarını aralıksız sürdüren İşNet;`,
        footerText: `farklı sektörlerde hizmet veren her ölçekteki şirkete ve kamu kurumlarına geniş bir çözüm ağı sunuyor.`
    },
    {
        text: `Türk Telekom, GSM ve Yurtdışı telekom operatörleriyle yapmış olduğu ara bağlantıları,`
    },
    {
        text: `İstanbul’da uluslararası standartlardaki veri merkezleri ile,`
    },
    {
        text: `Türkiye'nin 81 ilinde MPLS tabanlı PoP noktası bulunan “TÜRKİYE’nin Yeni Nesil Telekom Operatörü” olarak`
    }
]

const TeknolojikAltyapimiz = ({ props }) => {
    return (
        <div {...props}>
            <BreadCrumb pageName="Teknolojik Altyapımız" pageRoute="teknolojikaltyapimiz" />
            <Title TitleText="TEKNOLOJİK ALTYAPIMIZ" />
            <Container fluid>
                <Grid.Container>
                    <Grid xs={12} md={6}>
                        <div className="flex py-5">
                            {
                                teknolojikaltyapimizList.map((item, index) => (
                                    <img src={item.img} key={index} />
                                ))
                            }
                        </div>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <div className="mt-4">
                            <Row>
                                {
                                    teknolojikaltyapimizList.map((item, index) => (
                                        <h4 className="text-featureTextBlue font-Montserrat text-xl" key={index}>
                                            {item.title}
                                        </h4>
                                    ))
                                }
                            </Row>
                            <Row>
                                {
                                    teknolojikaltyapimizList.map((item, index) => (
                                        <p key={index}>
                                            {item.subTitle}
                                        </p>
                                    ))
                                }
                            </Row>
                            <div>
                                <ul>
                                    {
                                        teknolojikaltyapimizList.map((item, index) => (
                                            item.text !== undefined &&
                                            <li className="leading-none m-0" key={index}>
                                                <p className="inline-flex m-0">
                                                    <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                                    {item.text}
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <Row>
                                {
                                    teknolojikaltyapimizList.map((item, index) => (
                                        <p key={index}>
                                            {item.footerText}
                                        </p>
                                    ))
                                }
                            </Row>
                        </div>
                    </Grid>
                    <Grid xs={12} md={12}>
                        <div className="mt-4 w-full">
                            <Row>
                                <h4 className="text-featureTextBlue font-Montserrat text-xl">Yönetim Sistemleri Politikamız</h4>
                            </Row>
                            <Row>
                                <p className=" font-WorkSans text-sm">
                                    İşNet olarak, müşteri memnuniyetini sağlamak ve küresel gelişim ile yoğunlaşan rekabetçi pazarda başarılı olabilmek için Bilgi Güvenliği, İş Sürekliliği, Kalite ve Servis Yönetim Sistemleri ve Ödeme Güvenliği Sistemleri kapsamında;
                                </p>
                            </Row>
                            <div>
                                <ul className="">
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Yönetim sistemlerimizin işletilmesi ve devamlılığı için Yönetim Sistemleri Ekibi kurmayı, koordine etmeyi ve ilgili rol ve sorumlulukların yerine getirilmesini,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Bilginin gizliliği, bütünlüğü ve erişilebilirliği prensiplerine uymak ve sistemlerin etkinliğini sağlamak amacıyla risk analizi ve değerlendirmesi sonucu ortaya çıkan kritik riskler için risk işleme faaliyetleri yürütmeyi, tanımlanan fırsatları yakalayabilmek için aksiyonlar almayı,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Hizmetlerimizin kalitesini arttırmak için çalışanlarımızın yetkinliğini arttıracak eğitim, donanım ve yazılım için gerekli kaynakları ayırmayı,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Süreç ve faaliyetlerin sürekli iyileştirilmesi amacıyla düzenli gözden geçirmeler gerçekleştirmeyi,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Bütünsel yaklaşım zorunluluğu gereği tüm personelin ve iş ortaklarının Yönetim Sistemleri’ne katılımını ve uyumunu sağlamak için bilinçlendirmeyi ve teşvik etmeyi,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Değişen dünyada teknolojik gelişmeleri takip ederek farklılaşan müşteri beklentilerini karşılamayı, müşteri memnuniyetini arttırmayı,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Standartlara ve yasal mevzuatlara uyumunu iç ve dış denetimlerle kontrol etmeyi ve sistemi sürekli uyumlu kılmayı,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Hizmetlerimizin kalitesi ile birlikte güvenirliliğini arttırmayı,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Kurum kültürümüzün vazgeçilmez bir parçası olarak uygulamayı,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Hizmet alan tüm müşterilerimize sözleşmelerde tanımlı tüm gereksinimlere uyumun sağlanmasını,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            PCI DSS kontrollerinin, paydaşlarımızla birlikte etkin işletim ve yaygınlaştırılmasını,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            Hizmetlerimizin ve süreçlerimizin sürekliliğini sağlamak amacıyla gerekli kaynakların ayrılmasını,
                                        </p>
                                    </li>
                                    <li className="leading-none m-0 inline-flex w-full">
                                        <div>
                                            <BadgeCheckIcon className="w-5 mr-2 text-featureTextBlue" />
                                        </div>
                                        <p className="inline-flex m-0 text-sm font-WorkSans">
                                            COBIT çerçevesi kapsamında gerekliliklerin sağlanabilmesini teminen, yönetişim bakış açısı ile kontrolleri tesis etmeyi sağlarız.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <Row>
                                <ul className="inline-flex ml-0 space-x-5 py-5 w-full">
                                    <li className="w-40">
                                        <a href="https://www.isnet.net.tr/img/ISO-9001-Logo.jpg">
                                            <img src="https://www.isnet.net.tr/img/mavi-1.png" />
                                        </a>
                                    </li>
                                    <li className="w-40">
                                        <a href="https://www.isnet.net.tr/img/ISO-27001-Logo.jpg">
                                            <img src="https://www.isnet.net.tr/img/mavi-2.png" />
                                        </a>
                                    </li>
                                    <li className="w-40">
                                        <a href="https://www.isnet.net.tr/SozlesmeDokumanlar/22301-Sertifika.pdf">
                                            <img src="https://www.isnet.net.tr/img/mavi-3.png" />
                                        </a>
                                    </li>
                                    <li className="w-40">
                                        <a href="https://www.isnet.net.tr/img/ISO-20000-Logo.jpg">
                                            <img src="https://www.isnet.net.tr/img/mavi-4.png" />
                                        </a>
                                    </li>
                                </ul>
                            </Row>
                        </div>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}

export default TeknolojikAltyapimiz

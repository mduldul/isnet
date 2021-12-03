import { Container, Grid, Row } from '@nextui-org/react'
import BreadCrumb from '../components/breadcrumb/breadcrumb'
import Title from '../components/title/title'

const bizkimizList = [
    {
        img: `https://www.isnet.net.tr/img/biz-kimiz-isnet.jpg`
    },
    {
        text: `Türkiye İş Bankası’nın iştiraki olan İşNet, internet bankacılığının kullanımını yaygınlaştırmak ve internete bağlı müşteri sayısını artırmak amacı ile 1999 yılında kurulmuştur. Teknolojinin ilerlemesine paralel olarak geliştirdiği internet altyapısıyla farklı kurumlara da iletişim ve telekomünikasyon alanında hizmet sunmaya başlamıştır.`
    },
    {
        text: ` İlk olarak 2004 yılında yapılan yatırımlarla ses hizmetleri sağlama lisansı alan İşNet, uydu hizmetlerini de portföyüne katarak uçtan uca iletişim çözümleri sunmaya başlamıştır. 2005 yılından bu yana yapılan yatırımlar sayesinde, 81 ilde POP noktasına sahip olmuştur.`
    },
    {
        text: `Türk Telekom’un yanı sıra, yurt içi ve yurt dışı telekom operatörleriyle kurduğu ara bağlantılar ve Intelsat, Eutelsat, Avanti gibi uydu operatörleri üzerinden 7x24 kesintisiz iletişim ve veri hizmetleri sunmaktadır.`
    },
    {
        text: `İşNet, faaliyet alanını ve hizmet yelpazesini yıllar içerisinde genişleterek; Ses, Veri Merkezi, İnternet, Sanal Ağ-VPN, Uydu Hizmetlerini her ölçekteki şirkete ve kamu kurumlarına sunmaktadır. 2013 yılı itibarıyla özel entegratör olarak NetteFatura markası ile hizmet vermeye başlayarak; e-fatura, e-arşiv fatura, NetteArşiv sanal saklama platformu ve ayrıca TÜRMOB ile işbirliği kapsamında NetteFatura ile tam entegrasyon olanağı sunan LucaNet KOBİ Ticari Yazılımı’nı dijital ürün ve hizmetler yelpazesine eklemiştir.`
    },
    {
        text: `Güçlü kurumsal yapısı, müşteri odaklı yaklaşımı, donanımlı ekibiyle İşNet, önümüzdeki dönemde; şirketlerin “dijital dönüşüm dostu” olma vizyonuyla, robotik süreç otomasyon sistemi, nesnelerin interneti, siber güvenlik, bulut ve yapay zeka alanındaki yatırımlarla, inovatif, katma değeri yüksek çözümler sunmaktadır.`
    }
]

const BizKimiz = () => {
    return (
        <div>
            <BreadCrumb pageName="Biz Kimiz ↓" pageRoute="/bizkimiz" />
            <Container fluid>
                <Title TitleText="Biz Kimiz ?" />
                <Grid.Container>
                    <Grid xs={12} md={5}>
                        <div className="flex py-5">
                            {
                                bizkimizList.map((item, index) => (
                                    <img src={item.img} key={index} />
                                ))
                            }
                        </div>
                    </Grid>
                    <Grid xs={12} md={7} className="flex-col">
                        {
                            bizkimizList.map((item, index) => (
                                <Row key={index}>
                                    <p className="pl-5 font-WorkSans text-sm leading-5">
                                        {item.text}
                                    </p>
                                </Row>
                            ))
                        }
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}

export default BizKimiz

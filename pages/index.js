import Features from '../components/features/features.js'
import News from '../components/news/news.js'
import BrandSlider from '../components/slider/brandSlider.js'
import Slider from '../components/slider/slider.js'
import Suggestion from '../components/suggestion/suggestion.js'

const newsList = [
  {
    title: 'Golden Global Yatırım Bank İşNet ile Hızlı, Çevik ve Güvenilir BT Altyapısına Kavuştu',
    desc: 'Müşteri odaklı çalışmak ve sürekliliğin sağlanması değerlerine önem veren Golden Global Bank, İşNet’in sağladığı...',
    img: '/news_slider/golden-global-logo.png'
  },
  {
    title: 'İşNet’ten Uygun Maliyetli Bulut Platformu, bluuty.com Hizmetinizde!',
    desc: 'İşNet anında sanal sunucu oluşturma ihtiyacı olan ve uygun fiyatlı çözümler arayan işletmeler, yazılımcılar ve girişimciler için b...',
    img: '/news_slider/bluuty-logo.png'
  },
  {
    title: 'Alpet, Dijital Dönüşümünü İşNet ile Gerçekleştiriyor',
    desc: "Altınbaş Holding Enerji Grubu şirketlerinden ALPET, Türkiye ve KKTC'de faaliyet göstermekte ve bölgesel güç olma hedefi ile büyümeye devam etmekt...",
    img: '/news_slider/alpet-logo.jpeg'
  },
  {
    title: "İş Bankası'ndan İşNet Altyapısıyla Yerli Depolama Uygulaması",
    desc: "Türkiye İş Bankası, güvenli depolama uygulaması Dijital Kasa’yı kullanıma sundu. Türkiye İş Bankası, depolama uygulaması Dijital Kas...",
    img: '/news_slider/isbankasi-dijital-kasa.jpeg'
  },
  {
    title: 'İşlerinizdeki Dijital Yardımcınız İşNet',
    desc: 'İşNet e-Dönüşüm Hizmetleri Müdürü Ayhan Akgöz 2020 hedefleri hakknıda bilgiler verdi. 2020 yılı için dijital dönüşüm hangi aşamada nasıl değerlendiriyorsunuz? 509 n...',
    img: '/news_slider/isnet-news-img.png'
  }
]
const blogList = [
  {
    title: 'Dijital Trendler: Clubhouse',
    desc: 'Dijital dünyadaki değişim ve gelişmeler, günlük alışkanlıkların da yeni bir boyut kazanmasını sağlıyor. 2000’li yılların sonlarında ortaya çıkan sosyal medya kavramı da yeni ...',
    img: '/blog_slider/blog-clubhouse.png'
  },
  {
    title: 'Sürdürülebilirlik ve Dijitalleşme Trendi',
    desc: 'Birçok farklı iş kolunda dijitalleşmenin ve yazılımın etkilerinin hissedildiği 21. yüzyıl, sürdürülebilirlik kavramının bağlamını bambaşka bir boyuta taşıdı. Bugün dünya günd...',
    img: '/blog_slider/dijitallesme-trendi-blog.png'
  },
  {
    title: 'İnsan: Dijital Çağın Neresinde?',
    desc: "Dijital dönüşüm, iş dünyasında ve günlük yaşamda en çok karşılaşılan kavramlar arasında yer alıyor. Akıllı telefonların hayatın vazgeçilmez bir parçası hâline gelmesi, yapay ...",
    img: '/blog_slider/insan-dijital-blog.png'
  },
  {
    title: "Uzaktan Çalışma Döneminde Oluşan Yeni Alışkanlıklar",
    desc: "Uzaktan çalışma pek çok sektör için yeni değil, ancak pandemi ile birlikte olağanüstü bir hızla yaygınlaşmakta. Uzaktan eğitim ve çalışma, 2020’ni...",
    img: '/blog_slider/uzaktan-calisma-blog.jpeg'
  },
  {
    title: 'Masaüstü Sanallaştırma Nedir? Avantajları Nelerdir?',
    desc: 'Masaüstü Sanallaştırma Nedir? Masaüstü sanallaştırma, akıllı cihazınızda yer alan verilere, uygulamalara ve yüklü olan işletim sistemine farkl...',
    img: '/blog_slider/masaustu-sanallastirma-blog.jpeg'
  }
]
const suggestionList = [
  {
    name: 'Özer Erdoğan',
    title: 'ALPET Otomasyon Müdürü',
    content: '"Akaryakıt sektöründe; kesintisiz internet bağlantısı, yasal gerekliliklerin yerine getirilmesinde ve ticaretin başarılı bir şekilde devam etmesinde büyük önem taşımaktadır. Bu yolda bizimle birlikte yürüyen İşNet’in, veri akışında kesinti yaşamadan istasyonlarımızı sorunsuz yönetebilme olanağı sunmasından son derece memnunuz."',
    logo: '/suggestion_slider/alpet-logo.jpeg',
    profileImg: '/suggestion_slider/ozer-erdogan.jpeg'
  },
  {
    name: 'Hasan Bartınlı',
    title: 'EREN HOLDİNG Bilgi Teknolojileri Müdür',
    content: 'İşNet, MPLS networkümüzü güvenle emanet ettiğimiz, uzak üretim tesislerimizi bize yakınlaştıran ve aynı platformlarda çalışmamızı sağlayan bir değer bizim için. Nadir de olsa uç noktalarımızda oluşan arızaları bizlerin dönüşünü beklemeden anında gören, takip eden ve hızlıca çözüme kavuşturan organizasyon yapıları, uzun süreli birlikteliğimizde önemli rol oynuyor.',
    logo: '/suggestion_slider/eren-holding-logo.jpeg',
    profileImg: '/suggestion_slider/hasan-bartinli.jpeg'
  },
  {
    name: 'Filiz Güler',
    title: 'GRUP FLORENCE NIGHTINGALE HASTANELERI Bilgi Sistemleri Direktörü',
    content: 'Yaklaşık 15 yıldır İşNet firmasından MPLS ve internet konusunda hizmet alıyoruz. Hizmet aldığımız süre içerisinde hiçbir kesinti ve problem yaşamamış olmamız gerçekten de bizlere güven veriyor. Bundan sonraki projelerimizde de hızlı çözümleri, uzman kadrosu ve tecrübesinden dolayı “İşNet” diyoruz. Teşekkürler İşNet.',
    logo: '/suggestion_slider/florence-logo.png',
    profileImg: '/suggestion_slider/filiz-guler.png'
  },
  {
    name: 'Murat Tekbaş',
    title: 'GOLDEN GLOBAL YATIRIM BANKASI Grup Başkanı',
    content: 'Bankacılık hizmetleri ve alternatif finansman yöntemleri sunmak amacıyla kurulan, tüm faaliyetlerini faizsiz finans prensiplerine uygun şekilde icra eden, ülkemizdeki ilk ve tek yatırım bankası kimliğiyle faaliyetlerine başlayan Golden Global Yatırım Bank olarak kuruluş sürecimizde, teknoloji ve altyapı alanında İşNet’ten kaliteli ve hızlı bir hizmet aldığımızı söylemek isterim. Kurulumun yanısıra sonraki süreçlerde de, çözüm odaklı yaklaşımlarıyla başarılı sonuçlar yaratan İşNet’e çok teşekkür ediyoruz. MPLS hizmetlerine ilave olarak, hala bankacılık altyapı ve teknoloji bakım&destek hizmetlerini aldığımız İşNet ile uzun yıllar birlikte, güvenle çalışacağımıza inanıyoruz.',
    logo: '/suggestion_slider/golden-global-logo.png',
    profileImg: '/suggestion_slider/murat-tekbas.jpeg'
  },
  {
    name: 'Murat Seymen',
    title: 'KAFA RADYO Teknik Müdürü',
    content: `Yayıncılıkta telekomünikasyon hizmeti, yaptığımız işin kalbi anlamına gelir ve İşNet ile çalışmak her şeyden önce bize güven veriyor. İşNet'in Kafa Radyo’ya ve Radyoland.com'a sağladığı geniş bant uydu internet hizmeti ile, gönül rahatlığıyla, canlı yayın araçlarımızla Türkiye'nin her yerinden, 7/24 kesintisiz olarak yayınlarınımızı gerçekleştirebiliyoruz. Teşekkürler İşNet.`,
    logo: '/suggestion_slider/kafa-radyo-logo.jpeg',
    profileImg: '/suggestion_slider/murat-seymen.jpeg'
  },
  {
    name: 'Hüseyin Uslu',
    title: 'ŞENPİLİÇ Bilgi Teknolojileri Müdürü',
    content: `İşNet'in konusunda uzman, köklü bir kuruluş olması; finansal bir güç yaratmakla birlikte düzgün işleyen süreçlerle de iyi bir hizmet sunulmasını; POP noktalarının yaygın olması ise, alınan hizmetin maliyetinin uygun olmasını sağlıyor. Ayrıca iletişim altyapısının ulaştırılmasının zor olduğu lokasyonlarımızda bile İşNet'in çözüm üretebiliyor olması işimize önemli bir değer katıyor.`,
    logo: '/suggestion_slider/senpilic-logo.jpeg',
    profileImg: '/suggestion_slider/huseyin-uslu.jpeg'
  }
]
const brandList = [
  {
    name: 'aktifbank',
    href: '#',
    img: `brand_slider/aktifbank-logo.png`
  },
  {
    name: 'alpet',
    href: '#',
    img: `brand_slider/alpet-logo.jpeg`
  },
  {
    name: 'anadolusigorta',
    href: '#',
    img: `brand_slider/anadolusigorta-logo.jpeg`
  },
  {
    name: 'barilla',
    href: '#',
    img: `brand_slider/barilla-logo.jpeg`
  },
  {
    name: 'basidav',
    href: '#',
    img: `brand_slider/basidav-logo.jpeg`
  },
  {
    name: 'bayındır',
    href: '#',
    img: `brand_slider/bayındır-logo.jpeg`
  },
  {
    name: 'benetton',
    href: '#',
    img: `brand_slider/benetton-logo.jpeg`
  },
  {
    name: 'erenholding',
    href: '#',
    img: `brand_slider/erenholding-logo.jpeg`
  },
  {
    name: 'flo',
    href: '#',
    img: `brand_slider/flo-logo.jpeg`
  },
  {
    name: 'goldenglobal',
    href: '#',
    img: `brand_slider/goldenglobal-logo.png`
  },
  {
    name: 'grupflorence',
    href: '#',
    img: `brand_slider/grupflorence-logo.jpeg`
  },
  {
    name: 'intercity',
    href: '#',
    img: `brand_slider/intercity-logo.jpeg`
  },
  {
    name: 'isbankasi',
    href: '#',
    img: `brand_slider/isbankasi-logo.jpeg`
  },
  {
    name: 'isfaktoring',
    href: '#',
    img: `brand_slider/isfaktoring-logo.png`
  },
  {
    name: 'jotun',
    href: '#',
    img: `brand_slider/jotun-logo.jpeg`
  },
  {
    name: 'kadoil',
    href: '#',
    img: `brand_slider/kadoil-logo.png`
  },
  {
    name: 'kafaradyo',
    href: '#',
    img: `brand_slider/kafaradyo-logo.jpeg`
  },
  {
    name: 'karel',
    href: '#',
    img: `brand_slider/karel-logo.jpeg`
  },
  {
    name: 'radyoland',
    href: '#',
    img: `brand_slider/radyoland-logo.png`
  },
  {
    name: 'senpilic',
    href: '#',
    img: `brand_slider/senpilic-logo.jpeg`
  }


]

export default function Home() {
  return (
    <div>
      <Slider />
      <Features />
      <News contentList={newsList} headerText="BİZDEN HABERLER" />
      <News contentList={blogList} headerText="BLOG" />
      <Suggestion contentList={suggestionList} headerText="İŞNETLE ÇALIŞMAK" />
      <BrandSlider contentList={brandList} headerText="REFERANSLARIMIZ" />
      <BrandSlider contentList={brandList} headerText="İŞ ORTAKLARIMIZ" />
    </div>
  )
}

import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const services = [
    {
      title: "Ceza Hukuku Hizmeti",
      description: "Suçlamalarla karşı karşıya kaldığınızda, uzman ceza hukuku avukatlarımız sizin için savunma yapacaktır. Haksız yere suçlanmamanız, adil bir yargılama sürecine girebilmeniz için yanınızdayız. Hırsızlık, dolandırıcılık, cinayet gibi ağır suçlamalarda savunmanızı yaparken, hakkınız olan en iyi sonucu almak için çalışıyoruz."
    },
    {
      title: "Aile Hukuku Hizmeti",
      description: "Boşanma, mal paylaşımı, çocukların velayeti gibi hassas konularda hukuki desteğe mi ihtiyacınız var? Aile hukuku avukatlarımız, en zor dönemlerinizde size rehberlik eder. Hedefimiz, sizin ve ailenizin en iyi şekilde çözüm bulabilmesidir."
    },
    {
      title: "İş Hukuku Hizmeti",
      description: "İş yerinde yaşadığınız hak ihlallerini ortadan kaldırmak için iş hukuku uzmanlarımız yanınızda. Çalışan hakları, tazminat davaları, iş güvenliği gibi birçok konuda sizinle birlikte hareket ederek adil bir çözüm buluyoruz. İş yerindeki sorunlarınızı hukuki zeminde çözebilirsiniz."
    },
    {
      title: "Ticaret Hukuku Hizmeti",
      description: "İşletmenizin yasal süreçlerini güvenle yönetin. Ticaret hukuku avukatlarımız, ticari sözleşmelerden, şirket birleşmelerine kadar her aşamada size profesyonel rehberlik sağlar. Ticaret hayatındaki hukuki meselelerde size en iyi çözümü sunarız."
    },
    {
      title: "İcra ve İflas Hukuku Hizmeti",
      description: "Alacaklarınızı tahsil etmekte zorlanıyor musunuz? İcra ve iflas hukuku hizmetimiz, borçlulara karşı haklarınızı savunmak, icra takibi başlatmak ve iflas süreçlerini yönetmek için size yol gösterir. Borç ödeme süreçlerini hukuki çerçevede en iyi şekilde yönetmenize yardımcı oluruz."
    },
    {
      title: "Gayrimenkul Hukuku Hizmeti",
      description: "Gayrimenkul alım satım süreçlerinde yaşadığınız hukuki sorunları profesyonel bir şekilde çözüyoruz. Tapu işlemleri, kira sözleşmeleri, imar sorunları ve diğer gayrimenkul hukuku konularında müvekkillerimize güvenli ve hukuki destek sağlıyoruz."
    },
    {
      title: "Tüketici Hukuku Hizmeti",
      description: "Tüketici haklarınızı savunuyoruz. Satın aldığınız bir ürün ya da hizmetin, yasal şartları taşımaması durumunda sizi koruyoruz. Tüketici sözleşmeleri, garanti ve iade talepleri gibi konularda müvekkillerimize hukuki rehberlik sunuyoruz."
    },
    {
      title: "Vergi Hukuku Hizmeti",
      description: "Vergi yükümlülüklerinizle ilgili sorunlarınızda size yardımcı oluyoruz. Vergi daireleriyle olan anlaşmazlıklar, vergi borçları, vergi incelemeleri ve davalarına karşı sizi savunuyoruz. Yasal haklarınızı savunarak en iyi çözümü sağlıyoruz."
    },
    {
      title: "Miras Hukuku Hizmeti",
      description: "Miras paylaşımı ve miras hukuku konularında ortaya çıkan anlaşmazlıklarda uzman desteği alabilirsiniz. Miras sözleşmeleri, vasiyetname düzenlemeleri, miras paylaşımları gibi hassas konularda müvekkillerimize yardımcı oluyoruz."
    },
    {
      title: "Sağlık Hukuku Hizmeti",
      description: "Sağlık hizmetleriyle ilgili yaşadığınız hukuki sorunlarda yanınızdayız. Tıbbi hatalar, sağlık sigortası anlaşmazlıkları, hastane hizmetleriyle ilgili yaşadığınız problemler için müvekkillerimize hukuki çözümler sunuyoruz."
    },
    {
      title: "Fikri Mülkiyet Hukuku Hizmeti",
      description: "İnovasyon ve yaratıcılığınızı hukuki olarak koruyoruz. Patent, marka, tasarım ve telif hakları gibi fikri mülkiyet haklarınızı koruma altına almak ve bu alanda hukuki düzenlemeleri yapmak için hizmet veriyoruz."
    },
    {
      title: "Uluslararası Hukuk Hizmeti",
      description: "Uluslararası alandaki hukuki işlemler ve anlaşmazlıklar için uzman desteği sağlıyoruz. Yabancı yatırımcılar, uluslararası ticaret ve yurt dışı işlemler ile ilgili her türlü hukuki desteği sunarak müvekkillerimizin global alandaki hukuki sorunlarını çözüyoruz."
    }
  ];

  return (
    <section id="services" className="services">
      <h2>Çalışma Alanlarımız</h2>
      <ul>
        {services.map((service, index) => (
          <li 
            key={index} 
            onMouseEnter={() => handleMouseEnter(index)} 
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="service-title">{service.title}</h3>
            <p 
              className="service-description" 
              style={{ display: activeIndex === index ? 'block' : 'none' }}
            >
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;

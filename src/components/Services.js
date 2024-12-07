import React from 'react';
import Slider from 'react-slick';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Ceza Hukuku Hizmeti",
      description: "Suçlamalarla karşı karşıya kaldığınızda, uzman ceza hukuku avukatlarımız sizin için savunma yapacaktır.",
      image: "images/ceza_hukuku.jpg"
    },
    {
      title: "Aile Hukuku Hizmeti",
      description: "Boşanma, mal paylaşımı, çocukların velayeti gibi hassas konularda hukuki desteğe mi ihtiyacınız var?",
      image: "images/aile_hukuku.jpg"
    },
    {
      title: "İş Hukuku Hizmeti",
      description: "İş yerinde yaşadığınız hak ihlallerini ortadan kaldırmak için iş hukuku uzmanlarımız yanınızda.",
      image: "images/is_hukuku.jpg"
    },
    {
      title: "Ticaret Hukuku Hizmeti",
      description: "İşletmenizin yasal süreçlerini güvenle yönetin. Ticaret hukuku avukatlarımız size profesyonel rehberlik sağlar.",
      image: "images/ticaret_hukuku.jpg"
    },
    {
      title: "İcra ve İflas Hukuku Hizmeti",
      description: "Alacaklarınızı tahsil etmekte zorlanıyor musunuz? İcra ve iflas hukuku hizmetimiz size yol gösterir.",
      image: "images/icra_iflas_hukuku.jpg"
    },
    {
      title: "Gayrimenkul Hukuku Hizmeti",
      description: "Gayrimenkul alım satım süreçlerinde yaşadığınız hukuki sorunları profesyonel bir şekilde çözüyoruz.",
      image: "images/gayrimenkul_hukuku.jpg"
    },
    {
      title: "Tüketici Hukuku Hizmeti",
      description: "Tüketici haklarınızı savunuyoruz. Satın aldığınız bir ürün ya da hizmetin, yasal şartları taşımaması durumunda sizi koruyoruz.",
      image: "images/tuketici_hukuku.jpg"
    },
    {
      title: "Vergi Hukuku Hizmeti",
      description: "Vergi yükümlülüklerinizle ilgili sorunlarınızda size yardımcı oluyoruz.",
      image: "images/vergi_hukuku.jpg"
    },
    {
      title: "Miras Hukuku Hizmeti",
      description: "Miras paylaşımı ve miras hukuku konularında ortaya çıkan anlaşmazlıklarda uzman desteği alabilirsiniz.",
      image: "images/miras_hukuku.jpg"
    },
    {
      title: "Sağlık Hukuku Hizmeti",
      description: "Sağlık hizmetleriyle ilgili yaşadığınız hukuki sorunlarda yanınızdayız.",
      image: "images/saglik_hukuku.jpg"
    },
    {
      title: "Fikri Mülkiyet Hukuku Hizmeti",
      description: "İnovasyon ve yaratıcılığınızı hukuki olarak koruyoruz.",
      image: "images/fikri_mulkiyet_hukuku.jpg"
    },
    {
      title: "Uluslararası Hukuk Hizmeti",
      description: "Uluslararası alandaki hukuki işlemler ve anlaşmazlıklar için uzman desteği sağlıyoruz.",
      image: "images/uluslararasi_hukuk.jpg"
    }
  ];

  const settings = {
    dots: true, // Navigasyon noktalarını ekler
    infinite: true, // Sonsuz kaydırma sağlar
    speed: 500, // Kaydırma hızı
    slidesToShow: 4, // Ekranda aynı anda 4 öğe gösterir
    slidesToScroll: 1, // 1 adım kaydırma
    responsive: [
      {
        breakpoint: 1024, // 1024px ve altındaki ekranlar için
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // 768px ve altındaki ekranlar için
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // 480px ve altındaki ekranlar için
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="services" className="services">
      <h2>Çalışma Alanlarımız</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Services;

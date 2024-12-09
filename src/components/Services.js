import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Services.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function Services() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([ 
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([ 
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  const services = [
    {
      title: "Ceza Hukuku Hizmeti",
      description: "Suçlamalarla karşı karşıya kaldığınızda, uzman ceza hukuku avukatlarımız sizin için savunma yapacaktır. Haksız yere suçlanmamanız, adil bir yargılama sürecine girebilmeniz için yanınızdayız. Hırsızlık, dolandırıcılık, cinayet gibi ağır suçlamalarda savunmanızı yaparken, hakkınız olan en iyi sonucu almak için çalışıyoruz.",
      image: "images/ceza_hukuku.jpg",
    },
    {
      title: "Aile Hukuku Hizmeti",
      description: "Boşanma, mal paylaşımı, çocukların velayeti gibi hassas konularda hukuki desteğe mi ihtiyacınız var? Aile hukuku avukatlarımız, en zor dönemlerinizde size rehberlik eder. Hedefimiz, sizin ve ailenizin en iyi şekilde çözüm bulabilmesidir.",
      image: "images/aile_hukuku.jpg",
    },
    {
      title: "İş Hukuku Hizmeti",
      description: "İş yerinde yaşadığınız hak ihlallerini ortadan kaldırmak için iş hukuku uzmanlarımız yanınızda. Çalışan hakları, tazminat davaları, iş güvenliği gibi birçok konuda sizinle birlikte hareket ederek adil bir çözüm buluyoruz. İş yerindeki sorunlarınızı hukuki zeminde çözebilirsiniz.",
      image: "images/is_hukuku.jpg",
    },
    {
      title: "Ticaret Hukuku Hizmeti",
      description: "İşletmenizin yasal süreçlerini güvenle yönetin. Ticaret hukuku avukatlarımız, ticari sözleşmelerden, şirket birleşmelerine kadar her aşamada size profesyonel rehberlik sağlar. Ticaret hayatındaki hukuki meselelerde size en iyi çözümü sunarız.",
      image: "images/ticaret_hukuku.jpg",
    },
    {
      title: "İcra ve İflas Hukuku Hizmeti",
      description: "Alacaklarınızı tahsil etmekte zorlanıyor musunuz? İcra ve iflas hukuku hizmetimiz, borçlulara karşı haklarınızı savunmak, icra takibi başlatmak ve iflas süreçlerini yönetmek için size yol gösterir. Borç ödeme süreçlerini hukuki çerçevede en iyi şekilde yönetmenize yardımcı oluruz.",
      image: "images/icra_iflas_hukuku.jpg",
    },
    {
      title: "Gayrimenkul Hukuku Hizmeti",
      description: "Gayrimenkul alım satım süreçlerinde yaşadığınız hukuki sorunları profesyonel bir şekilde çözüyoruz. Tapu işlemleri, kira sözleşmeleri, imar sorunları ve diğer gayrimenkul hukuku konularında müvekkillerimize güvenli ve hukuki destek sağlıyoruz.",
      image: "images/gayrimenkul_hukuku.jpg",
    },
    {
      title: "Tüketici Hukuku Hizmeti",
      description: "Tüketici haklarınızı savunuyoruz. Satın aldığınız bir ürün ya da hizmetin, yasal şartları taşımaması durumunda sizi koruyoruz. Tüketici sözleşmeleri, garanti ve iade talepleri gibi konularda müvekkillerimize hukuki rehberlik sunuyoruz.",
      image: "images/tuketici_hukuku.jpg",
    },
    {
      title: "Vergi Hukuku Hizmeti",
      description: "Vergi yükümlülüklerinizle ilgili sorunlarınızda size yardımcı oluyoruz. Vergi daireleriyle olan anlaşmazlıklar, vergi borçları, vergi incelemeleri ve davalarına karşı sizi savunuyoruz. Yasal haklarınızı savunarak en iyi çözümü sağlıyoruz.",
      image: "images/vergi_hukuku.jpg",
    },
    {
      title: "Miras Hukuku Hizmeti",
      description: "Miras paylaşımı ve miras hukuku konularında ortaya çıkan anlaşmazlıklarda uzman desteği alabilirsiniz. Miras sözleşmeleri, vasiyetname düzenlemeleri, miras paylaşımları gibi hassas konularda müvekkillerimize yardımcı oluyoruz.",
      image: "images/miras_hukuku.jpg",
    },
    {
      title: "Sağlık Hukuku Hizmeti",
      description: "Sağlık hizmetleriyle ilgili yaşadığınız hukuki sorunlarda yanınızdayız. Tıbbi hatalar, sağlık sigortası anlaşmazlıkları, hastane hizmetleriyle ilgili yaşadığınız problemler için müvekkillerimize hukuki çözümler sunuyoruz.",
      image: "images/saglik_hukuku.jpg",
    },
    {
      title: "Fikri Mülkiyet Hukuku Hizmeti",
      description: "İnovasyon ve yaratıcılığınızı hukuki olarak koruyoruz. Patent, marka, tasarım ve telif hakları gibi fikri mülkiyet haklarınızı koruma altına almak ve bu alanda hukuki düzenlemeleri yapmak için hizmet veriyoruz.",
      image: "images/fikri_mulkiyet_hukuku.jpg",
    },
    {
      title: "Uluslararası Hukuk Hizmeti",
      description: "Uluslararası alandaki hukuki işlemler ve anlaşmazlıklar için uzman desteği sağlıyoruz. Yabancı yatırımcılar, uluslararası ticaret ve yurt dışı işlemler ile ilgili her türlü hukuki desteği sunarak müvekkillerimizin global alandaki hukuki sorunlarını çözüyoruz.",
      image: "images/uluslararasi_hukuk.jpg",
    },


  ];

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div id='services' className="services">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

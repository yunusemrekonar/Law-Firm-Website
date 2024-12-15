import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Services.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet'; 

const Services = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const services = [
    { title: "Ceza Hukuku Hizmeti", image: "images/ceza_hukuku.jpg", alt: "Ankara Ceza hukuku avukati - Savunma ve sucluluk durumlari" },
    { title: "Aile Hukuku Hizmeti", image: "images/aile_hukuku.jpg", alt: "Ankara Aile hukuku avukati - Bosanma, velayet, nafaka" },
    { title: "İş Hukuku Hizmeti", image: "images/is_hukuku.jpg", alt: "Ankara Is hukuku avukati - Calisan haklari ve is sozlesmeleri" },
    { title: "Ticaret Hukuku Hizmeti", image: "images/ticaret_hukuku.jpg", alt: "Ankara Ticaret hukuku avukati - Sirket kurma ve ticaret sozlesmeleri" },
    { title: "İcra ve İflas Hukuku Hizmeti", image: "images/icra_iflas_hukuku.jpg", alt: "Ankara Icra ve iflas hukuku avukati - Borc odeme ve alacak tahsili" },
    { title: "Gayrimenkul Hukuku Hizmeti", image: "images/gayrimenkul_hukuku.jpg", alt: "Ankara Gayrimenkul hukuku avukati - Satis, kira ve tapu islemleri" },
    { title: "Tüketici Hukuku Hizmeti", image: "images/tuketici_hukuku.jpg", alt: "Ankara Tuketici hukuku avukati - Satis alma, garanti ve cayma hakki" },
    { title: "Vergi Hukuku Hizmeti", image: "images/vergi_hukuku.jpg", alt: "Ankara Vergi hukuku avukati - Vergi odemeleri ve yasal duzenlemeler" },
    { title: "Miras Hukuku Hizmeti", image: "images/miras_hukuku.jpg", alt: "Ankara Miras hukuku avukati - Miras paylasimi ve vasiyetname islemleri" },
    { title: "Sağlık Hukuku Hizmeti", image: "images/saglik_hukuku.jpg", alt: "Ankara Saglik hukuku avukati - Saglik hizmetleri, tibbi sorumluluk" },
    { title: "Fikri Mülkiyet Hukuku Hizmeti", image: "images/fikri_mulkiyet_hukuku.jpg", alt: "Ankara Fikri mulkiyet hukuku avukati - Patent, telif ve marka haklari" },
    { title: "Uluslararası Hukuk Hizmeti", image: "images/uluslararasi_hukuk.jpg", alt: "Ankara Uluslararasi hukuk avukati - Sinir otesi anlasmazliklar ve sozlesmeler" }
  ];

  return (
    <>
    <Helmet>
        <meta name="description" content="Konar Hukuk & Danismanlik olarak, Ankara ceza avukati, Ankara aile avukati, Ankara iş avukati, Ankara ticaret avukati, Ankara icra avukati, Ankara gayrimenkul avukati ve daha birçok alanda uzmanlaşmis avukatlik hizmetleri sunuyoruz." />
        <meta name="keywords" content=" Ankara bosanma avukati,ceza hukuku avukati ankara, aile hukuku avukati ankara, iş hukuku avukati ankara, ticaret hukuku avukati ankara, icra ve iflas hukuku avukati ankara, gayrimenkul hukuku avukati ankara, vergi hukuku avukati ankara, miras hukuku avukati ankara, saglik hukuku avukati ankara, fikri mülkiyet hukuku avukati ankara, uluslararasi hukuk avukati ankara, avukatlik hizmetleri avukati ankara" />
        <meta name="author" content="Avukat Ayşenur Konar" />
      </Helmet>
    <div className='service-container'>
      <h2>Çalışma Alanlarımız</h2>
      <Swiper
        onSwiper={setSwiperRef}
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
        breakpoints={{
          1024: {
            slidesPerView: 3,  
          },
          768: {
            slidesPerView: 2,  
          },
          480: {
            slidesPerView: 1,  
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div id='ankara-avukat-calisma-alanlarimiz' className="services">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
    
  );
}
export default Services;
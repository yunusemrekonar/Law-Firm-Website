import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Services.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Heading2 } from 'lucide-react';

export default function Services() {
  const [swiperRef, setSwiperRef] = useState(null);

  const services = [
    { title: "Ceza Hukuku Hizmeti", image: "images/ceza_hukuku.jpg" },
    { title: "Aile Hukuku Hizmeti", image: "images/aile_hukuku.jpg" },
    { title: "İş Hukuku Hizmeti", image: "images/is_hukuku.jpg" },
    { title: "Ticaret Hukuku Hizmeti", image: "images/ticaret_hukuku.jpg" },
    { title: "İcra ve İflas Hukuku Hizmeti", image: "images/icra_iflas_hukuku.jpg" },
    { title: "Gayrimenkul Hukuku Hizmeti", image: "images/gayrimenkul_hukuku.jpg" },
    { title: "Tüketici Hukuku Hizmeti", image: "images/tuketici_hukuku.jpg" },
    { title: "Vergi Hukuku Hizmeti", image: "images/vergi_hukuku.jpg" },
    { title: "Miras Hukuku Hizmeti", image: "images/miras_hukuku.jpg" },
    { title: "Sağlık Hukuku Hizmeti", image: "images/saglik_hukuku.jpg" },
    { title: "Fikri Mülkiyet Hukuku Hizmeti", image: "images/fikri_mulkiyet_hukuku.jpg" },
    { title: "Uluslararası Hukuk Hizmeti", image: "images/uluslararasi_hukuk.jpg" },
  ];

  return (
    <>
      <h2 className='myheading'>Çalışma Alanlarımız</h2>
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
            slidesPerView: 3,  // 1024px ve üstü için 3 slide
          },
          768: {
            slidesPerView: 2,  // 768px ile 1024px arasında 2 slide
          },
          480: {
            slidesPerView: 1,  // 480px ve altı için 1 slide
          },
        }}
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

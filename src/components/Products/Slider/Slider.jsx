

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay } from "swiper/modules";

function Slider({ image }) {
  return (
    <div className="container">
      <Swiper
        // slidesPerView={4}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        data-aos="fade-up"
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true, 
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true, 
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true, 
          },
        }}
      >
        <SwiperSlide className="swiperSlide">
          <img src={image} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={image} alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={image} alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={image} alt="Image 4" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={image} alt="Image 5" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={image} alt="Image 6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;


import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(()=> {
      AOS.init();
    }, [])
    return (
        <div className='w-11/12 px-16' data-aos="fade-down" data-aos-duration="1500">
            <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1.5}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img className='rounded-lg' src="images/first.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg' src="images/second.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg' src="images/third.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg' src="images/fourth.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Banner;
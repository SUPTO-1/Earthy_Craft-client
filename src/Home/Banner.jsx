import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Banner = () => {
    return (
        <div className='sm:w-full md:w-11/12 mx-auto md:px-16' data-aos="fade-down" data-aos-duration="1500">
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
        <img  className='rounded-lg' src="images/first.jpg" alt="" />
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
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BannerCarousel = () => {
  return (
    <div>
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            breakpoints={{
                1024: {
                slidesPerView: 1.29,
                spaceBetween: 30
                },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BannerCarousel

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';
import styles from "../../styles/components/sliders/bannerSliders.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import BannerCard from '../cards/BannerCard';
import ArrowLeftBanner from '@/svg/ArrowLeftBanner';
import ArrowRightBanner from '@/svg/ArrowRightBanner';

const BannerSliders = (sliders) => {
  return (
    <section className={styles.sliders}>
        <Swiper
            modules={[Navigation, Autoplay]}
            speed={1000}
            autoplay={{
              delay:4000,
              disableOnInteraction: false
            }}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: `.${styles.cardsLeftButton}`,
              nextEl: `.${styles.cardsRightButton}`,
            }}
            breakpoints={{
                1024: {
                slidesPerView: 1.29,
                spaceBetween: 30
                },
            }}
        >
          {(sliders.sliders!==null && sliders.sliders.length>0) && sliders?.sliders?.map((slider, index)=> (
            <SwiperSlide key={index}>
              <BannerCard url={slider.button_url} bannerPicture={slider.image}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={`${styles.cardsLeftButton} ${styles.swiperButton}`}>
          <ArrowLeftBanner/>
        </button>
        <button className={`${styles.cardsRightButton} ${styles.swiperButton}`}>
          <ArrowRightBanner/>
        </button>
    </section>
  )
}

export default BannerSliders

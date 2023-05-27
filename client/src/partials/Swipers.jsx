import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper";

export const Swipers = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                touchEventsTarget="swiper"
                centeredSlides={true}
                autoplay={{
                    delay: 3700,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                navigation={{disableOnInteraction: false}}
                className="relative flex rounded-lg sm:rounded-3xl justify-center max-w-[1024px] max-h-[504px] items-center aos-init aos-animate"
            >
                <SwiperSlide><img className="mx-auto" src='/images/pexels-bd.webp' alt="Mujer de Boda" /></SwiperSlide>
                <SwiperSlide><img className="mx-auto" src='/images/pexels-fs.webp' alt="Fiesta o reunion" /></SwiperSlide>
                <SwiperSlide><img className="mx-auto" src='/images/pexels-xv.webp' alt="Quinceañera" /></SwiperSlide>
            </Swiper>
        </>
    );
}

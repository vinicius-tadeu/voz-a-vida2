import React from "react";
import "./Supporters.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
const Supporters: React.FC = () => {
  return (
    <section className="sectionSupporters" id="Supporters">
      <div className="bg_Supporters">
        <img className="bg_bubles" src="/bubles.svg" alt="Bolhas"/>
        <div className="wavesSupporters">
          <img className="bg_waves" src="/waves.svg" alt="Waves" />
          <img className="bg_waves secondy" src="/waves.svg" alt="Waves" />
        </div>
      </div>
      <div className="wrapperSupporters">
        <h2>Apoiadores</h2>
        <div className="shadows">
        <Swiper
           modules={[Autoplay, EffectFade]}
           loop={true}
           effect="cube"
           autoplay={{
            delay:2000,
            disableOnInteraction:false
           }}
           spaceBetween={50}
           slidesPerView={1}
           className="mySwiper"
        >
          <SwiperSlide>
            <img className="carouselImgs" src="/Catolica_logo.svg" alt="Logo católica"/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="carouselImgs" src="/Audiomix_logo.svg" alt="Logo Audiomix."/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="carouselImgs" src="/Pronto_Sam.svg" alt="Logo Pronto Sam."/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="carouselImgs" src="/Opostos_Perfeitos.svg" alt="Logo Opostos Perfeitos."/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="carouselImgs" src="/Arco_do_sorriso.svg" alt="Logo Arco do sorriso."/>
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Supporters;

// Carousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  slides: string[];
}

function Carousel({ slides }: Props) {
  const slidesCount = slides.length;

  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      slidesPerView={"auto"}
      centeredSlides
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      initialSlide={1} // Ustawiamy początkowy slajd na ostatni
    //   loop={true} // Ustawiamy pętlę dla niekończącego się przewijania
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner">
          <img src={slide} alt="" />
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <img src="/img/left-arrow.png" alt="Left" />
      </div>
      <div className="button-next">
        <img src="/img/right-arrows.png" alt="Right" />
      </div>
    </Swiper>
  );
}

export default Carousel;

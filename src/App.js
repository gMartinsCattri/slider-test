import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
  const iframeSource = '<iframe  src="https://static.3dwayfinder.com/projects/680ebd4ea2ae574f7ade24362495555e/Default/"></iframe>'


  return (
    <div className="container">
      
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={false}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"  data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/ferrari.jpg" class=" image-carrusel d-block w-100" alt="..."></img>
      <p>image 1</p>
    </div>
    <div class="carousel-item">
      <img src="images/ferrari2.jpg" class=" image-carrusel d-block w-100" alt="..."></img>
      <p>image 1</p>
    </div>
    <div class="carousel-item">
      <img src="images/ferrari3.jpg" class=" image-carrusel d-block w-100" alt="..."></img>
      <p>image 1</p>
    </div>
  </div>
  
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div>
        </SwiperSlide>
        
       
      </Swiper>
    </div>
  );
}

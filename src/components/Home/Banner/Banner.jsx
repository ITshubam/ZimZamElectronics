import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/black_headphones.png";
import img2 from "../../../assets/headphone_21.png";
import "./Banner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// Important required modules
import { Autoplay, Scrollbar } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner_main">
      <Swiper
        scrollbar={{ hide: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="container-fluid Banner_1 py-5">
            <div className="container gx-0">
              <div className="row gx-0 align-items-center">
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="banner_col1 pt-md-4">
                    <h6 className="Main_lable pb-3">
                      <i className="fa-solid fa-star"></i>Top Products Of The Month</h6>
                    <h1>
                     Micropack MHP Headphones Black
                    </h1>
                    <p className="py-3">
                      Discover optimal well-being through tailored exercises.
                      Achieve a healthy body with our expert guidance,
                      personalized routines, and transformative fitness solutions.
                    </p>
                    <div className="banner_btns">
                      <button className="main_btn1">Shop Now</button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="banner_col2">
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="container-fluid Banner_2 py-5">
            <div className="container gx-0">
              <div className="row gx-0 align-items-center">
                <div
                  className="col-md-12 col-lg-6 order-md-2"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="banner_col1 pt-md-4">
                  <h6 className="Main_lable pb-3">
                      <i className="fa-solid fa-star"></i>Top Products Of The Month</h6>
                    <h1>
                     Micropack MHP Headphones Black
                    </h1>
                    <p className="py-3">
                      Elevate your listening experience with cutting-edge headphones.
                      Enjoy crystal-clear sound, sleek design, and unmatched comfort.
                    </p>
                    <div className="banner_btns">
                      <button className="main_btn1">Shop Now</button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="banner_col2">
                    <img src={img2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

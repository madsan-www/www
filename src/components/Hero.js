import * as React from "react";
import HeroData from "../../data/homePage.json";
import LocalizedLink from "../components/LocalizedLink";
import { useLocale } from "../hooks/locale";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;
  const data = isDefaultLang ? HeroData.tr : HeroData.en;

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 0,
    autoplay: true,
    pauseOnHover: true
  };

  return (
    <>
      <section className="home-slider position-relative">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={`${index}`} className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={3000}>
                  <div
                    className="bg-home d-flex align-items-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    {item.onlyBanner ? null : <div className="bg-overlay" />}
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col">
                          <div
                            className="title-heading position-relative mt-4 text-center"
                            style={{ zIndex: 1 }}
                          >
                            {item.onlyBanner ? null : (
                              <>
                                <h1 className="fw-bold display-4 text-white title-dark mb-3">
                                  {item.title}
                                </h1>
                                <p className="para-desc mx-auto text-white-50">
                                  {item.description}
                                </p>
                                <div className="mt-4 pt-2">
                                  <LocalizedLink
                                    to={item.cta_link}
                                    className="btn btn-primary"
                                  >
                                    {item.cta_button}
                                  </LocalizedLink>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Hero;

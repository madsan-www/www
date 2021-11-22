import * as React from "react";
import TestimonalsData from "../../data/homeTestimonials.json";
// import LocalizedLink from "../components/LocalizedLink";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocale } from "../hooks/locale";

function Testimonials() {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const title = isDefaultLang
    ? TestimonalsData.contentTR.title
    : TestimonalsData.contentENG.title;
  const desc = isDefaultLang
    ? TestimonalsData.contentTR.desc
    : TestimonalsData.contentENG.desc;

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4 text-uppercase">{title}</h4>
                <p className="text-muted mx-auto para-desc">{desc}</p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row justify-content-center">
            <div className="col-lg-12 mt-6">
              <div className="">
                <Slider {...settings}>
                  {TestimonalsData.clients.map((client, index) => (
                    <div key={`_${index}`} >
                      <div className="d-flex client-testi m-2">
                        <img
                          src={client.image}
                          className="avatar avatar-small client-image rounded shadow"
                          alt={client.name}
                        />
                        <div className="flex-1 content p-5 shadow-sm rounded bg-white position-relative">

                          <p className="text-muted mt-2">
                            {isDefaultLang ? client.quote : client.quoteENG}
                          </p>
                          <h6 className="text-primary">
                            - {client.name}{" "}
                            {client.title ? (
                              <small className="text-muted">
                                {client.title}
                              </small>
                            ) : null}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Testimonials;

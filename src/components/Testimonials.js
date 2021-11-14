import * as React from "react";
import TestimonalsData from "../../data/homeTestimonials.json";
// import LocalizedLink from "../components/LocalizedLink";
import { useLocale } from "../hooks/locale";
// import TinySlider from "tiny-slider-react";

function Testimonials() {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;

  const title = isDefaultLang
    ? TestimonalsData.contentTR.title
    : TestimonalsData.contentENG.title;
  const desc = isDefaultLang
    ? TestimonalsData.contentTR.desc
    : TestimonalsData.contentENG.desc;

  const settings = {
    lazyload: true,
    nav: true,
    mouseDrag: true,
    controls: false
  };
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">{title}</h4>
                <p className="text-muted mx-auto para-desc">{desc}</p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row justify-content-center">
            <div className="col-lg-12 mt-4">
              <div className="tiny-three-item">
                {/* <TinySlider settings={settings}> */}
                  {TestimonalsData.clients.map((client, index) => (
                    <div key={`_${index}`} className="tiny-slide">
                      <div className="d-flex client-testi m-2">
                        <img
                          src={client.image}
                          className="avatar avatar-small client-image rounded shadow"
                          alt={client.name}
                        />
                        <div className="flex-1 content p-5 shadow-sm rounded bg-white position-relative">
                          <ul className="list-unstyled mb-0">
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning" />
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning" />
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning" />
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning" />
                            </li>
                            <li className="list-inline-item">
                              <i className="mdi mdi-star text-warning" />
                            </li>
                          </ul>
                          <p className="text-muted mt-2">
                            {isDefaultLang ? client.quote : client.quoteENG}
                          </p>
                          <h6 className="text-primary">
                            - {client.name} {' '}
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
                {/* </TinySlider> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Testimonials;

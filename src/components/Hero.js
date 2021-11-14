import * as React from "react";
import HeroData from "../../data/homePage.json";
import LocalizedLink from "../components/LocalizedLink";
import { useLocale } from "../hooks/locale";

function Hero() {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;
  const data = isDefaultLang ? HeroData.tr[0] : HeroData.en[0];

  const heroTitle = data.title;
  const heroDescription = data.description;
  const heroCtaButton = data.cta_button;
  const heroCtaLink = data.cta_link;

  const heroImage = HeroData.commons[0].background_image
    ? HeroData.commons[0].background_image
    : null;

  return (
    <>
      <section className="home-slider position-relative">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={3000}>
              <div
                className="bg-home d-flex align-items-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              >
                <div className="bg-overlay" />
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col">
                      <div
                        className="title-heading position-relative mt-4 text-center"
                        style={{ zIndex: 1 }}
                      >
                        <h1 className="fw-bold display-4 text-white title-dark mb-3">
                          {heroTitle}
                        </h1>
                        <p className="para-desc mx-auto text-white-50">
                          {heroDescription}
                        </p>
                        <div className="mt-4 pt-2">
                          <LocalizedLink
                            to={heroCtaLink}
                            className="btn btn-primary"
                          >
                            {heroCtaButton}
                          </LocalizedLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

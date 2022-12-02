import * as React from "react";
// import LocalizedLink from "../components/LocalizedLink";
import HomeAboutData from "../../data/homeAbout.json";
import { useLocale } from "../hooks/locale";

function AboutHome() {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;
  const data = isDefaultLang ? HomeAboutData.tr[0] : HomeAboutData.en[0];

  const Title = data.title;
  const Uptitle = data.upTitle;
  const Description = data.description;
  const CtaButton = data.cta_button;
  const CtaLink = data.cta_link;

  const Image = HomeAboutData.commons.image
    ? HomeAboutData.commons.image
    : null;

  return (
    <>
      <div className="container mt-60 mb-100">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="position-relative">
              <img
                src={Image}
                className="rounded img-fluid mx-auto d-block"
                alt={Title}
              />
            </div>
          </div>

          <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="section-title ms-lg-4">
              <h6>{Uptitle}</h6>
              <h4 className="title mb-4">{Title}</h4>
              <p className="text-muted">
               {Description}
              </p>
{CtaLink &&  <a href={CtaLink} target="_blank"  className="btn btn-primary mt-3">
              {CtaButton}<i className="uil uil-angle-right-b" />
              </a>
}
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHome;

import * as React from "react";
import PartnersLogos from "../../data/homePartnerLogos.json";
import { useLocale } from "../hooks/locale";

function Partners() {

  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;
  const title = isDefaultLang ? PartnersLogos.content.title : PartnersLogos.content.titleEng;

  return (
    <>
      <div className="container mt-100">
        <div className="title-heading ms-lg-4 text-center">
        <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4 text-uppercase">{title}</h4>
              </div>
            </div>
            {/*end col*/}
          </div>
        </div>
        <div className="row justify-content-center">
          {PartnersLogos.Logos.map((logo, index) => (
            <div
              key={`_${index}`}
              className="col-lg-2 col-md-2 col-6 text-center py-4"
            >
              <img
                src={logo.image}
                className="avatar avatar-large"
                alt={logo.client}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Partners;

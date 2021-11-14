import * as React from "react";
import LocalizedLink from "../components/LocalizedLink";
import HomeCTAData from "../../data/homeCta.json";
import { useLocale } from "../hooks/locale";

function Cta() {

  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;
  const data = isDefaultLang ? HomeCTAData.tr : HomeCTAData.en;

  const Title = data.title;
  const Desc = data.description;
  const CTAButton = data.cta_button;
  const CTALink = data.cta_link;

  const Image = HomeCTAData.commons.background_image
    ? HomeCTAData.commons.background_image
    : null;


  return (
  <section
    className="section bg-cta mt-5 mb-5"
    style={{ backgroundImage: `url(${Image})` }}
  >
    <div className="bg-overlay" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="title-heading">
            <h4 className="heading title-dark text-white my-4">
            {Title}
            </h4>
            <p className="text-white-50 para-dark para-desc mx-auto">
            {Desc}
            </p>
            <div className="mt-4 pt-2">
              <LocalizedLink to={CTALink} className="btn btn-primary">
               {CTAButton}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Cta;

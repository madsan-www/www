import * as React from "react";
import LocalizedLink from "../components/LocalizedLink";
import CtaBasicData from "../../data/cta.json";
import { useLocale } from "../hooks/locale";

function CtaBasic() {

  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;
  const data = isDefaultLang ? CtaBasicData.tr : CtaBasicData.en;

  const Title = data.title;
  const Desc = data.description;
  const CTAButton = data.cta_button;
  const CTALink = data.cta_link;

  return (
    <>
      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <h4 className="title mb-4">{Title}</h4>
              <p className="text-muted para-desc mx-auto">{Desc}</p>
              <div className="mt-4">
                <LocalizedLink
                  to={CTALink}
                  className="btn btn-primary mt-2 me-2"
                >
                 {CTAButton}
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaBasic;

import * as React from "react";
import FeaturesData from "../../data/homeFeatures.json";
import LocalizedLink from "../components/LocalizedLink";
import { useLocale } from "../hooks/locale";

function Features() {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;
  const data = isDefaultLang ? FeaturesData.tr : FeaturesData.en;

  return (
    <>
      <section className="section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="features-absolute">
                <div className="row g-2">
                  {data.map((items, index) => (
                    <div key={`_${index}`} className="col-md-4 col-12">
                      <LocalizedLink
                        to={items.cta_link}
                        className="readmore text-dark"
                      >
                        <div className="card features fea-primary rounded shadow p-4 bg-white position-relative overflow-hidden border-0">
                          <span className="h2 icon2 text-primary">
                            <i className="uil uil-truck" />
                          </span>
                          <div className="card-body p-0 content">
                            <h5 className="mb-3">{items.title}</h5>
                            <p className="para text-muted mb-3">
                              {items.description}
                            </p>
                            <LocalizedLink
                              to={items.cta_link}
                              className="readmore text-dark"
                            >
                              {items.cta_button}
                              <i className="uil uil-angle-right align-middle" />
                            </LocalizedLink>
                          </div>
                          <div className="position-absolute top-0 end-0">
                            <i className="uil uil-truck display-1 opacity-05" />
                          </div>
                        </div>
                      </LocalizedLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;

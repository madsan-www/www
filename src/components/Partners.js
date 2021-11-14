import * as React from "react";
import PartnersLogos from "../../data/homePartnerLogos.json";

const Partners = () => (
  <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        {PartnersLogos.Logos.map((logo, index) => (
          <div
            key={`_${index}`}
            className="col-lg-2 col-md-2 col-6 text-center py-4"
          >
            <img
              src={logo.image}
              className="avatar avatar-medium "
              alt={logo.client}
            />
          </div>
        ))}
      </div>
    </div>
    <>
      <div className="container-fluid mt-100 mt-60">
        <div
          className="py-5"
          style={{
            background:
              'url("https://res.cloudinary.com/madsan/image/upload/v1636198143/web-assets/svg-map_yfgz9z.svg")'
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <span className="clip-text clip-text-image text-uppercase fw-bold">
                  Madsan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  </>
);

export default Partners;

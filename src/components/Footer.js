import * as React from "react";
import LocalizedLink from "./LocalizedLink";
import FooterData from "../../data/footer.json";
import { useLocale } from "../hooks/locale";
import { PinMapFill, EnvelopeFill, Phone } from "react-bootstrap-icons";
import useMenu from "./useMenu";

function Footer() {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;
  const data = isDefaultLang ? FooterData.tr : FooterData.en;
  const phoneData = FooterData.phones
  const addressData = FooterData.addresses
  const menuItems = useMenu();

  return (
    <>
      <footer className="footer mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="footer-py-60 text-center">
                <div className="row py-5">
                  {data.map((items, index) => (
                    <div key={`_${index}`} className="col-md-4 mt-5">
                      <div className="card border-0 text-center features feature-clean bg-transparent">
                        <div className="icons text-primary text-center mx-auto">
                          {items.icon === "phone" ? (
                            <Phone className="uil uil-phone d-block rounded h3 mb-0" />
                          ) : null}
                          {items.icon === "envelope" ? (
                            <EnvelopeFill className="uil uil-phone d-block rounded h3 mb-0" />
                          ) : null}
                          {items.icon === "map" ? (
                            <PinMapFill className="uil uil-phone d-block rounded h3 mb-0" />
                          ) : null}
                        </div>
                        <div className="content mt-4">
                          <h5 className="footer-head">{items.title}</h5>
                          {items.description && <p className="text-muted">{items.description}</p>}

                             {items.icon === 'phone' ? phoneData.map((phone, index) => (
                                <ul className="p-lg-1">
                                  <li className="list-unstyled text-center">
                                    <a
                                      href={phone.url}
                                      className="text-muted  text-center footerLink"
                                      key={`_${index}`}
                                    >
                                      {phone.link}
                                    </a>
                                  </li>
                                </ul>
                              ))
                           : null }
                           {items.icon === 'map' ? addressData.map((item, index) => (
                                <ul className="p-lg-1">
                                  <li className="list-unstyled text-center">
                                    <a
                                      href={item.url}
                                      className="text-muted  text-center footerLink"
                                      key={`_${index}`}
                                    >
                                      {item.link}
                                    </a>
                                  </li>
                                </ul>
                              ))
                           : null }
                          <a
                            href={items.url}
                            target="_blank"
                            rel="noopener"
                            className="text-foot"
                            
                          >
                            {items.link}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="footer-py-30 footer-bar bg-footer">
          <div className="container text-center">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-3 col-md-2 col-sm-3">
                <div className="text-sm-start">
                  <LocalizedLink to="/" className="logo-footer">
                    <img
                      src="https://res.cloudinary.com/madsan/image/upload/v1636883915/logo/madsan-favicon_dzrcyb.png"
                      alt="Madsan"
                      height={34}
                    />
                  </LocalizedLink>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled footer-list terms-service mb-0">
                  {menuItems.map((menu, index) => (
                    <li key={`${index}`} className="list-inline-item mb-0">
                      <LocalizedLink
                        to={menu.link}
                        aria-label={menu.name}
                        className="text-foot me-2"
                        activeClassName="active"
                        key={`${menu.link}${index}`}
                      >
                        {menu.name}
                      </LocalizedLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/*end col*/}
              <div className="col-lg-3 col-md-4 col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="text-sm-end">
                  <p className="mb-0 text-foot">
                    © <span className="text-reset">Madsan</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

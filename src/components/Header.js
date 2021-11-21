import React from "react";
import LocalizedLink from "../components/LocalizedLink";
import { Translate } from "react-bootstrap-icons";
import Languages from "../components/Languages";
import useMenu from "./useMenu";

function Header() {
  const menuItems = useMenu();
  return (
    <header id="topnav" className="defaultscroll sticky bg-white">
      <div className="container">
        {/* Logo container*/}
        <LocalizedLink className="Madsan logo" to="/">
          <span className="logo-light-mode">
            <img
              src="https://res.cloudinary.com/madsan/image/upload/v1636195051/logo/madsan-logo-slogan_lhry8s.svg"
              className="l-dark"
              alt
              height={24}
            />
            <img
              src="https://res.cloudinary.com/madsan/image/upload/v1636195051/logo/madsan-logo-slogan_lhry8s.svg"
              className="l-light"
              alt
              height={80}
            />
          </span>
          {/* <img
          src="images/logo-light.png"
          className="logo-dark-mode"
          alt
          height={24}
        /> */}
        </LocalizedLink>
        {/* End Logo container*/}
        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle*/}
            <a className="navbar-toggle" id="isToggle" onclick={"customToggle"}>
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </a>
            {/* End mobile menu toggle*/}
          </div>
        </div>

        <div id="navigation ">
          {/* Navigation Menu*/}
          <ul className="navigation-menu">
            {menuItems.map((menu, index) => (
              <li key={`${index}`} className="contents">
                <LocalizedLink
                  to={menu.link}
                  aria-label={menu.name}
                  activeClassName="active"
                  key={`${menu.link}${index}`}
                >
                  {menu.name}
                </LocalizedLink>
                {menu.badge ? (
                  <span className="relative inline-block ml-8">
                    <span className="absolute top-0 right-9 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full" />
                  </span>
                ) : null}
              </li>
            ))}
            <li className="has-submenu parent-parent-menu-item ">
              <a
                href="javascript:void(0)"
                className="d-flex gap-2 align-items-center"
              >
                {" "}
                <Translate className="h6 mr-5 rounded mb-0" />
                Languages
              </a>
              <span className="menu-arrow" />
              <ul className="submenu ">
                <Languages />
              </ul>
            </li>
            {/* <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Landing</a>
              <span className="menu-arrow" />
              <ul className="submenu megamenu">
                <li>
                  <ul>
                    <li>
                      <a href="index-saas.html" className="sub-menu-item">
                        Saas
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-classic-saas.html"
                        className="sub-menu-item"
                      >
                        Classic Saas
                      </a>
                    </li>
                    <li>
                      <a href="index-agency.html" className="sub-menu-item">
                        Agency
                      </a>
                    </li>
                    <li>
                      <a href="index-apps.html" className="sub-menu-item">
                        Application
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-classic-app.html"
                        className="sub-menu-item"
                      >
                        Classic Application
                      </a>
                    </li>
                    <li>
                      <a href="index-studio.html" className="sub-menu-item">
                        Studio
                      </a>
                    </li>
                    <li>
                      <a href="index-marketing.html" className="sub-menu-item">
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a href="index-enterprise.html" className="sub-menu-item">
                        Enterprise
                      </a>
                    </li>
                    <li>
                      <a href="index-services.html" className="sub-menu-item">
                        Service
                      </a>
                    </li>
                    <li>
                      <a href="index-payments.html" className="sub-menu-item">
                        Payments
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="index-developer.html" className="sub-menu-item">
                        Developer
                      </a>
                    </li>
                    <li>
                      <a href="index-seo-agency.html" className="sub-menu-item">
                        SEO Agency
                      </a>
                    </li>
                    <li>
                      <a href="index-hospital.html" className="sub-menu-item">
                        Hospital
                      </a>
                    </li>
                    <li>
                      <a href="index-coworking.html" className="sub-menu-item">
                        Coworking
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-it-solution.html"
                        className="sub-menu-item"
                      >
                        IT Solution{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-it-solution-two.html"
                        className="sub-menu-item"
                      >
                        IT Solution Two{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index-business.html" className="sub-menu-item">
                        Business
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-modern-business.html"
                        className="sub-menu-item"
                      >
                        Modern Business
                      </a>
                    </li>
                    <li>
                      <a href="index-finance.html" className="sub-menu-item">
                        Finance{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index-logistics.html" className="sub-menu-item">
                        Delivery &amp; Logistics{" "}
                        <span className="mdi mdi-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="index-hotel.html" className="sub-menu-item">
                        Hotel
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-construction.html"
                        className="sub-menu-item"
                      >
                        Construction
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-real-estate.html"
                        className="sub-menu-item"
                      >
                        Real Estate
                      </a>
                    </li>
                    <li>
                      <a href="index-videocall.html" className="sub-menu-item">
                        Video Conference{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index-blockchain.html" className="sub-menu-item">
                        Blockchain{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index-crypto-two.html" className="sub-menu-item">
                        Cryptocurrency Two{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-integration.html"
                        className="sub-menu-item"
                      >
                        Integration
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-task-management.html"
                        className="sub-menu-item"
                      >
                        Task Management{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-email-inbox.html"
                        className="sub-menu-item"
                      >
                        Email Inbox{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index-travel.html" className="sub-menu-item">
                        Travel{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="index-insurance.html" className="sub-menu-item">
                        Insurance
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-online-learning.html"
                        className="sub-menu-item"
                      >
                        Online Learning
                      </a>
                    </li>
                    <li>
                      <a href="index-course.html" className="sub-menu-item">
                        Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-single-product.html"
                        className="sub-menu-item"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-social-marketing.html"
                        className="sub-menu-item"
                      >
                        Social Media
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-digital-agency.html"
                        className="sub-menu-item"
                      >
                        Digital Agency
                      </a>
                    </li>
                    <li>
                      <a href="index-car-riding.html" className="sub-menu-item">
                        Car Ride
                      </a>
                    </li>
                    <li>
                      <a href="index-customer.html" className="sub-menu-item">
                        Customer
                      </a>
                    </li>
                    <li>
                      <a href="index-software.html" className="sub-menu-item">
                        Software
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a
                        href="index-landing-one.html"
                        className="sub-menu-item"
                      >
                        Landing One{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-landing-two.html"
                        className="sub-menu-item"
                      >
                        Landing Two{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-landing-three.html"
                        className="sub-menu-item"
                      >
                        Landing Three{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="index-landing-four.html"
                        className="sub-menu-item"
                      >
                        Landing Four
                      </a>
                    </li>
                    <li>
                      <a href="index-personal.html" className="sub-menu-item">
                        Personal
                      </a>
                    </li>
                    <li>
                      <a href="index-freelancer.html" className="sub-menu-item">
                        Freelance{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index-event.html" className="sub-menu-item">
                        Event
                      </a>
                    </li>
                    <li>
                      <a href="index-ebook.html" className="sub-menu-item">
                        E-Book
                      </a>
                    </li>
                    <li>
                      <a href="index-onepage.html" className="sub-menu-item">
                        Saas{" "}
                        <span className="badge bg-warning ms-2">Onepage</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
            {/* <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Pages</a>
              <span className="menu-arrow" />
              <ul className="submenu">
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Company </a>
                  <span className="submenu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a href="page-aboutus.html" className="sub-menu-item">
                        {" "}
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="page-aboutus-two.html" className="sub-menu-item">
                        {" "}
                        About Us Two{" "}
                      </a>
                    </li>
                    <li>
                      <a href="page-services.html" className="sub-menu-item">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="page-history.html" className="sub-menu-item">
                        History{" "}
                      </a>
                    </li>
                    <li>
                      <a href="page-team.html" className="sub-menu-item">
                        {" "}
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="page-pricing.html" className="sub-menu-item">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Account </a>
                  <span className="submenu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a href="account-profile.html" className="sub-menu-item">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="account-members.html" className="sub-menu-item">
                        Members{" "}
                      </a>
                    </li>
                    <li>
                      <a href="account-works.html" className="sub-menu-item">
                        Works{" "}
                      </a>
                    </li>
                    <li>
                      <a href="account-messages.html" className="sub-menu-item">
                        Messages{" "}
                      </a>
                    </li>
                    <li>
                      <a href="account-chat.html" className="sub-menu-item">
                        Chat{" "}
                      </a>
                    </li>
                    <li>
                      <a href="account-payments.html" className="sub-menu-item">
                        Payments{" "}
                      </a>
                    </li>
                    <li>
                      <a href="account-setting.html" className="sub-menu-item">
                        Setting
                      </a>
                    </li>
                    <li>
                      <a href="page-invoice.html" className="sub-menu-item">
                        Invoice
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Email Template</a>
                  <span className="submenu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a
                        href="email-confirmation.html"
                        className="sub-menu-item"
                      >
                        Confirmation
                      </a>
                    </li>
                    <li>
                      <a
                        href="email-password-reset.html"
                        className="sub-menu-item"
                      >
                        Reset Password
                      </a>
                    </li>
                    <li>
                      <a href="email-alert.html" className="sub-menu-item">
                        Alert
                      </a>
                    </li>
                    <li>
                      <a href="email-invoice.html" className="sub-menu-item">
                        Invoice
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Blog </a>
                  <span className="submenu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a href="blog-grid.html" className="sub-menu-item">
                        Blog Grid
                      </a>
                    </li>
                    <li>
                      <a
                        href="blog-grid-sidebar.html"
                        className="sub-menu-item"
                      >
                        Blog with Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-list.html" className="sub-menu-item">
                        Blog Listing
                      </a>
                    </li>
                    <li>
                      <a
                        href="blog-list-sidebar.html"
                        className="sub-menu-item"
                      >
                        Blog List &amp; Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail.html" className="sub-menu-item">
                        Blog Detail
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail-two.html" className="sub-menu-item">
                        Blog Detail 2{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Case Study </a>
                  <span className="submenu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a href="page-cases.html" className="sub-menu-item">
                        All Cases{" "}
                      </a>
                    </li>
                    <li>
                      <a href="page-case-detail.html" className="sub-menu-item">
                        Case Detail{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="course-detail.html" className="sub-menu-item">
                    Course Detail <span className="mdi mdi-star text-warning" />{" "}
                  </a>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Auth Pages </a>
                  <span className="submenu-arrow" />
                  <ul className="submenu">
                    <li className="has-submenu parent-menu-item">
                      <a href="javascript:void(0)"> Login </a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="auth-login.html" className="sub-menu-item">
                            Login
                          </a>
                        </li>
                        <li>
                          <a
                            href="auth-cover-login.html"
                            className="sub-menu-item"
                          >
                            Login Cover
                          </a>
                        </li>
                        <li>
                          <a
                            href="auth-login-three.html"
                            className="sub-menu-item"
                          >
                            Login Simple
                          </a>
                        </li>
                        <li>
                          <a
                            href="auth-bs-login.html"
                            className="sub-menu-item"
                          >
                            BS5 Login{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu parent-menu-item">
                      <a href="javascript:void(0)"> Signup </a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="auth-signup.html" className="sub-menu-item">
                            Signup
                          </a>
                        </li>
                        <li>
                          <a
                            href="auth-cover-signup.html"
                            className="sub-menu-item"
                          >
                            Signup Cover
                          </a>
                        </li>
                        <li>
                          <a
                            href="auth-signup-three.html"
                            className="sub-menu-item"
                          >
                            Signup Simple
                          </a>
                        </li>
                        <li>
                          <a
                            href="auth-bs-signup.html"
                            className="sub-menu-item"
                          >
                            BS5 Singup{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu parent-menu-item">
                      <a href="javascript:void(0)"> Reset password </a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a
                            href="auth-re-password.html"
                            className="sub-menu-item"
                          >
                            Reset Password
                          </a>
                        </li>
                        <li>
                          <a
                            href="auth-cover-re-password.html"
                            className="sub-menu-item"
                          >
                            Reset Password Cover
                          </a>
                        </li>
                        <li>
                          <a
                            href="auth-re-password-three.html"
                            className="sub-menu-item"
                          >
                            Reset Password Simple
                          </a>
                        </li>
                        <li>
                          <a
                            href="auth-bs-reset.html"
                            className="sub-menu-item"
                          >
                            BS5 Reset Password{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Utility </a>
                  <span className="submenu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a href="page-terms.html" className="sub-menu-item">
                        Terms of Services
                      </a>
                    </li>
                    <li>
                      <a href="page-privacy.html" className="sub-menu-item">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Special</a>
                  <span className="submenu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a href="page-comingsoon.html" className="sub-menu-item">
                        Coming Soon
                      </a>
                    </li>
                    <li>
                      <a href="page-comingsoon2.html" className="sub-menu-item">
                        Coming Soon Two
                      </a>
                    </li>
                    <li>
                      <a href="page-maintenance.html" className="sub-menu-item">
                        Maintenance
                      </a>
                    </li>
                    <li>
                      <a href="page-error.html" className="sub-menu-item">
                        Error
                      </a>
                    </li>
                    <li>
                      <a href="page-thankyou.html" className="sub-menu-item">
                        Thank you
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Contact </a>
                  <span className="submenu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a
                        href="page-contact-detail.html"
                        className="sub-menu-item"
                      >
                        Contact Detail
                      </a>
                    </li>
                    <li>
                      <a href="page-contact-one.html" className="sub-menu-item">
                        Contact One
                      </a>
                    </li>
                    <li>
                      <a href="page-contact-two.html" className="sub-menu-item">
                        Contact Two
                      </a>
                    </li>
                    <li>
                      <a
                        href="page-contact-three.html"
                        className="sub-menu-item"
                      >
                        Contact Three
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Multi Level Menu</a>
                  <span className="submenu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a href="javascript:void(0)" className="sub-menu-item">
                        Level 1.0
                      </a>
                    </li>
                    <li className="has-submenu parent-menu-item">
                      <a href="javascript:void(0)"> Level 2.0 </a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="sub-menu-item"
                          >
                            Level 2.1
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="sub-menu-item"
                          >
                            Level 2.2
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="footer.html" className="sub-menu-item">
                    Footer Layouts{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">Docs</a>
              <span className="menu-arrow" />
              <ul className="submenu">
                <li>
                  <a href="documentation.html" className="sub-menu-item">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="changelog.html" className="sub-menu-item">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="components.html" className="sub-menu-item">
                    Components
                  </a>
                </li>
                <li>
                  <a href="widget.html" className="sub-menu-item">
                    Widget
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Demos</a>
              <span className="menu-arrow" />
              <ul className="submenu megamenu">
                <li>
                  <ul>
                    <li>
                      <a href="index-corporate.html" className="sub-menu-item">
                        <div className="text-lg-center">
                          <span className="d-none d-lg-block">
                            <img
                              src="images/demos/corporate.png"
                              className="img-fluid rounded shadow-md"
                              alt
                            />
                          </span>
                          <span className="mt-lg-2 d-block">Corporate</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="index-crypto.html" className="sub-menu-item">
                        <div className="text-lg-center">
                          <span className="d-none d-lg-block">
                            <img
                              src="images/demos/crypto.png"
                              className="img-fluid rounded shadow-md"
                              alt
                            />
                          </span>
                          <span className="mt-lg-2 d-block">
                            Cryptocurrency
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="index-shop.html" className="sub-menu-item">
                        <div className="text-lg-center">
                          <span className="d-none d-lg-block">
                            <img
                              src="images/demos/shop.png"
                              className="img-fluid rounded shadow-md"
                              alt
                            />
                          </span>
                          <span className="mt-lg-2 d-block">Shop</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="index-portfolio.html" className="sub-menu-item">
                        <div className="text-lg-center">
                          <span className="d-none d-lg-block">
                            <img
                              src="images/demos/portfolio.png"
                              className="img-fluid rounded shadow-md"
                              alt
                            />
                          </span>
                          <span className="mt-lg-2 d-block">Portfolio</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a
                        href="helpcenter-overview.html"
                        className="sub-menu-item"
                      >
                        <div className="text-lg-center">
                          <span className="d-none d-lg-block">
                            <img
                              src="images/demos/help-center.png"
                              className="img-fluid rounded shadow-md"
                              alt
                            />
                          </span>
                          <span className="mt-lg-2 d-block">Help Center</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="index-hosting.html" className="sub-menu-item">
                        <div className="text-lg-center">
                          <span className="d-none d-lg-block">
                            <img
                              src="images/demos/hosting.png"
                              className="img-fluid rounded shadow-md"
                              alt
                            />
                          </span>
                          <span className="mt-lg-2 d-block">
                            Hosting &amp; Domain
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="index-job.html" className="sub-menu-item">
                        <div className="text-lg-center">
                          <span className="d-none d-lg-block">
                            <img
                              src="images/demos/job.png"
                              className="img-fluid rounded shadow-md"
                              alt
                            />
                          </span>
                          <span className="mt-lg-2 d-block">
                            Job &amp; Career
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="forums.html" className="sub-menu-item">
                        <div className="text-lg-center">
                          <span className="d-none d-lg-block">
                            <img
                              src="images/demos/forums.png"
                              className="img-fluid rounded shadow-md"
                              alt
                            />
                          </span>
                          <span className="mt-lg-2 d-block">Forums</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="index-blog.html" className="sub-menu-item">
                        <div className="text-lg-center">
                          <span className="d-none d-lg-block">
                            <img
                              src="images/demos/blog.png"
                              className="img-fluid rounded shadow-md"
                              alt
                            />
                          </span>
                          <span className="mt-lg-2 d-block">Blog</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="sub-menu-item">
                        <div className="text-lg-center">
                          <span className="d-none d-lg-block">
                            <img
                              src="images/demos/comingsoon.png"
                              className="img-fluid rounded shadow-md"
                              alt
                            />
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="../dashboard/index.html"
                target="_blank"
                className="sub-menu-item"
              >
                Admin
              </a>
            </li>
       */}
          </ul>
          {/*end navigation menu*/}
        </div>
        {/*end navigation*/}
      </div>
    </header>
  );
}

export default Header;

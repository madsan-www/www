import * as React from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutHome from "../components/AboutHome";
import CTA from "../components/CTA";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import BlogListHome from "../components/BlogListHome";

const IndexPage = () => {
  return (
    <div>
      <SEO 
      title="Home"
      image='https://res.cloudinary.com/madsan/image/upload/v1636912210/web-assets/madsan-og_zokhwb.jpg'
      />
      <Hero />
      <Features />
      <AboutHome />
      <Partners />
      <Services />
      <CTA />
      <Testimonials />
      <BlogListHome />
    </div>
  );
};

export default IndexPage;

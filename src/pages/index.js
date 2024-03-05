import * as React from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutHome from "../components/AboutHome";
import CTA from "../components/CTA";
import Musteriler from "../components/Musteriler";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import BlogListHome from "../components/BlogListHome";
import dataIndex from "../../data/indexHome.json";
import { useLocale } from "../hooks/locale";

const IndexPage = () => {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;
  const data = isDefaultLang ? dataIndex.tr : dataIndex.en;
  
  return (
    <div>
      <SEO
        title={data.title}
        description={data.description}
        image={data.ogImage}
      />
      <Hero />
      <Features />
      <AboutHome />
      <Partners />
      <CTA />
      <Testimonials />
      <Musteriler />  
      <BlogListHome />
    </div>
  );
};

export default IndexPage;

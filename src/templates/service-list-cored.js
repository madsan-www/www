import React from "react";
import { graphql } from "gatsby";
import ServicesCored from "../components/ServicesCored";
import CtaBasic from "../components/CTAbasic";
import SEO from "../components/SEO";

const ServiceList = props => {
  const post = props.data.markdownRemark;
  // const selectedServiceType = document.location.search.toString().split("?")[1]
  return (
    <>
    <SEO
    title={post.frontmatter.title}
    />
      <ServicesCored />
      {post.frontmatter.cta ? <CtaBasic /> : null}
    </>
  );
};

export const query = graphql`
  query ServiceListCored($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        image
        cta
      }
      html
    }
  }
`;

export default ServiceList;

import React from "react";
import { graphql } from "gatsby";
import Services from "../components/Services";
import CtaBasic from "../components/CTAbasic";
import SEO from "../components/SEO";

const ServiceList = props => {
  const post = props.data.markdownRemark;

  return (
    <>
    <SEO
    title={post.frontmatter.title}
    />
      <Services />
      {post.frontmatter.cta ? <CtaBasic /> : null}
    </>
  );
};

export const query = graphql`
  query ServiceList($locale: String!, $title: String!) {
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

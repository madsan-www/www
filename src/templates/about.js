import React from "react";
import { graphql } from "gatsby";
import Team from "../components/Team";
import CtaBasic from "../components/CTAbasic";
import SEO from "../components/SEO";
const About = props => {
  const post = props.data.markdownRemark;
  // const image = post.frontmatter.image

  return (
    <>
      <SEO 
      title={post.frontmatter.title} 
      description={post.frontmatter.description || post.excerpt }
      image={post.frontmatter.image}/>
      <section className="bg-half-170 bg-light d-table w-100">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h4 className="title mb-0">{post.frontmatter.title} </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="position-relative">
                <img
                  src={post.frontmatter.image}
                  className="rounded img-fluid mx-auto d-block"
                  alt={post.frontmatter.title}
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title ms-lg-4">
                <p
                  className="text-muted"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Team />
      {post.frontmatter.cta ? <CtaBasic /> : null}
    </>
  );
};

export const query = graphql`
  query About($locale: String!, $title: String!) {
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
      excerpt(format: PLAIN, pruneLength: 150)
    }
  }
`;

export default About;

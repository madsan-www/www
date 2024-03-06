import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import CtaBasic from "../components/CTAbasic";

const KuyuEn = props => {
  const post = props.data.markdownRemark;

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
      />
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: `url(${post.frontmatter.image})` }}
      >
        <div className="bg-overlay" />
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="KuyuEns-heading title-heading">
                <h2 className="text-white title-dark">
                  {" "}
                  {post.frontmatter.title}{" "}
                </h2>
                <p className="text-white-50 para-desc mb-0 mx-auto">
                  {post.frontmatter.description
                    ? post.frontmatter.description
                    : null}
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>{" "}
        {/*end container*/}
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <section class="section">
        <div class="container">

  <div class="row">
    <div class="col-md-6">
<a href="/borehole-en">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">Borehole Seismic</h5>
        </div>
      </div>
</a>
    </div>
    <div class="col-md-6">
<a href="/borehole-logging-en">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">Borehole Logging</h5>
        </div>
      </div>
</a>
    </div>
    <div class="col-md-6">
<a href="/rock-sampling-en">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">Rock Sampling</h5>
        </div>
      </div>
</a>
    </div>
    <div class="col-md-6">
<a href="/aerosmart-en">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">AeroSmartMag</h5>
        </div>
      </div>
</a>
    </div>
  </div>
</div>

      </section>
      {post.frontmatter.cta ? <CtaBasic /> : null}
    </>
  );
};

export const query = graphql`
  query KuyuEn($locale: String!, $title: String!) {
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

export default KuyuEn;

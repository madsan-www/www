import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import CtaBasic from "../components/CTAbasic";

const BoreHoleEN = props => {
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
              <div className="BoreHoleENs-heading title-heading">
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
  <h1 class="mt-5">SHock Borehole Source</h1>
        <p class="lead">Main features:</p>
        <ul>
            <li>P and SH wave generation</li>
            <li>Suitable for CST and VSP</li>
            <li>High frequency repeatable signal</li>
            <li>Operations in dry and water-filled wells</li>
            <li>HV slip ring on the winch</li>
        </ul>
        
        <p class="lead">SHock is a unique borehole source, which is designed for generating horizontally polarised Shear Waves (SH) and Compressional Waves (P) for reversed Vertical Seismic Profiling (VSP) and Crosshole Seismic Testing or Tomography (CST). SHock is an easy-to-operate high-repeatable seismic source, which can be used both in dry and water-filled wells in combination with energy source Jack.</p>
        
        <p>A rigid pneumo-electric line provides accurate source rotation in the well for generating shots with opposite SH-wave polarization for further signal-to-noise ratio enhancement during the processing and possibility to clearly identify S-waves by reversed polarity. Due to its electrodynamical nature, SHock generates high frequency energy pulse, which results in high resolution seismic gathers suitable for very accurate first break picking and providing very detailed VSP seismic sections.</p>
        
        <p>To provide fast infield seismic borehole acquisition, SHock source is supplied on a reel with a high-voltage slip ring and pneumatic fitting. It allows to acquire seismic data without need of disconnecting the energy source and compressor during winding the cable.</p>
        
        <p><strong>SHock standard set includes:</strong></p>
        <ul>
            <li>SHock source</li>
            <li>Pneumo-electric line</li>
            <li>Reel with high-voltage slip ring</li>
            <li>Reel and energy source connection wire</li>
            <li>Air compressor (option)</li>
        </ul>
        
        <p>To perform CST on P and S waves following equipment is required:</p>
        <ol>
            <li>Energy source Jack</li>
            <li>GStreamer with the seismograph (DAQlink 4)</li>
            <li>RadExPro for data processing and ZondST2d/ZondST3d for tomography inversion</li>
        </ol>
</div>
</div>

      </section>
      {post.frontmatter.cta ? <CtaBasic /> : null}
    </>
  );
};

export const query = graphql`
  query BoreHoleEN($locale: String!, $title: String!) {
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

export default BoreHoleEN;
import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import CtaBasic from "../components/CTAbasic";

const BoreHoleEEN = props => {
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
              <div className="BoreHoleEENs-heading title-heading">
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
  <h1 class="mt-4">Borehole Scintillation Radiometer SRP-20</h1>
  <h2>Main Features:</h2>
  <ul>
    <li>Fast assessment of rocks’ natural radioactivity</li>
    <li>High sensitivity of measurements</li>
    <li>Portable and easy to use</li>
    <li>Adjustable averaging window</li>
    <li>Supplied with control source (Co-60)</li>
  </ul>
  
  <h2>Why SRP-20?</h2>
  <ul>
    <li>Borehole radiometer SRP-20 includes both probe and control unit, making it an all-sufficient system for gamma-ray logging</li>
    <li>Waterproof detection unit of borehole version can be used in dry or liquid-filled boreholes with any types of casing (or without it)</li>
    <li>Waterproof control unit</li>
    <li>User-friendly interface and simple operation</li>
    <li>Built-in Bluetooth and USB enable real-time data visualization on a PC or smartphone (tablet)</li>
    <li>The instrument can be supplied with a well logging rod feeder system and a set of rods for use in various types of wells and drillings</li>
    <li>Adjustment of time averaging window enables stable data recording on low-level anomalies and provides immediate response during quick scanning</li>
    <li>Detection unit can be manufactured for placing in boreholes deeper than 300 m upon request</li>
    <li>Easy-to-use pointer indicator equipped with a stepper motor eliminates oscillations caused by measuring console movement</li>
    <li>Indicator backlight provides comfortable measurements under any conditions</li>
    <li>Rugged transport case, Co-60 control source, and high-quality open-type headphones included</li>
  </ul>

  <h2>Areas of SRP-20 Application:</h2>
  <ul>
    <li>Radioactive/non-radioactive ore exploration</li>
    <li>Lithology studies in boreholes</li>
    <li>Identification and refinement of reservoir intervals (oil and gas-saturated formations)</li>
    <li>Tying to depth during perforating operations</li>
    <li>Determination of clay content and fracturing of rocks</li>
  </ul>

  <h2>Package Contents:</h2>
  <ul>
    <li>Logging probe</li>
    <li>Measuring console with built-in battery</li>
    <li>Charger</li>
    <li>Headphones</li>
    <li>Control source (Co-60) in a container</li>
    <li>Rugged Case</li>
    <li>Reel with slip ring</li>
    <li>Well logging rod feeder system with rods (optional)</li>
  </ul>

  <h2>Specifications:</h2>
  <table class="table">
    <thead>
      <tr>
        <th>Specification</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Measurement range of exposure dose rate of gamma radiation</td>
        <td>0 ÷ 3 000 mcR/h</td>
      </tr>
      <tr>
        <td>Fundamental error of measurement of exposure dose rate of gamma radiation of 226Ra radionuclide</td>
        <td>no more than ±15% (not standardized in the measurement subrange 30 mcR/h)</td>
      </tr>
      <tr>
        <td>Measurement range of the average count rate of recorded gamma</td>
        <td>0 ÷ 10 000 s-1</td>
      </tr>
      <tr>
        <td>Fundamental error of measurement of average count rate of recorded gamma</td>
        <td>no more than ±10%</td>
      </tr>
      <tr>
        <td>Energy range of detecting gamma</td>
        <td>35 ÷ 3 000 keV</td>
      </tr>
      <tr>
        <td>Variation limit of averaging window</td>
        <td>1 ÷ 20 s</td>
      </tr>
      <tr>
        <td>Setting time of operating mode</td>
        <td>no more than 1 min</td>
      </tr>
      <tr>
        <td>Power supply voltage</td>
        <td>12.5 ± 2 V</td>
      </tr>
      <tr>
        <td>Average power</td>
        <td>0.9 W</td>
      </tr>
      <tr>
        <td>Life time of power supply</td>
        <td>no less than 25 h</td>
      </tr>
      <tr>
        <td>Operating temperature range</td>
        <td>-40 ÷ +50 ˚С</td>
      </tr>
      <tr>
        <td>Dimensions (detection unit)</td>
        <td>36 × 1010 mm</td>
      </tr>
      <tr>
        <td>Dimensions (measuring console with power supply)</td>
        <td>200 × 90 × 145 mm</td>
      </tr>
      <tr>
        <td>Interfaces</td>
        <td>USB, Bluetooth</td>
      </tr>
      <tr>
        <td>Weight (detection unit)</td>
        <td>2.5 kg</td>
      </tr>
      <tr>
        <td>Weight (measuring console with power supply)</td>
        <td>2.6 kg</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

      </section>
      {post.frontmatter.cta ? <CtaBasic /> : null}
    </>
  );
};

export const query = graphql`
  query BoreHoleEEN($locale: String!, $title: String!) {
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

export default BoreHoleEEN;
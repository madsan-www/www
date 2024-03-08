import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import CtaBasic from "../components/CTAbasic";

const RockEN = props => {
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
              <div className="RockENs-heading title-heading">
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
  <h1>Field Scintillation Radiometer SRP-20</h1>
    <h2>Main Features:</h2>
    <ul>
        <li>Fast detection of gamma anomalies</li>
        <li>High sensitivity of measurements</li>
        <li>Portability and ease of use</li>
        <li>Arrow and sound indication</li>
        <li>Integration time adjustment</li>
    </ul>

    <p>SRP-20 is the most advanced version of previously popular radiometers SRP-68 and SRP-97 and their analogue in terms
        of functional use and application domain. SRP-20, alike previous versions, is a scintillation radiometer and is
        designed to search for radioactive ores based on their gamma radiation, radiometric surveying of the terrain,
        radiometric testing of quarries and mine openings and detection of radioactively contaminated zones. The walking
        and logging (analogues SRP-97K and SRP-68-02/03) versions are commercially available, which differ in the design
        of the detection unit case with identical metrological characteristics. Due to the presence of Bluetooth and USB
        interfaces, data can be transferred to a PC in real time. It is also possible to increase the time integration
        window in order to obtain stable data on anomalies that are close to background values.</p>

    <h2>Areas of SRP-20 Application:</h2>
    <ul>
        <li>Radioactive ores search by gamma radiation</li>
        <li>Radiometric surveying of the terrain</li>
        <li>Radiometric testing of quarries and mine openings</li>
        <li>Detection of radioactive contamination zones</li>
        <li>Gamma-ray logging</li>
    </ul>

    <h2>Distinctive Features of SRP-20:</h2>
    <ul>
        <li>Designed to work in the field</li>
        <li>Capability to adjust the time integration window</li>
        <li>Built-in Bluetooth and USB</li>
        <li>Capability to visualize data on a PC</li>
        <li>Sealed detection unit for walking mode can be used in shallow boreholes or for underwater objects surveying</li>
        <li>Unified console for operation with logging and walking mode detection unit</li>
    </ul>

    <h2>Package Contents:</h2>
    <ul>
        <li>Walking mode detection unit</li>
        <li>Measuring console</li>
        <li>Battery (built-in)</li>
        <li>Charger</li>
        <li>Headphones</li>
        <li>Control source (Co-60) in a container</li>
        <li>Rugged Case</li>
    </ul>

    <h2>Specifications:</h2>
    <table border="1">
        <tr>
            <th>Parameter</th>
            <th>Value</th>
        </tr>
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
            <td>0.8 W</td>
        </tr>
        <tr>
            <td>Life time of power supply</td>
            <td>no less than 30 h</td>
        </tr>
        <tr>
            <td>Operating temperature range</td>
            <td>-40 ÷ +50 ˚С</td>
        </tr>
        <tr>
            <td>Dimensions - detection unit</td>
            <td>56 × 155 × 480 mm</td>
        </tr>
        <tr>
            <td>Dimensions - measuring console with power supply</td>
            <td>1190 × 90 × 145 mm</td>
        </tr>
        <tr>
            <td>Interfaces</td>
            <td>USB, Bluetooth</td>
        </tr>
        <tr>
            <td>Weight - detection unit</td>
            <td>1.3 kg</td>
        </tr>
        <tr>
            <td>Weight - measuring console with power supply</td>
            <td>2.6 kg</td>
        </tr>
        <tr>
            <td>Life span</td>
            <td>no less than 6 years</td>
        </tr>
    </table>
</div>
</div>

      </section>
      {post.frontmatter.cta ? <CtaBasic /> : null}
    </>
  );
};

export const query = graphql`
  query RockEN($locale: String!, $title: String!) {
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

export default RockEN;
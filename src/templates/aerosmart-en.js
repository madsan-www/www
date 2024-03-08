import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import CtaBasic from "../components/CTAbasic";

const AeroEN = props => {
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
              <div className="AeroENs-heading title-heading">
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
  <h1 class="mt-5 mb-4">AeroSmartMag Drone Magnetometer</h1>
    <div class="row mb-4">
      <div class="col-md-6">
        <h2>Main Features:</h2>
        <ul>
          <li>High sensitivity</li>
          <li>Very affordable price and easy to operate</li>
          <li>No sensor orientation and heating required</li>
          <li>Very low power consumption</li>
          <li>Built-in high-precision GNSS receiver</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Operating Mode:</h2>
        <ul>
          <li>Drone magnetic survey with simultaneous recording of RAW GNSS data</li>
          <li>Base station with continuous measurements</li>
          <li>GNSS receiver mode with ability to collect RAW GNSS data for a centimeter level accuracy with base or rover modes</li>
        </ul>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-6">
        <h2>Delivery Set:</h2>
        <ul>
          <li>SmartMag console with built-in multi-band GNSS receiver</li>
          <li>Portable Overhauser sensor on carbon rod</li>
          <li>External helical GNSS antenna</li>
          <li>LiPo 4S 14.8V 1.3Ah battery (2 pcs.) with charger</li>
          <li>Suspension rope</li>
          <li>Additional fairing kit</li>
          <li>USB cable</li>
          <li>Transportation case</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Optional:</h2>
        <ul>
          <li>Suspension bracket for DJI Matrice M300</li>
          <li>Suspension bracket for customer drone</li>
          <li>Non-magnetic tripod with bracket for base station mode</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>Technical Specifications:</h2>
        <table class="table">
          <tr>
            <th>Type</th>
            <td>Overhauser magnetometer</td>
          </tr>
          <tr>
            <th>Number of Sensors</th>
            <td>1</td>
          </tr>
          <tr>
            <th>Dynamic Range</th>
            <td>20,000 to 120,000 nT</td>
          </tr>
          <tr>
            <th>Absolute Accuracy</th>
            <td>0.1 nT</td>
          </tr>
          <tr>
            <th>Sensor Sensitivity</th>
            <td>0.021 nT/√Hz rms</td>
          </tr>
          <tr>
            <th>Resolution</th>
            <td>0.001 nT</td>
          </tr>
          <tr>
            <th>Gradient Tolerance</th>
            <td>30,000 nT/m</td>
          </tr>
          <tr>
            <th>Sample Rates (Drone Mode)</th>
            <td>0.2, 0.25, 0.5, 1 s</td>
          </tr>
          <tr>
            <th>Sample Rates (Base Station)</th>
            <td>0.2, 0.25, 0.5, 1 s and longer with 1 s step</td>
          </tr>
          <tr>
            <th>Sensors Stability</th>
            <td>&gt; 10 years</td>
          </tr>
          <tr>
            <th>Additional Sensors</th>
            <td>IMU, compass, barometer</td>
          </tr>
          <tr>
            <th>Interfaces</th>
            <td>built-in: USB, RS-232, CAN FD</td>
          </tr>
          <tr>
            <th>GNSS Receiver</th>
            <td>built-in</td>
          </tr>
          <tr>
            <th>GNSS Antenna</th>
            <td>external</td>
          </tr>
          <tr>
            <th>GNSS Signals</th>
            <td>GPS L1C/A and L2C; GLONASS L1OF and L2OF; Galileo E1B/C and E5b; BeiDou B1I and B2I; QZSS L1C/A, L1S and L2C. SBAS: WAAS, EGNOS, MSAS, GAGAN, SDCM.</td>
          </tr>
          <tr>
            <th>Connectors</th>
            <td>1 × CAN FD / RS232 / 12V, USB, external GNSS antenna, Overhauser sensor</td>
          </tr>
          <tr>
            <th>Display</th>
            <td>160 × 128, OLED</td>
          </tr>
          <tr>
            <th>Keypad</th>
            <td>6 buttons with backlight</td>
          </tr>
          <tr>
            <th>Built-in Memory</th>
            <td>up to 32 Gb (microSD)</td>
          </tr>
          <tr>
            <th>Power Supply</th>
            <td>11-16.8 VDC</td>
          </tr>
          <tr>
            <th>Operating Temperature</th>
            <td>-40 to +60 °C</td>
          </tr>
          <tr>
            <th>Battery Included</th>
            <td>LiPo 4S 14.8V 1.3Ah</td>
          </tr>
          <tr>
            <th>Item Weight</th>
            <td>1.45 kg – fully assembled with battery</td>
          </tr>
        </table>
        </div>
        </div>
</div>
</div>

      </section>
      {post.frontmatter.cta ? <CtaBasic /> : null}
    </>
  );
};

export const query = graphql`
  query AeroEN($locale: String!, $title: String!) {
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

export default AeroEN;
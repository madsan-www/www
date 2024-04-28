import React from 'react';
import {graphql} from 'gatsby';
import SEO from '../components/SEO';
import {useLocale} from '../hooks/locale';
import LocalizedLink from '../components/LocalizedLink';

const ProductAeroSmartMagProductList = props => {
  const {locale} = useLocale();
  const productList = props.data.allMarkdownRemark.edges;


  const {currentPage, numPages} = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = isFirst ? null : `/products/${currentPage - 1}`;
  const nextPage = isLast ? null : `/products/${currentPage + 1}`;

  return (
      <>
        <SEO title="AeroSmartMag"/>

        <section
            className="bg-half-170 d-table w-100"
            style={{backgroundImage: `url(https://res.cloudinary.com/madsan/image/upload/v1636194992/madsan-stock/IMG_3200_nsgux0.jpg)`}}>
          <div className="bg-overlay"/>
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="Kuyus-heading title-heading">
                  <h2 className="text-white title-dark">
                    AeroSmartMag
                  </h2>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {' '}
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

        <section className="product-list">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mt-4 pt-2">
                <a href={'/en/kuyu-olcum-ve-analiz-en'}>← Go back</a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {productList.map(
                  ({
                     node: {
                       frontmatter: {
                         date,
                         author,
                         authorImage,
                         description,
                         title,
                         featured,
                         path
                       },
                       excerpt,
                       fields: {slug}
                     }
                   }) => (
                      <div className="col-lg-4 mt-4 pt-2" key={path}>
                        <LocalizedLink to={'/' + path}>
                          <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                              <img
                                  src={featured}
                                  className="card-img-top rounded-top"
                                  alt={title}
                              />
                              <div className="overlay rounded-top"/>
                            </div>
                            <div className="card-body content">
                              <h5 className="card-title title text-dark">{title}</h5>
                            </div>

                          </div>
                        </LocalizedLink>
                      </div>
                  )
              )}
            </div>
          </div>
        </section>
      </>
  );
};

export const query = graphql`
  query ProductAeroSmartMagProductListEn($locale: String!) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } },
        fileAbsolutePath: { regex: "/products/aero-smart-mag-.*.md$/" }
      },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            featured
            path
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default ProductAeroSmartMagProductList;

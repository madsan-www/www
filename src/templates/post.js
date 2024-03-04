import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/SEO";

const Post = props => {
  const post = props.data.markdownRemark;

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        description={post.frontmatter.description || post.excerpt}
      />
      <section
        className="bg-half-170 d-table w-100"
        style={{
          background:
            'url("https://res.cloudinary.com/madsan/image/upload/v1636194988/madsan-stock/IMG_3194_y6vp0z.jpg") center center'
        }}
      >
        <div className="bg-overlay" />
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h1 className="text-white">{post.frontmatter.title}</h1>
                <ul className="list-unstyled mt-4 mb-0">
                  <li className="list-inline-item h6 user text-white me-2">
                    <i className="mdi mdi-account" /> MAD-SAN MÜHENDİSLİK
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
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
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card blog blog-detail border-0 shadow rounded">
                <div className="card-body content">
                  <p
                    className="text-muted"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        image
        author
        authorImage
        authorTitle
        path
        tags
        date(formatString: "DD MMMM, YYYY", locale: $locale)
      }
      html
      excerpt(format: MARKDOWN, pruneLength: 150)
      timeToRead
      wordCount {
        words
      }
    }
  }
`;

export default Post;

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
                    <i className="mdi mdi-account" /> {post.frontmatter.author}
                  </li>
                  <li className="list-inline-item h6 date text-white">
                    <i className="mdi mdi-calendar-check" />{" "}
                    {post.frontmatter.date}
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
            <div className="col-lg-8 col-md-6">
              <div className="card blog blog-detail border-0 shadow rounded">
                <div className="card-body content">
                  <p
                    className="text-muted"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 sidebar sticky-bar ms-lg-4">
                <div className="card-body p-0">
                  <div className="text-center">
                    <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                      Author
                    </span>
                    <div className="mt-4">
                      <img
                        src={post.frontmatter.authorImage}
                        className="img-fluid object-full avatar avatar-small rounded-pill shadow-md d-block mx-auto"
                        alt={post.frontmatter.author}
                      />
                      <a
                        href="blog-about.html"
                        className="text-primary h5 mt-4 mb-0 d-block"
                      >
                        {post.frontmatter.author}
                      </a>
                      <small className="text-muted d-block">
                        {post.frontmatter.authorTitle}
                      </small>
                    </div>
                  </div>
                  {/* TAG CLOUDS */}
                  <div className="widget mt-4">
                    <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                      Tags
                    </span>
                    <div className="tagcloud text-center mt-4">
                      {post.frontmatter.tags.map((items, index) => {
                        return (
                          <text
                            key={`${index}`}
                            className="rounded"
                          >
                            {items}
                          </text>
                        );
                      })}
                    </div>
                  </div>
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

import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import LocalizedLink from "../components/LocalizedLink";
import Pagination from "../components/Pagination";
import { useLocale } from "../hooks/locale";
import useTranslations from "../components/useTranslations";

const Blog = props => {
  const { locale } = useLocale();
  const postList = props.data.allMarkdownRemark.edges;
  // Logic for Pagination Component
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;
  const Lang = useTranslations().translationsTerms[0];

  return (
    <>
      <SEO title='Blog' />
      <section className="bg-half-170 bg-light d-table w-100">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h4 className="title mb-0"> Blog </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            {postList.map(
              ({
                node: {
                  frontmatter: {
                    date,
                    author,
                    authorImage,
                    description,
                    title,
                    image,
                    path
                  },
                  timeToRead,
                  excerpt,
                  fields: { slug }
                }
              }) => (
                <div className="col-lg-4 mt-4 pt-2" key={path}>
                  <LocalizedLink to={`/blog/${path || slug}`}>
                    <div className="card blog rounded border-0 shadow">
                      <div className="position-relative">
                        <img
                          src={image}
                          className="card-img-top rounded-top"
                          alt={title}
                        />
                        <div className="overlay rounded-top" />
                      </div>
                      <div className="card-body content">
                        <h5>
                          <a
                            href={'/' + path}
                            className="card-title title text-dark"
                          >
                            {title}
                          </a>
                        </h5>
                        <p className="text-muted">{excerpt}</p>
                        <div className="post-meta d-flex justify-content-between mt-3">
                          <LocalizedLink
                            to={`/blog/${path || slug}`}
                            className="text-muted readmore"
                          >
                            {Lang.moreInformations}
                            <i className="uil uil-angle-right-b align-middle" />
                          </LocalizedLink>
                        </div>
                      </div>
                      <div className="author">
                        <small className="text-light user d-block">
                          <i className="uil uil-user" /> {author}
                        </small>
                        <small className="text-light date">
                          <i className="uil uil-calendar-alt" /> {date}
                        </small>
                      </div>
                    </div>
                  </LocalizedLink>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
};

export const query = graphql`
  query PostsList(
    $locale: String!
    $dateFormat: String!
    $skip: Int!
    $limit: Int!
  ) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: { regex: "/(blog)/.*.md$/" }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            description
            image
            author
            authorImage
            date(formatString: $dateFormat)
          }
          timeToRead
          excerpt(format: MARKDOWN, pruneLength: 150)
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;

export default Blog;

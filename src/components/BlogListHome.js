import React from "react";
import { StaticQuery, graphql } from "gatsby";
import LocalizedLink from "../components/LocalizedLink";
import { useLocale } from "../hooks/locale";
import useTranslations from "./useTranslations";

export default function BlogListHome() {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;
  const Lang = useTranslations().translationsTerms[0];
  return (
    <StaticQuery
      query={graphql`
        query BlogListHomeQuery {
          tr: allMarkdownRemark(
            filter: {
              fields: { locale: { eq: "tr" } }
              fileAbsolutePath: { regex: "/(blog)/.*.md$/" }
            }
            limit: 3
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  path
                  description
                  image
                  author
                  authorImage
                  tags
                  date(formatString: "DD.MM.YYYY")
                }
                fields {
                  slug
                  locale
                  isDefault
                }
                timeToRead
                excerpt(format: MARKDOWN, pruneLength: 150)
              }
            }
          }
          en: allMarkdownRemark(
            filter: {
              fields: { locale: { eq: "en" } }
              fileAbsolutePath: { regex: "/(blog)/.*.md$/" }
            }
            limit: 3
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  path
                  description
                  image
                  author
                  authorImage
                  tags
                  date(formatString: "DD.MM.YYYY")
                }
                fields {
                  slug
                  locale
                  isDefault
                }
                timeToRead
                excerpt(format: MARKDOWN, pruneLength: 150)
              }
            }
          }
        }
      `}
      render={data => (
        <div
          className="container mt-100 mt-60"
          style={{ marginBottom: "8rem" }}
        >
          {/* <div className="row justify-content-center">
          <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Latest News</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-12 md:py-20">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h2 className="h2" data-aos="fade-up">
                    Blog
                  </h2>
                </div>
                <div className="max-w-sm mx-auto md:max-w-none">
                  <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                    <div className="row">
                      {isDefaultLang
                        ? data.tr.edges.map(({ node, index }) => (
                            <div
                              key={index}
                              className="col-lg-4 col-md-6 mt-4 pt-2"
                            >
                              <div className="card blog rounded border-0 shadow">
                                <div className="position-relative">
                                  <img
                                    src={node.frontmatter.image}
                                    className="card-img-top rounded-top"
                                    alt={node.frontmatter.title}
                                  />
                                  <div className="overlay rounded-top" />
                                </div>
                                <div className="card-body content">
                                  <h5>
                                    <a
                                      href="javascript:void(0)"
                                      className="card-title title text-dark"
                                    >
                                      {node.frontmatter.title}
                                    </a>
                                  </h5>
                                  <p className="text-muted">{node.excerpt}</p>
                                  <div className="post-meta d-flex justify-content-between mt-3">
                                    <LocalizedLink
                                      to={`/blog/${
                                        node.frontmatter.path ||
                                        node.fields.slug
                                      }`}
                                      className="text-muted readmore"
                                    >
                                      {Lang.moreInformations}
                                      <i className="uil uil-angle-right-b align-middle" />
                                    </LocalizedLink>
                                  </div>
                                </div>
                                <div className="author">
                                  <small className="text-light user d-block">
                                    <i className="uil uil-user" />{" "}
                                    {node.frontmatter.author}
                                  </small>
                                  <small className="text-light date">
                                    <i className="uil uil-calendar-alt" />{" "}
                                    {node.frontmatter.date}
                                  </small>
                                </div>
                              </div>
                            </div>
                          ))
                        : data.en.edges.map(({ node, index }) => (
                            <div
                              key={`_${index}`}
                              className="col-lg-4 col-md-6 mt-4 pt-2"
                            >
                              <div key={node.frontmatter.slug}>
                                <LocalizedLink
                                  to={`/blog/${
                                    node.frontmatter.path || node.fields.slug
                                  }`}
                                >
                                  <div className="card blog rounded border-0 shadow">
                                    <div className="position-relative">
                                      <img
                                        src={node.frontmatter.image}
                                        className="card-img-top rounded-top"
                                        alt={node.frontmatter.title}
                                      />
                                      <div className="overlay rounded-top" />
                                    </div>
                                    <div className="card-body content">
                                      <h5>
                                        <a
                                          href="javascript:void(0)"
                                          className="card-title title text-dark"
                                        >
                                          {node.frontmatter.title}
                                        </a>
                                      </h5>
                                      <p className="text-muted">
                                        {node.excerpt}
                                      </p>
                                      <div className="post-meta d-flex justify-content-between mt-3">
                                        <LocalizedLink
                                          to={`/blog/${
                                            node.frontmatter.path ||
                                            node.fields.slug
                                          }`}
                                          className="text-muted readmore"
                                        >
                                          {Lang.moreInformations}
                                          <i className="uil uil-angle-right-b align-middle" />
                                        </LocalizedLink>
                                      </div>
                                    </div>
                                    <div className="author">
                                      <small className="text-light user d-block">
                                        <i className="uil uil-user" />{" "}
                                        {node.frontmatter.author}
                                      </small>
                                      <small className="text-light date">
                                        <i className="uil uil-calendar-alt" />{" "}
                                        {node.frontmatter.date}
                                      </small>
                                    </div>
                                  </div>
                                </LocalizedLink>
                              </div>
                            </div>
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <>
            <div className="container-fluid mt-100 mt-60">
              <div
                className="py-5"
                style={{
                  background:
                    'url("https://res.cloudinary.com/madsan/image/upload/v1636198143/web-assets/svg-map_yfgz9z.svg")'
                }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 text-center">
                      <span className="clip-text clip-text-image text-uppercase fw-bold">
                        Madsan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    />
  );
}

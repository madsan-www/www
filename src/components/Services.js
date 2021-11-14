import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import HomeServicesData from "../../data/homeServices.json";
import LocalizedLink from "../components/LocalizedLink";
import { useLocale } from "../hooks/locale";
import useTranslations from "./useTranslations";

export default function Services() {
  const { locale } = useLocale();
  const isDefaultLang = locale === "tr" ? true : false;

  const ContentData = isDefaultLang ? HomeServicesData.tr : HomeServicesData.en;
  const Title = ContentData.title;
  const Desc = ContentData.description;
  const Lang = useTranslations().translationsTerms[0];

  return (
    <StaticQuery
      query={graphql`
        query ServicesHomeQuery {
          tr: allMarkdownRemark(
            filter: {
              fields: { locale: { eq: "tr" } }
              fileAbsolutePath: { regex: "/(services)/.*.md$/" }
            }
            limit: 9
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  path
                  description
                  image
                  date(formatString: "DD.MM.YYYY")
                  contentType
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
              fileAbsolutePath: { regex: "/(services)/.*.md$/" }
            }
            limit: 9
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  path
                  description
                  image
                  date(formatString: "DD.MM.YYYY")
                  contentType
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
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">{Title}</h4>
                <p className="text-muted para-desc mb-0 mx-auto   ">{Desc}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {isDefaultLang
              ? data.tr.edges.map(({ node, index }) => (
                  <>
                    <div
                      key={`_${index}`}
                      className="col-lg-4 col-md-6 mt-4 pt-2"
                    >
                      <div className="card features feature-clean explore-feature p-4 border-0 rounded-md shadow text-center">
                        <div className="icons text-primary text-center mx-auto">
                          <img
                            src={node.frontmatter.image}
                            alt={node.frontmatter.title}
                            className="uil uil-truck d-block rounded h3 mb-0 w-75 m-auto"
                          />
                        </div>
                        <div className="card-body p-0 content">
                          <h5 className="mt-4">
                            <LocalizedLink
                              to={node.frontmatter.path || node.fields.slug}
                              className="title text-dark"
                            >
                              {node.frontmatter.title}
                            </LocalizedLink>
                          </h5>
                          <p className="text-muted">{node.excerpt}</p>
                          <LocalizedLink
                            to={node.frontmatter.path || node.fields.slug}
                            className="text-primary"
                          >
                            {Lang.moreInformations}
                            <i className="uil uil-angle-right-b align-middle" />
                          </LocalizedLink>
                        </div>
                      </div>
                    </div>
                  </>
                ))
              : data.en.edges.map(({ node, index }) => (
                  <>
                    <div
                      key={`_${index}`}
                      className="col-lg-4 col-md-6 mt-4 pt-2"
                    >
                      <div className="card features feature-clean explore-feature p-4 border-0 rounded-md shadow text-center">
                        <div className="icons text-primary text-center mx-auto">
                          <img
                            src={node.frontmatter.image}
                            alt={node.frontmatter.title}
                            className="uil uil-truck d-block rounded h3 mb-0 w-75 m-auto"
                          />
                        </div>
                        <div className="card-body p-0 content">
                          <h5 className="mt-4">
                            <LocalizedLink
                              to={node.frontmatter.path || node.fields.slug}
                              className="title text-dark"
                            >
                              {node.frontmatter.title}
                            </LocalizedLink>
                          </h5>
                          <p className="text-muted">{node.excerpt}</p>
                          <LocalizedLink
                            to={node.frontmatter.path || node.fields.slug}
                            className="text-primary"
                          >
                            Detaylı Bilgi
                            <i className="uil uil-angle-right-b align-middle" />
                          </LocalizedLink>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
          </div>
        </div>
      )}
    />
  );
}

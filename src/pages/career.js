import React from 'react';
import SEO from '../components/SEO'
import { useStaticQuery, graphql, Link } from "gatsby"

function Career() {

  const data = useStaticQuery(graphql`
  query JobsListQuery {
    allMarkdownRemark(filter: {frontmatter: {page: {eq: "jobs"}}}) {
      edges {
        node {
          id
          frontmatter {
            description
            page
            path
            title
            location
          }
          fields {
            locale
            slug
          }
          excerpt
        }
      }
    }
  }

  `)
  return (
    <div>
      <SEO title="Career" />
      <section className="relative">
   

        {/* Hero content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold text-white leading-tight tracking-tighter mb-4" data-aos="fade-up">Career</h1>
              <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">Developers are trusted to create an engaging experience for their companies, so we build tools to help them.</p>
            </div>
          </div>
        </div>

      </section>
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-10">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            <h3 className="h4 mb-8">Open positions</h3>

            {/* Job list */}
            <div className="-my-3" data-aos-id-career>
              {data.allMarkdownRemark.edges.map((file, index) => {
                return (
                  <div key={`${index}`} className="py-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-career]">
                    <div className="pb-6 border-b border-gray-800">
                      <div className="mb-2">
                        <Link to={`/${file.node.frontmatter.path || file.node.fields.slug}`} className="flex justify-between items-center text-xl font-bold text-red-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">
                          <span>{file.node.frontmatter.title}</span>
                          <svg className="stroke-current flex-shrink-0 ml-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <g strokeWidth="2" fill="none">
                              <path d="M1 12h20" />
                              <path strokeLinecap="square" d="M14 5l7 7-7 7" />
                            </g>
                          </svg>
                        </Link>
                      </div>
                      <div className="text-lg text-gray-400 mb-3">
                        {file.node.frontmatter.description}
                      </div>
                      <div className="text-gray-400 flex flex-wrap items-center">
                        <div className="inline-flex items-center">
                          <svg className="mr-2 flex-shrink-0" vidth="14" height="17" viewBox="0 0 14 17" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-current text-gray-300" d="M7 0C3.1 0 0 3.1 0 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                          </svg>
                          <span>{file.node.frontmatter.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Career;
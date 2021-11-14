import React from 'react';
import { graphql } from 'gatsby';

const Contact = props => {
  const post = props.data.markdownRemark;

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 md:pt-40 md:pb-6">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">{post.frontmatter.title}</h1>
              <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
                {post.frontmatter.description}
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export const query = graphql`
  query Contact($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`;

export default Contact;

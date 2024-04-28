import React from 'react';
import {graphql} from 'gatsby';

const Product = ({data}) => {
	const product = data.markdownRemark;

	return (
		<div>
			<h1>{product.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{__html: product.html}}/>
		</div>
	);
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
            }
            html
        }
    }
`;

export default Product;

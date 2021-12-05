import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocale } from '../hooks/locale';
import useTranslations from "./useTranslations";

function SEO({ description, lang, meta, title, image }) {
	const { locale } = useLocale();
	const { site } = useStaticQuery(
		graphql`
             query {
                 site {
                     siteMetadata {
                         title
                         description
                         author
                         siteUrl
                     }
                 }
             }
         `
	)

	const Lang = useTranslations().translationsTerms[0];
	
	const metaDescription = description || site.siteMetadata.description
	const url = site.siteMetadata.siteUrl

	// const ogImage = `${url}${image || ''}`

	const ogImage = image

	// add rtl support - Arabic is Right to Left Language
	// change ar with your RTL language


	return (
		<Helmet
			htmlAttributes={{
				lang: `${locale}`
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title} `}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:image`,
					content: ogImage,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:image:src`,
					content: ogImage,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SEO

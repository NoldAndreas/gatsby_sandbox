/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql,Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{background: `#E8E8E8`}}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 860,
          padding: `0 1.0875rem 1.45rem`,
          background: `white`,
        }}
      >
        <main>
        <h1> {title} </h1>
        {children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
        by Andreas Nold &mdash; <a href="https://github.com/NoldAndreas"> Github </a>
        &mdash; <a href="https://www.linkedin.com/in/andreas-nold-8686561/"> LinkedIn </a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

//{data.site.siteMetadata?.title || `Title`}

/*© {new Date().getFullYear()}, Built with
{` `}
<a href="https://www.gatsbyjs.com">Gatsby</a>*/

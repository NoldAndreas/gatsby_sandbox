import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

import im_header from "../images/Fluss.jpg"

const Header = ({ siteTitle }) => (
  <header>
    <ul className="ul-menubar">
      <li className="li-menu">  <Link to="/"  style={{ textDecoration: 'none' }}>Home</Link></li>
      <li className="li-about">  <Link to="/about">About</Link></li>
    </ul>
    <Link to={`/`}>
     <img className="img-header" src={im_header} alt="Header image"/>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


/*

<header
  style={{
    background: `rebeccapurple`,
    marginBottom: `1.45rem`,
  }}
>


<div
  style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  }}
>
  <h1 style={{ margin: 0 }}>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </h1>
</div>*/

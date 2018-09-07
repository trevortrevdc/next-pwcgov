import React from 'react'
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#005eb8',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 0 0 0',
      }}
    >
      <img src={logo} alt="Logo" height="30" />
    </div>
  </div>
)

export default Header

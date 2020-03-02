import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
 <div className="Header">
   <div className="HeaderGroup">
      <Link to="/" >hieu d.</Link>
      <Link>my work</Link>
      <Link>get in touch</Link>
      <Link>resume</Link>
   </div>
 </div>
)

export default Header

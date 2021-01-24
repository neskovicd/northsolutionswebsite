
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
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
    <>
      <Navbar />

        <main>{children}</main>

        <Footer/>
      
    </>
  )
}

export default Layout

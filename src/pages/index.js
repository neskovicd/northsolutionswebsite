import React from "react"
import Layout from "../components/layout"
import Image from "./Image"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import Services from "../components/Services"
import AutoPlay from "../components/AutoPlay"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection/>
    <Services/>
    <Image/>
    <AutoPlay/>
  </Layout>
)

export default IndexPage

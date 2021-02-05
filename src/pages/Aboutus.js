import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroAboutUs from "../components/HeroAboutUs"
import OurVision from "../components/Ourvision"
import Team from "../components/Team"

const Aboutus = () => (
  <Layout>
    <SEO title="About us"/>
    <HeroAboutUs/>
    <OurVision/>
    <Team/>
  </Layout>
)

export default Aboutus

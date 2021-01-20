import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import "./image.css"


const Image = () => {
const data = useStaticQuery(graphql`
query {
  allFile(
    filter:
    {extension: {regex: "/(jpg)|(png)|(jpeg)/"},
     name: {nin: ["background", "bg", "gatsby-astronaut", "gatsby-icon", "northlogo", "phone", "react", "reactnative", "node", "django", "python", "gatsby", "xcode"] } 
    }
    ) {
    edges {
      node {
        base
        childImageSharp {
          fluid(maxHeight:600, maxWidth:600){ 
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}

`)
return(
  <div className="image-container">
    <div class="textWrapper">
    <span class="standardText">check out some of our</span>
    <span class="blueText">Work</span>
    </div>
    <div className="image-grid">
      {data.allFile.edges.map((image, key) => (
        <Img key={key}
        className="image-item"
        fluid={image.node.childImageSharp.fluid}
        alt={image.node.base.split('.')
        [0]}
        />
      ))}
    </div>
  </div>
)
}

export default Image

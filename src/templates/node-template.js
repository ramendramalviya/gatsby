import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"


const ComponentNames = ({ 
  data: {
    resultnode:{
    nodes: {
      0:{
        id,
        data :{
          nid,
        },
      },
    },
  },
  allFile:{
    nodes :{
      0:{
        childImageSharp:{
          fluid,
        },
      },
    },
  },
  },
}) => {
 return (
   <Layout>
     <div style={{ textAlign: "center"}}>
     <Link to="/drupal_nodes">Back to products</Link>
     <h1>Single page</h1>
     </div>
   <section className ="single-product">
    <article>
     <h1>{nid}</h1>
     <Image fluid={fluid} alt="test"/>
     </article>
   </section>
   </Layout>
 )}

export const query = graphql`
query node_r($node_id: String) {
  resultnode: allNode(filter: {data: {nid: {eq: $node_id}, type: {eq: "gatsby_demo"}}}) {
    nodes {
      id
      data {
        title
        body {
          value
        }
        url
        nid
      }
    }
  }
  allFile {
    nodes {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}`
  

export default ComponentNames
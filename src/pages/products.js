/*import React, {Component} from "react"
import Layout from "../components/Layout"
import styles from "../components/product.module.css"
export default class products extends
Component{
render(){
return (
<Layout>
    <div className={styles.page}>
    <h1>This is our product page.</h1>
    <p className={styles.text}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essentially unchanged.
    </p>
    </div>
   
</Layout>

)

}

}*/
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/product.module.css"
import Image from "gatsby-image"
import {Link} from "gatsby"

const ComponentName = ({ data }) => {
const{ 
    allContentfulProduct: {nodes: products},
} = data 
return (
    <Layout>
        <section className={styles.page}>
           {products.map(product => {
              return (
               <article key={product.id}>
                <Image fluid = {product.image.fluid} alt = {product.title}></Image>
              <h3>{product.title}<span>{product.price}</span></h3>
              <Link to = {`/products/${product.slug}`}>More details</Link>
               </article>

              )

           })}
        </section>
    </Layout>
)
}
export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
         
        }
        title
        slug
        price
        info {
          info
        }
      }
    }
  }
`

export default ComponentName
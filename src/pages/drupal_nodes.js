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
import {Link} from "gatsby"

const ComponentNamess = ({ data }) => {
const{ 
  allNode: {nodes: drupal_nodes},
} = data 
return (
    <Layout>
        <section className={styles.page}>
           {drupal_nodes.map(drupal_node => {
              return (
               <article key={drupal_node.id}>
               
              <h3>{drupal_node.data.title}</h3>
              
              <p>{drupal_node.data.body.value}</p>
              <Link to = {drupal_node.data.url}>More details</Link>
               </article>

              )

           })}
        </section>
    </Layout>
)
}
export const query = graphql`
query nodes {
  allNode {
    nodes {
      id
      data {
        title
        body {
          value
        }
        url
        edit_url
        nid
        vid
        vuuid
        uuid
      }
    }
  }
}`

export default ComponentNamess
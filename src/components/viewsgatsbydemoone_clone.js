import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../components/product.module.css"


const getData = graphql`
query view_clone {
  viewdemo_clone: allGatsbydemoone {
    nodes {
      Nid
      field_gatsbyimg {
        uri
        width
        height
      }
      title
    }
  }
}
`

const ViewClone = ({ data }) => {
  const{ 
    viewdemo_clone: {nodes: viewre_clone},
  }  = useStaticQuery(getData) 
  //console.log(viewre);
  return (

          <section className={styles.page}>
            
             {viewre_clone.map(viewresult => {
                return (
                 <article key={viewresult.nid}>
                 <div>Title:{viewresult.title}</div>
 
                
                 </article>
  
                )
  
             })}
          </section>
   
  )
  }
export default ViewClone
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"

const getdata = graphql`
query viewquery {
  viewdemo:allGatsbydemotwo(filter: {nid: {eq: "6"}}) {
    nodes {
      title
      nid
      Body
      field_email_field
      field_entity_ref {
        target_id
      }
      field_link {
        id
      }
      field_long_text
      field_long_text_only
      field_text_field
      field_integer_list
      field_demo_dropdown {
        value
      }
      field_file_upload {
        uri
        filename
      }
      field_options_checkbox {
        value
      }
      field_image_demo {
        uri
        filename
        alt
        title
      }
      Datetime {
        value(formatString: "")
        timezone
        timezone_db
      }
      title_1
    }
  }
}
`

const TestDemo = ({ data }) => {
  const{ 
    viewdemo: {nodes: viewre},
  }  = useStaticQuery(getdata) 
  return (
      <Layout>
          <section>
             {viewre.map(viewr => {
                return (
                 <article key={viewr.nid}>
                  
                <h3>{viewr.title}</h3>
                <h3>{viewr.Body}</h3>
                <h3>{viewr.field_email_field}</h3>
                <h3>{viewr.field_demo_dropdown.value}</h3>
                <img src={viewr.field_image_demo.uri} />
                
                 </article>
  
                )
  
             })}
          </section>
      </Layout>
  )
  }


export default TestDemo
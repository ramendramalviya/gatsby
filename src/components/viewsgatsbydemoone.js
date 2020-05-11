import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../components/product.module.css"

const getdata = graphql`
query viewquery {
  viewdemo: allGatsbydemotwo(filter: {nid: {eq: "6"}}) {
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
      field_location {
        country_name
        country
        city
        name
        postal_code
        province
        province_name
        street
      }
      field_integer_only {
        value
      }
      field_term_reference {
        tid
      }
    }
  }
}
`

const TestDemo = ({ data }) => {
  const{ 
    viewdemo: {nodes: viewre},
  }  = useStaticQuery(getdata) 
  //console.log(viewre);
  return (

          <section className={styles.page}>
            
             {viewre.map(viewr => {
                return (
                 <article key={viewr.nid}>
                 <div>Title:{viewr.title}</div>
                <div>Body: {viewr.Body}</div>
                <div>Email: {viewr.field_email_field}</div>
                <div>Entity reference ID: {viewr.field_entity_ref.target_id}</div>
                <div>Link field:{viewr.field_link.id}</div>
                <div>Long text and summary: {viewr.field_long_text}</div>
                <div>Long text: {viewr.field_long_text_only}</div>
                <div>Text field: {viewr.field_text_field}</div>
                <div>Field integrer list: {viewr.field_integer_list}</div>
                <div>Dropdown value: {viewr.field_demo_dropdown.value}</div>
                <div>Term Reference ID: {viewr.field_term_reference.tid}</div>
                <div>
                  <span>Street: {viewr.field_location.street}<br/></span>
                  <span>Country name: {viewr.field_location.country_name}<br/></span>
                  <span>Location name: {viewr.field_location.name}<br/></span>
                  <span>Street Address: {viewr.field_location.street}<br/></span>
               </div>
                <div><a href={viewr.field_file_upload.uri}>File download</a></div>

                <img src={viewr.field_image_demo.uri} />
                
                 </article>
  
                )
  
             })}
          </section>
     
  )
  }


export default TestDemo
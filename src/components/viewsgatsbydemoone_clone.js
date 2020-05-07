import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
query view_clone{
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
        uuid
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

const ViewClone = ({data}) => {
const {
//console.log(data)
viewdemo:{
  nodes:{
    title,
  },

},

} = useStaticQuery(getData)

return (
  <div>
     <h2>{/*data.site.siteMetadata.person.name*/}</h2>
       <h2>{/*data.site.siteMetadata.person.age*/}</h2>
<h1>title: {title}</h1>
  </div>

)
}
export default ViewClone
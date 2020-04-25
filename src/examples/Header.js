import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/*const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          data
          description
          person {
            name
            age
          }
        }
      }
    }
  `)
  return (*/
    
    /* <pre>{JSON.stringify(data, null, 4)}</pre> */
     /* <div>
       <h2>{data.site.siteMetadata.person.name}</h2>
       <h2>{data.site.siteMetadata.person.age}</h2>
     </div>

  )
}

export default ComponentName*/


const getData = graphql`
query First{
  site {
    info: siteMetadata{
      title
      data
      description
      person{
        name
        age
      }
    }
  }
}
`

const Header = () => {
const {
//console.log(data)
site:{
  info:{
    title,
    person: {name},

  },

},

} = useStaticQuery(getData)

return (
  <div>
     <h2>{/*data.site.siteMetadata.person.name*/}</h2>
       <h2>{/*data.site.siteMetadata.person.age*/}</h2>
<h1>title: {title}</h1>
<h1>name: {name}</h1>
  </div>

)
}
export default Header
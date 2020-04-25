import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
import {graphql} from "gatsby"

const examples = ({data}) => {
   // console.log(props);
   const{
       site:{
           info:{author},
       },
} = data

    return(<Layout>
        <h1>Hello from Examples page</h1>
        <Header/>
        <HeaderStatic/>
    <h5>author:{author}</h5>
       </Layout>       
       )  
}

export const data = graphql`
query newQuery {
  site {
    info:siteMetadata {
      author
      data
      description
      person {
        age
        name
      }
      siteUrl
      title
    }
  }
}`

export default examples
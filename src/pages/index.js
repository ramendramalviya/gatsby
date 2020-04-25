import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import {ExampleButton} from "../components/button"
export default () => <Layout>
    
                     <h1 style={{color:"red", textTransform: "uppercase"}}> Hello world </h1>
                    <div>
                        <Link to="/blog/">Blog page </Link>
                    </div> 
                    <div>
                        <a href="https://www.gatsbyjs.org/">Gatsby Docs </a>
                    </div> 
                    <ExampleButton>Click Me</ExampleButton>
                     </Layout>
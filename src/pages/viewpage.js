import React from "react"
import TestDemo from "../components/viewsgatsbydemoone"
import ViewClone from "../components/viewsgatsbydemoone_clone"
import Layout from "../components/Layout"

const testdem = () => {
  //console.log(props);

   return(<Layout>
       <TestDemo/>
       <ViewClone/>
      </Layout>       
      )  
}

export default testdem

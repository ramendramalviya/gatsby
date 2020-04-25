import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import img from "../images/image4.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
query Childimagesharp {
    fixed:file(relativePath: {eq: "image3.jpeg"}){
      childImageSharp{
        fixed(width:300, grayscale:true){
          ...GatsbyImageSharpFixed
        }
      }
      
    }
    
     fluid:file(relativePath: {eq: "image4.jpeg"}){
      childImageSharp{
        fluid{
            ...GatsbyImageSharpFluid_withWebp_tracedSVG

        }
      }
      
    }

    example:file(relativePath: {eq: "image1.jpeg"}){
      childImageSharp{
        fluid(maxWidth:100){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
      
    }

  }`
const Images = () => {
    const data = useStaticQuery(getImages)
    console.log(data)
   return(
    <section className="images">
       <article className="single-image">
         <h3>Basic image</h3>
         <img src={img} width="100%" />
       </article>
       <article className="single-image">
         <h3>Fixed image</h3>
         <Image fixed ={data.fixed.childImageSharp.fixed} />
       </article>
       <article className="single-image">
         <h3>Fluid image</h3>
         <Image fluid ={data.fluid.childImageSharp.fluid} />
       </article>
       <article className="single-image">
         <h3>Max width fluid image</h3>
         <Image fluid ={data.example.childImageSharp.fluid} />
       </article>
    </section>


   )



}

export default Images
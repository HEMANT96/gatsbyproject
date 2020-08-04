import React from "react"
import {graphql} from 'gatsby'
//import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle'
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection';
import InfoBlock from '../components/Reuseable/InfoBlock';
import DualInfo from "../components/Reuseable/DualinfoBlock";
//import Coursecart from "../components/Cart/Coursecart";


const Contact = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
     img = {data.img.childImageSharp.fluid }
     title=" I write code"
     subtitle="hemant sharma"
     heroclass="hero-background"
  />
     <InfoBlock heading="About Us"/>
      {/* <Coursecart Courses={data.Cousers}/>*/}
     <DualInfo heading="Our Team"/>
     </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "tech.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
   Cousers:allContentfulCousers{
    edges{
      node{
        id
        title
        categery
        description
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
 }
`
export default Contact;

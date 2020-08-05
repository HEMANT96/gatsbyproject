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
import DualInfo from "../components/Reuseable/DualinfoBlock2";
//import Coursecart from "../components/Cart/Coursecart";


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
     img = {data.img.childImageSharp.fluid }
     title=""
     subtitle="OUR SERVICES"
     heroclass="hero-background1"
  />
     <InfoBlock heading="About Us"/>
      {/* <Coursecart Courses={data.Cousers}/>*/}
     <DualInfo heading="Our Services"/>
     </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "service.jpg" }) {
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
export default IndexPage

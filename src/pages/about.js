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
import DualInfo from "../components/Reuseable/DualinfoBlock1";
import TeamPhot from "../components/About/TeamPhot";


const Aboutus = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
     img = {data.img.childImageSharp.fluid }
     title="About Web Development"
     subtitle=""
     heroclass="About-background"
     />
     <DualInfo heading="Our Courses"/>
     <InfoBlock heading="About Vision"/>
     <TeamPhot/>
     </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "train1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
     }
`

export default Aboutus

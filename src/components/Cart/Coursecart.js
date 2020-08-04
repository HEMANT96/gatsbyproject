import React, { Component } from 'react'
import Heading from "../Reuseable/Heading"
import Img from 'gatsby-image';
class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state = {
            cousers : props.cousers.edges,
        }
    }
    render() {   
        return (
        <section className="py-5">
          <div className="container">
             <Heading title="Courses"/>
                <div className="row">
                {
                    this.state.cousers.map(({node}) => {
                        return(
                                <div key={node.id} 
                                className="col-11 col-md-6 d-flex mx-auto"
                               > 
                                <Img fixed={node.image.fixed} />
                                </div>
                        );       
                    })
                }
              </div>
                 </div>
            </section>
        )
    }
}

export default Coursecart;
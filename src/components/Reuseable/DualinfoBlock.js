import React from 'react'
import Heading from "./Heading";
import {Link} from 'gatsby'

export default function DualinfoBlock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
        <Heading title={heading}/>
   
        <div className="row ml-5 container"> 
           
            <div className="col-4 ">
            <div class="card bg-dark">
            <img class="card-img-top" src="https://tse4.mm.bing.net/th?id=OIP.1iSHdBrcWMx8Ed10_3-cmQHaEK&pid=Api&P=0&w=339&h=191" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title text-success">Just click Photo</h5>
              <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary bg-warning border-none btn-block">Go somewhere</a>
            </div>
          </div>
               </div>
            </div>
        </section>
    )
}

import React from 'react'
import Heading from "./Heading";
import {Link} from 'gatsby'

export default function DualinfoBlock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
        <Heading title={heading}/>
   
        <div className="col-sm-12 row container"> 
            <div className="col-xl-4 mb-2 col-sm-12 mx-auto">
            <div class="card bg-dark">
            <img class="card-img-top" src="http://palletloss.com.au/wp-content/uploads/2016/11/stockfresh_878302_web-technology_sizeS.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title text-success">Just 1 click Photo</h5>
              <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary bg-warning border-none btn-block">Go somewhere</Link>
            </div>
          </div>   
        </div>
        <div className="col-xl-4 mb-2 col-sm-12">
         <div class="card bg-dark">
            <img class="card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.Si_i0vK3AQCw1Aovp0O35wHaEK&pid=Api&P=0&w=357&h=202" alt="Card image cap" style={{height:"248px"}}/>
             <div class="card-body">
              <h5 class="card-title text-success">Just 2 click Photo</h5>
              <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/about" className="btn btn-primary bg-warning border-none btn-block">Go somewhere</Link>
            </div>
          </div>
        </div>
            <div className="col-xl-4 mb-2 col-sm-12 ">
            <div class="card bg-dark">
            <img class="card-img-top" src="https://tse2.mm.bing.net/th?id=OIP.Mk8B44sZXB002rMn1OvdCwHaEK&pid=Api&P=0&w=299&h=169" alt="Card image cap" style={{height:'248px'}}/>
            <div class="card-body">
              <h5 class="card-title text-success">Just 3 click Photo</h5>
              <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/about" className="btn btn-primary bg-warning  border-none btn-block">Go somewhere</Link>
            </div>
          </div>
         </div>
       </div>
    </section>
    )
}

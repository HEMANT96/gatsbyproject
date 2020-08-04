import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="container col-sm-8 my-4 ">
            <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Mobile</label>
              <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="+91-9696969696"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
            </div>
        )
    }
}

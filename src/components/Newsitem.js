import React, { Component } from 'react'

// get = https://newsapi.org/v2/everything?q=tesla&from=2024-12-30&sortBy=publishedAt&apiKey=ad69f6a01c544bdaadfd9fb848770e4b
export default class Newsitem extends Component {
    constructor(){
      super();

    };

    
  render() {
     let {title , description , imgurl}=this.props
    return (
      <div>

        <div className="card" style={{width: "18rem"}}>
  <img src={imgurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-primary">More details</a>
  </div>
</div>
      </div>
    )
  }
}

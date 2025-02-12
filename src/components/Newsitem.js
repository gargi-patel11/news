import React, { Component } from 'react'

// get = https://newsapi.org/v2/everything?q=tesla&from=2024-12-30&sortBy=publishedAt&apiKey=ad69f6a01c544bdaadfd9fb848770e4b
export default class Newsitem extends Component {
  

    
  render() {
     let {title , description , imgurl ,url , author ,publishedAt }=this.props
    return (
      <div>

        <div className="card" style={{width: "18rem"}}>
  <img src={imgurl ? imgurl : "https://img.freepik.com/premium-photo/creative-glowing-blue-breaking-news-pattern-background-with-globe-headline-communication-global-world-concept-3d-rendering_670147-21161.jpg?semt=ais_hybrid"} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p>{publishedAt} by {author}</p>
    <p className="card-text">{description}</p>
   
    <a href={url} target='_black' className="btn btn-info">More details</a>
  </div>
</div>
      </div>
    )
  }
}

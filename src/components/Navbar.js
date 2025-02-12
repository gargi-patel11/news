import React ,{useState} from 'react'
import { Link } from "react-router";

export default function Navbar () {
const [active, setActive] = useState("home");


    return (
      <div className='fixed-top'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Updates</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className={`nav-link  ${active === "home" ? "active font-weight-bold": ""}`} onClick={()=>{setActive("home")}} href="/">Home </a>
      </li>  
      <li className="nav-item "><Link className={`nav-link  ${active === "bussiness" ? "active font-weight-bold": ""}`} onClick={()=>{setActive("bussiness")}} to="/business" >business</Link></li> 
      <li className="nav-item"><Link  className={`nav-link  ${active === "entertainment" ? "active font-weight-bold" : ""}`} onClick={()=>{setActive("entertainment")}} to="/entertainment" >entertainment</Link></li> 
      <li className="nav-item"><Link  className={`nav-link  ${active === "health"? "active font-weight-bold" : ""}`} onClick={()=>{setActive("health")}} to="/health">health</Link></li>
      <li className="nav-item"><Link  className={`nav-link  ${active === "science" ? "active font-weight-bold" : ""}`} onClick={()=>{setActive("science")}} to="/science">science</Link></li>
      <li className="nav-item"><Link  className={`nav-link  ${active === "sports" ? "active font-weight-bold" : ""}`} onClick={()=>{setActive("sports")}} to="/sports">sports</Link></li>
      <li className="nav-item"><Link  className={`nav-link  ${active === "technology" ? "active font-weight-bold" : ""}`} onClick={()=>{setActive("technology")}} to="/technology">technology</Link></li>
    </ul>
  </div>
</nav>
      </div>
    )

}



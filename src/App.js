// import logo from './logo.svg';
import './App.css';
// import "bootstrap/dist/css/bootstrap.css"
import React, {  useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News.js';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router";
// import Loading from './components/Loading';

export default function App() {

  let [progress , setprogress]=useState(0)
  const handlesetprogress =(progress)=>{
  setprogress(progress)
  }
    return (
      <div>
        
        <BrowserRouter>
        <LoadingBar
        color="#f11946"
        progress={progress}
      />

        <Navbar />
        
            <Routes>
              <Route exact path="/"  element={<News progress={handlesetprogress} key="general" country="us"  category="general"/>} />
              <Route exact path="/business" element={<News progress={handlesetprogress} country="us"  key="business" category="business" />} /> 
              <Route exact path="/entertainment"  element={<News progress={handlesetprogress} country="us" key ="entertaiment" category="entertainment" />} /> 
              <Route exact path="/health" element={<News progress={handlesetprogress} country="us"  key="health" category="health" />} />
              <Route exact path="/science"  element={<News progress={handlesetprogress} country="us" key="science" category="science" />} />
              <Route exact path="/sports" element={<News progress={handlesetprogress} country="us"  key="sports" category="sports" />} />
              <Route exact path="/technology" element={<News progress={handlesetprogress} country="us" key="technology" category="technology" />} />
            </Routes>
          </BrowserRouter>
        
      
        

      </div>
    )
  }




// export default App;

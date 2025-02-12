import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";

import Loading from "./Loading";

export default function News (props){
  
    let[article , setarticle]=useState([])
    let[page , setpage]=useState(1)
    let[loading , setloading]=useState(false)
    let [totalResults, setTotalResults] = useState(0);

     const update=async()=>{
      setloading(true)
  
      props.progress(10)
      let data=await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ad69f6a01c544bdaadfd9fb848770e4b&pageSize=22&page=${page}`);
      props.progress(30)
      let parseddata=await data.json();
      props.progress(50)
      setarticle(parseddata.articles )
      setTotalResults(parseddata.totalResults);
      setloading(false)
     
      props.progress(100)
    }
   const  nextscroll =async()=>{
    if (article.length >= totalResults) return;
    
      setloading(true)
      let data=await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ad69f6a01c544bdaadfd9fb848770e4b&pageSize=22&page=${page+1}`);
      setpage(page+1)
      let parseddata=await data.json();
      setarticle(article.concat(parseddata.articles))
      setloading(false)
     
    }
    
  
  // handlepreviuospage = async ()=>{
  //  this.setState({page: page-1 
  //  })
  //  this.update()
  // }
  // handlenextpage = async()=>{
    
  //     this.setState({page: page+1
  //     })
  //     this.update()
  
  // }
  useEffect(()=>{
    update()
  },[])
 


    return (
      

      <div className="container my-3">
        <h1 className="mt-5 text-center">Top Headlines - {props.category}</h1>
{/*       

       {loading ? <Loading/ > : */}
       {console.log(totalResults)}
           <InfiniteScroll
            dataLength={article !=null ? article.length : 0}
            next={nextscroll}
            hasMore={article.length < totalResults-7}  
            loader={<Loading />}
          >
            <div className="container">
        <div className="row">
          {article.map( ( Element )=>{
              return <div className="col-md-4 my-1"key={Element.url} >
              <Newsitem title={Element.title ? Element.title : "title"} description={Element.description} imgurl={Element.urlToImage} url={Element.url} author={Element.author}  publishedAt={new Date(Element.publishedAt).toGMTString()}/>
              </div>
          })}
        </div>
        </div>
       </InfiniteScroll>

      </div>
  

      
    )
  }
 

News.defaultProps = {
    country : "us",
    category :"general",
         
};


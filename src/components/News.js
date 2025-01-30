import React from "react";
import Newsitem from "./Newsitem";

import { Component } from 'react'

export default class news extends Component {
  article =[
      {
      "source": {
      "id": null,
      "name": "KEYE TV CBS Austin"
      },
      "author": "Vincent Martorano",
      "title": "Trump's federal buyout plan sparks controversy among Austin-area elected officials - KEYE TV CBS Austin",
      "description": "President Donald Trump's plan for all federal employees to return to the office five days a week has sparked significant backlash from Austin-area elected offic",
      "url": "https://cbsaustin.com/news/local/trumps-federal-buyout-plan-sparks-controversy-among-austin-area-elected-officials",
      "urlToImage": "https://cbsaustin.com/resources/media2/16x9/1024/986/0x8/90/6766d69a-8ec0-4b6f-b503-acb36ecd8002-AP24357601334356.jpg",
      "publishedAt": "2025-01-30T04:18:25Z",
      "content": "AUSTIN, Texas President Donald Trump's plan for all federal employees to return to the office five days a week has sparked significant backlash from Austin-area elected officials.\r\nIn anticipation of… [+1850 chars]"
      },
      {
      "source": {
      "id": "associated-press",
      "name": "Associated Press"
      },
      "author": "CHRIS MEGERIAN, ZEKE MILLER, LISA MASCARO",
      "title": "Trump White House rescinds memo freezing federal money after widespread confusion - The Associated Press",
      "description": "President Donald Trump’s budget office has rescinded a memo freezing spending on federal grants, less than two days after it sparked widespread confusion and legal challenges across the country. The White House said that Trump’s underlying executive orders ta…",
      "url": "https://apnews.com/article/donald-trump-pause-federal-grants-aid-6d41961940585544fa43a3f66550e7be",
      "urlToImage": "https://dims.apnews.com/dims4/default/73aa8a8/2147483647/strip/true/crop/5644x3175+0+294/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F92%2F31%2F27dbc4ded64bdbb7087577c78ad8%2F973036e3896d469484bdddc7f2bc8aa9",
      "publishedAt": "2025-01-30T02:32:00Z",
      "content": "WASHINGTON (AP) President Donald Trumps budget office on Wednesday rescinded a memo freezing spending on federal loans and grants, less than two days after it sparked widespread confusion and legal c… [+6362 chars]"
      },
      {
      "source": {
      "id": "abc-news",
      "name": "ABC News"
      },
      "author": "ABC News",
      "title": "Reagan National Airport closed due to 'aircraft emergency' - ABC News",
      "description": null,
      "url": "https://abcnews.go.com/US/reagan-national-airport-closed-due-aircraft-emergency/story?id\\\\u003d118246693",
      "urlToImage": null,
      "publishedAt": "2025-01-30T02:29:44Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Financial Times"
      },
      "author": "Stephen Morris",
      "title": "Tesla results disappoint but Musk touts coming robots and ‘cybercabs’ - Financial Times",
      "description": "Optimism contrasted with disclosure of its first annual decline in EV sales in more than a decade",
      "url": "https://www.ft.com/content/bd9bf576-73bd-470b-acf2-87100e48ece9",
      "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fe47e3350-43f0-45f2-a9d5-22a0502f08f1.jpg?source=next-barrier-page",
      "publishedAt": "2025-01-30T02:13:36Z",
      "content": "FT newspaper delivered Monday-Saturday, plus FT Digital Edition delivered to your device Monday-Saturday.\r\n<ul><li></li>Weekday Print Edition<li></li>FT Weekend<li></li>FT Digital Edition<li>Global n… [+105 chars]"
      }
  ]
  constructor(){
    super();
    this.state={
      article :this.article
     
    }
    console.log(this.article);
  }
  render() {
    return (
      <div>

      <div className="container my-3">
        <div className="row">
          <div className="col-md-4 my-1">
            <Newsitem title="cricket" description="our cricketer's condition" imgurl="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fe47e3350-43f0-45f2-a9d5-22a0502f08f1.jpg?source=next-barrier-page" />
          </div>
          <div className="col-md-4 my-1 ">
            <Newsitem />
          </div>
          <div className="col-md-4 my-1">
            <Newsitem />
          </div>
        </div>
        
      </div>

      </div>
    )
  }
}

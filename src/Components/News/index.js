import React from "react";
import "./style.css";


//Component receives from api news images, headline, subline and link
//In case image does not come with it, choose from database

function News() {
  return (
    <div className="news-panel-grid">
      {/* {testNews.map((newsItem, index) => (
        <div
          className={`grid-item ${
            index === 0 ? "main-new" : index === 1 || index === 2 ? "secondary-news" : "terceary-news"
          }`}
          key={index}
          style={{ backgroundImage: `url(${newsItem.image})`, backgroundSize: "cover" }}
        >
          <h1>{newsItem.headline}</h1>
          <p>{newsItem.subline}</p>
        </div>
      ))}
      <div className="grid-item terceary-news">
        <button>Write Yours</button>
      </div> */}

      <h1>Upcoming</h1>
    </div>
  );
}

export default News;

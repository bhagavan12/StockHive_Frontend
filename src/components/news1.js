import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1730/getnews")
      .then((response) => {
        setNews(response.data);
        console.log(response.data);
      })
      .catch((error) => { 
        console.log("Error:", error);
      })
      .finally(() => {
        console.log("Done");
      });
  }, []);
function handleNews()
{
  console.log(news)
}
  return (
    <div>
      {handleNews}
      <h2>ONLINE NEWS</h2>
      {
      news.map((item) => (
        <div className="card-1" key={item.id}>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt={item.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      By {item.authors} on {item.date}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from 'react'
import { useEffect,useState } from 'react';
import myGif from '../images/Iphone-spinner-2.gif';
import {
  InfoSec,
  // InfoRow,
  // InfoColumn,
  // TextWrapper,
  // TopLine,
  // Heading,
  // Subtitle,
  // ImgWrapper,
  // Img
} from './InfoSection/InfoSection.elements';
export default function News({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
    const [data, setData] = useState(null);
   
    useEffect(() => {
        fetch(
            `https://www.alphavantage.co/query?function=TOURNAMENT_PORTFOLIO&season=2021-09&apikey=PSNO12Q0C3I6ZYR7`
        ).then((response) => response.json()
        ).then(setData).then(console.log(data))
    }, [])
    // useEffect(() => {
    //     fetch(
    //         `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=PSNO12Q0C3I6ZYR7`
    //     ).then((response) => response.json()
    //     ).then(setDataaa).then(console.log(dataaa))
    // }, [])
    return (
      <InfoSec lightBg={lightBg}>
        <div class="card-container" style={{marginTop:"-10%" ,display: 'flex', justifyContent: 'center' }}>
            {
            data ?
              data["ranking"].map((dat) => (
                //   <div className="card mx-auto" style={{ width: "18rem" }}>
                //     <img src={dat["banner_image"]} className="card-img-top" alt="..." />
                //     <div className="card-body">
                //       <h5 className="card-title"> {dat["title"]} </h5>
                //       <p className="card-text">  {dat["summary"]} </p>
                //       <a href={dat["url"]} className="btn btn-primary" target='_blank'>Click Here</a>
                //     </div>
                   <div class="card mb-1"> 
                   {/* dataaa["portfolio"].map((dataa) => (
                      <h5 class="card-title">{dataa["symbol"]}</h5>
                      
                      <h5 class="card-title">{dataa["shares"]}</h5>
                    )) */}
                    
                    <div class="card-body">
                  
                      <div>
                      <h5 class="card-title">Rank:  <h2>{dat["rank"]}</h2> </h5>
                      <h6 class="card-title">Stock Symbol:  <h3>{dat.portfolio[0].symbol}</h3> </h6>
                      <p class="card-text">Percent gain:{dat["percent_gain"]}</p>
                      <h6 class="card-title">Starting Value:{dat["start_value_usd"]}</h6>
                      <h6 class="card-title">Ending Value:{dat["end_value_usd"]}</h6>
                      </div>
                      {/* <a href={dat["url"]} className="btn btn-primary" target='_blank'>Click Here</a> */}
                    </div>
                    
                  </div> 
               // </div>
              ))
              :
            <div class="loader">
              <div class="loader__bar"></div>
              <div class="loader__bar"></div>
              <div class="loader__bar"></div>
              <div class="loader__bar"></div>
              <div class="loader__bar"></div>
              <div class="loader__ball"></div>
            </div>
          }
        </div>
        </InfoSec>
  )
}
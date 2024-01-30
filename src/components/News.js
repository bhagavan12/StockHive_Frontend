// import React from 'react'
// import { useEffect,useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { Stack } from '@mui/material';
// export default function News() {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         fetch(
//             `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=PSNO12Q0C3I6ZYR7`
//         ).then((response) => response.json()
//         ).then(setData).then(console.log(data))
//     }, [])
//     return (
//         <div>
//             {
//             data ?
//              {data["feed"] && data["feed"].map((dat) => (
//                 //   <div className="card mx-auto" style={{ width: "18rem" }}>
//                 //     <img src={dat["banner_image"]} className="card-img-top" alt="..." />
//                 //     <div className="card-body">
//                 //       <h5 className="card-title"> {dat["title"]} </h5>
//                 //       <p className="card-text">  {dat["summary"]} </p>
//                 //       <a href={dat["url"]} className="btn btn-primary" target='_blank'>Click Here</a>
//                 //     </div>
//                 <div>
//                     <CardActionArea>
//                 <Stack direction="row">
//                     <CardMedia sx={{ width: 150, borderRadius: 50, margin: 5 }}
//                         component="img"
//                         height="150"
//                         image={dat.banner_image}
//                     />
//                     <CardContent sx={{ margin: 5 }}>
//                         <Typography gutterBottom variant="h5" component="div" >
//                             HELLO
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                         {dat.summary}
//                         </Typography>
//                     </CardContent>
//                 </Stack>
//             </CardActionArea>
//                    <div class="card mb-3">
//                     <img src={dat["banner_image"]} class="card-img-top" style={{height:"180px"}} alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">{dat["title"]}</h5>
//                       <p class="card-text">{dat["summary"]}</p>
//                       <a href={dat["url"]} className="btn btn-primary" target='_blank'>Click Here</a>
//                     </div>
//                   </div> 

//                // </div>
//               ))}
//               : <h2>LoadinG ...</h2>
//           }
//         </div>
//   )
// }
import React from 'react'
import './News.css'; 
import { useEffect, useState } from 'react';
import myGif from '../images/Iphone-spinner-2.gif';
import {
  InfoSec_stock1,
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
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=PSNO12Q0C3I6ZYR7`
    ).then((response) => response.json()
    ).then(setData).then(console.log(data))
  }, [])
  return (
    <InfoSec_stock1 >
      <div class="card-container" style={{marginTop:"-10%" ,display: 'flex', justifyContent: 'center' }}>
        {
          data ?  
            data["feed"].map((dat) => ( 
              <div> 
                <div class="card">
                  <div class="col-md-19">
                    <img src={dat["banner_image"]} class="img-fluid rounded-start" alt="..." style={{maxHeight : "80%"}}/>
                  </div>
                  <div class="card-details">
                    <p class="text-title">{dat["title"]}</p>
                    <p class="text-body">{dat["summary"]}</p>
                  </div>
                  <a href={dat["url"]} class="card-button" target='_blank'>More Info</a>
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
    </InfoSec_stock1>
  )
}
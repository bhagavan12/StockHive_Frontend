import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import backgroundImage_st_bg1 from '../images/page2_bg.jpg';
import myGif from '../images/Iphone-spinner-2.gif';
import './stock.css'
import {
  InfoSec_stock,
  InfoSec
  // InfoRow,
  // InfoColumn,
  // TextWrapper,
  // TopLine,
  // Heading,
  // Subtitle,
  // ImgWrapper,
  // Img
} from './InfoSection/InfoSection.elements';
const BarStyle = {
  width: "20rem",
  background: "#F0F0F0",
  border: "none",
  padding: "0.5rem"
};

function Stock({
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
  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);
  const [stockChartHValues, setStockChartHValues] = useState([]);
  const [symbol, setSymbol] = useState("IBM");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStock();
  }, [symbol]);
  const handleSearch = () => {
    console.log(search);
  };

  const fetchStock = () => {
    const API_KEY = 'PSNO12Q0C3I6ZYR7';
    console.log(symbol+"IIIIII")
    // const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&outputsize=full&apikey=${API_KEY}`;
    const API_Call = `https://www.alphavantage.co/query?function=WMA&symbol=${symbol}&interval=daily&time_period=10&series_type=open&apikey=${API_KEY}`;

    const stockChartXValuesFunction = [];
    const stockChartYValuesFunction = [];
    const stockChartHValuesFunction = [];

    fetch(API_Call)
      .then(response => response.json())
      .then(data => {
        for (const key in data['Technical Analysis: WMA']) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(data['Technical Analysis: WMA'][key]['WMA']);
        //   stockChartHValuesFunction.push(data['Time Series (1min)'][key]['2. high']);
        }

        setStockChartXValues(stockChartXValuesFunction);
        setStockChartYValues(stockChartYValuesFunction);
        // setStockChartHValues(stockChartHValuesFunction);
      })
      .catch(error => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSymbol(search);
    console.log(symbol);
    setSearch("");
    fetchStock()
  };
  const upstreamColor = 'green';
  const downstreamColor = 'red';
  return (
    <InfoSec_stock lightBg={lightBg}>
    <div className="App-Stock">
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1>WEIGHTED MOVING AVERAGE </h1>
      
      
    </div>
      <div className="App-S1"><h1>{symbol}</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type="text"  placeHolder="search" onChange={(e) => setSearch(e.target.value)} >
        </input>
        <button onClick={handleSubmit}>Search</button>
        {console.log(symbol)}
      </div>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Plot
        data={[{
          x: stockChartXValues,
          y: stockChartYValues,
          type: 'scatter',
          mode: 'text+lines+markers',
          marker: {          
            color: stockChartYValues.map((value, index) => {
              if (index === 0) {
                return null;
              
              }else if (value > stockChartYValues[index + 1]) {
                return upstreamColor;
              }else {
                return downstreamColor;
              }
            })
        },
        line: { color: 'black' } // Add line object to display lines
      }
    ]}
    layout={{
      width: 1200,
      height: 500,
      title: { text: symbol },
      paper_bgcolor: `url(${backgroundImage_st_bg1})`,
      plot_bgcolor: "transparent",
    }}
  />
</div>

        {/* <table>
          <thead>
            <tr>
              <th>TODAY DATE :</th>
              <th>CUREENT PRICE</th>
              <th>DAY HIGH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stockChartXValues[0]}</td>
              <td>{stockChartYValues[0]}</td>
              <td>{stockChartHValues[0]}</td>
            </tr>
          </tbody>
        </table> */}
        <div class="card" style={{width: "18rem"}}>
          <div class="card-header">
          Featured
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Today Date:{stockChartXValues[0]}</li>
            <li class="list-group-item">SMA:{stockChartYValues[0]}</li>
            {/* <li class="list-group-item">Today Highest Price:{stockChartHValues[0]}</li> */}
          </ul>
        </div>

      </div>
    </div>
          
  </InfoSec_stock>
  );
}

export default Stock;
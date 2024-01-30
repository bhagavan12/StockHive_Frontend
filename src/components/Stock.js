// import React from 'react';
// import Plot from 'react-plotly.js';
// class Stock extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             stockCharXValues: [],
//             stockCharYValues: []
//         }
//     }
//     componentDiMount(){
//         this.fetchStock();
//     }
//     fetchStock(){
//         const pointerToThis = this;
//         console.log(pointerToThis);
//         const API_KEY = 'PSNO12Q0C3I6ZYR7';
//         let StockSymbol = 'FB';
//         let API_Call = `https:/www.alphavantage.cp/query?
//         function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
//         let stockCharXValuesFunction =[];
//         let stockCharYValuesFunction =[];
//         fetch(API_Call)
//         .then(
//             function(response){
//                 return response.json();
//             }
//         )
//         .then(
//             function(data){
//                 console.log(data);
//                 for(var key in data['Time Series (Daily)']){
//                     stockCharXValuesFunction.push(key);
//                     stockCharYValuesFunction.push(data['Time Series (Daily)']
//                     [key]['1. open']);
//                 }
//                 // console.log(stockCharXValuesFunction);
//                 pointerToThis.setState({
//                     stockCharXValues: stockCharXValuesFunction,
//                     stockCharYValues: stockCharYValuesFunction,
//                 })
//             }
//         )
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Stock Market</h1>
//                 {/* <p>x-values: {this.state.stockCharXValues}</p>
//                 <p>y-values: {this.state.stockCharYValues}</p> */}
//                 <Plot
//                     data={[
//                     {
//                         x: this.state.stockCharXValues,
//                         y: this.state.stockCharYValues,
//                         type: 'scatter',
//                         mode: 'lines+markers',
//                         marker: {color: 'red'},
//                     },
//                     // {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
//                  ]}
//                 layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
//                 />
//             </div>
//         )
//     }
// }

// export default Stock;
// import React from 'react';
// import Plot from 'react-plotly.js';
// let StockSymbol = 'TSCO.LON';
// class Stock extends React.Component {
   
//     constructor(props) {
//     super(props);
    
//     this.state = {
//       stockChartXValues: [],
//       stockChartYValues: []
//     }
//   }

//   componentDidMount() {
//     this.fetchStock();
//   }
  

//   fetchStock() {

    
//     const pointerToThis = this;
//     console.log(pointerToThis);
//     const API_KEY = 'PSNO12Q0C3I6ZYR7';
//     let StockSymbol = 'IBM';
//     <h2>  ${StockSymbol}</h2>

//     //let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
//     //let API_Call =https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=Tata Motors Limited Fully Paid Ord. Shrs&outputsize=full&apikey=${API_KEY}
//     let API_Call =`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
//     //let API_Call =https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
//     let stockChartXValuesFunction = [];
//     let stockChartYValuesFunction = [];

//     fetch(API_Call)
//       .then(
//         function(response) {
//           return response.json();
//         }
//       )
//       .then(
//         function(data) {
//           console.log(data);

//           for (var key in data['Time Series (Daily)']) {
//             stockChartXValuesFunction.push(key);
//             stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
//           }

//           // console.log(stockChartXValuesFunction);
//           pointerToThis.setState({
//             stockChartXValues: stockChartXValuesFunction,
//             stockChartYValues: stockChartYValuesFunction
//           });
//         }
//       )
//   }

//   render() {
//     return (
//       <div>
//         <h1>Stock Market</h1>
//         <h2>  {StockSymbol}</h2>
//         <Plot
//           data={[
//             {
//               x: this.state.stockChartXValues,
//               y: this.state.stockChartYValues,
//               type: 'scatter',
//               mode: 'lines+markers',
//               marker: {color: 'blue'},
//             }
//           ]}
//           layout={{width: 1000, height: 500,title: 'A Fancy Plot'}}
          
//         />
//         document.writeln(this.state.stockChartXValues)
      
//       </div>
//     )
//   }
// }

// export default Stock;
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
    const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&outputsize=full&apikey=${API_KEY}`;
    const stockChartXValuesFunction = [];
    const stockChartYValuesFunction = [];
    const stockChartHValuesFunction = [];

    fetch(API_Call)
      .then(response => response.json())
      .then(data => {
        for (const key in data['Time Series (1min)']) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(data['Time Series (1min)'][key]['1. open']);
          stockChartHValuesFunction.push(data['Time Series (1min)'][key]['2. high']);
        }

        setStockChartXValues(stockChartXValuesFunction);
        setStockChartYValues(stockChartYValuesFunction);
        setStockChartHValues(stockChartHValuesFunction);
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
        <h1>Stock Market</h1>
        <br></br>
        <h1>{symbol}</h1>
      </div>
      <div className="App-S1">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input type="text"  placeHolder="search" onChange={(e) => setSearch(e.target.value)} >
          </input>
          <button onClick={handleSubmit}>Search</button>
          {console.log(symbol)}
        </div>
        <br/>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '46.8%' }}> 
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
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
            }]}
            layout={{
              width: 1200,
              height: 500,
              title: { text: symbol },
              paper_bgcolor: `url(${backgroundImage_st_bg1})`,
              plot_bgcolor: "transparent",
            }}
          />
        {/* </div> */}

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
        {/* <div>
          <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/hotlists/?locale=en#%7B%22colo…C%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fmarket-movers%2F%22%7D"
            style={{boxSizing: "borderBox" ,display: "block",height: "calc(100% - 32px)", width: "100%"}}>
          </iframe>
        </div> */}
          <div style={{ position: 'relative', width: '100%', paddingBottom: '46.8%' }}>
            <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Afalse%2C%22height%22%3A%22100%25%22%2C%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22showIntervalTabs%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Ftechnical-analysis%2F%22%7D" 
              style={{boxSizing: "borderBox", display: "block", height: " calc(100% - 32px", width: "100%"}}>
            </iframe>
          </div>
        </div>
      </div>
          <div style={{ justifyContent: 'center', width: "18rem"}}>
            <div class="card" style={{width: "18rem"}}>
              <div class="card-header">
              Featured
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Today Date:{stockChartXValues[0]}</li>
                <li class="list-group-item">Current Price:{stockChartYValues[0]}</li>
                <li class="list-group-item">Today Highest Price:{stockChartHValues[0]}</li>
              </ul>
            </div>
          </div>  
    </div>
  </div>
        
  </InfoSec_stock>
  );
}

export default Stock;
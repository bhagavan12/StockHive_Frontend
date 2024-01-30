import React, { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';
// import backgroundImage_st_bg1 from '../images/page2_bg.jpg';
// import myGif from '../images/Iphone-spinner-2.gif';
import './stock.css'
import TechnicalA from './TechnicaA';
import {
  InfoSec_stock,
  InfoSec
} from './InfoSection/InfoSection.elements';
export default function Stockss({
    lightBg
  }) {
    const [stockSymbol, setStockSymbol] = useState('TM'); // Default stock symbol
    const [search, setSearch] = useState("");

 
  
  const handleSearch = (e) => {
    // Handle the search functionality here
    // You can update the stockSymbol state with the value entered in the search bar
    // Example: setStockSymbol(newValue);
    e.preventDefault();
    setStockSymbol(stockSymbol);
    // console.log(symbol);
    // setSearch("");
    // fetchStock()
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStockSymbol(stockSymbol);
  //   console.log(stockSymbol);
  //   setSearch("");
   
  // };
  return (
  <div style={{marginTop:"-10.5%" }}>
    <InfoSec_stock lightBg={lightBg}>
        {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}> */}
        <div style={{ justifyContent: 'center',}}>
          <input type="text" value={stockSymbol} placeholder='Enter stock symbol'onChange={e => setStockSymbol(e.target.value)} />
          {/* <button onClick={handleSearch}>Search</button> */}
        </div>   
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '46.8%' }}>
          <iframe
            scrolling="no" allowtransparency="true" frameborder="0" id="tradingview_378bd"
            src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_378b...&symbol=${stockSymbol}`}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
          />
          {/* <iframe id="tradingview_d391a" src={`https://www.tradingview.com/widgetembed/?frameElementId=tradingview_d391a&amp;symbol=NYSE%3ATM&amp;interval=D&amp;sidetoolbar=1&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;watchlist=NSE%3ANIFTY%1FNSE%3ABANKNIFTY%1FNSE%3ACNXFINANCE%1FNSE%3ACNXIT%1FBSE%3ASENSEX%1FNSE%3ACNXPHARMA%1FNSE%3ACNXPSUBANK%1FNCDEX%3AGOLD%1FINDEX%3ASENSEX%1FBSE%3AOILGAS%1FBSE%3ATELCOM%1FBSE%3ABSE500%1FBSE%3AIT&amp;details=1&amp;studies=%5B%5D&amp;theme=light&amp;style=1&amp;timezone=Etc%2FUTC&amp;withdateranges=1&amp;showpopupbutton=1&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;showpopupbutton=1&amp;locale=in&amp;utm_source=in.tradingview.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=NYSE%3ATM#%7B%22page-uri%22%3A%22in.tradingview.com%2Fwidget%2Fadvanced-chart%2F%22%7D`}
          style={{boxSizing: "borderBox" ,display: "block",height: "calc(568px)", width: "4000px"}} frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen=""> 
          </iframe> */}
        </div>
            {/* <div > */}
            {/* <div>
                <iframe scrolling="no" allowtransparency="true" frameborder="0" 
                src="https://s.tradingview.com/embed-widget/hotlists/?locale=en#%7B%22colo…C%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fmarket-movers%2F%22%7D"
                style={{boxSizing: "borderBox" ,display: "block",height: "calc(568px)", width: "400px"}}></iframe>
            </div> */}
            {/* <iframe id="tradingview_d391a" src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_d3…B%22page-uri%22%3A%22in.tradingview.com%2Fwidget%2Fadvanced-chart%2F%22%7D" 
            style={{
              width: '100%',
              height: '100%',
              margin: '0',
              padding: '0',
            }} frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen>…</iframe>
            </div>  */}
      
    </InfoSec_stock>
   <TechnicalA />
    </div>
   
  )
}

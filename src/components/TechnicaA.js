import React ,{useState} from 'react'
import {
    InfoSec_stock1,
    InfoSec
  } from './InfoSection/InfoSection.elements';
export default function TechnicaA({
    lightBg
  }) {
    const [stockSymbol, setStockSymbol] = useState('TM'); // Default stock symbol
    // const [search, setSearch] = useState("");

 
  
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
  return (
    <InfoSec_stock1>
      <div>
          <iframe scrolling="no" allowtransparency="true" frameborder="0" 
          src={`https://s.tradingview.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Afalse%2C%22height%22%3A%22100%25%22%2C%22symbol%22%3A%22${stockSymbol}%22%2C%22showIntervalTabs%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Ftechnical-analysis%2F%22%7D`}
          style={{boxSizing: "borderBox", display: "block", height: "calc(418px)", width: "425px"}}></iframe>
      </div>
      <div>
        <iframe scrolling="no" allowtransparency="true" frameborder="0" 
        src={`//www.googletagmanager.com/ns.html?id=GTM-H34B`} 
        style={{ display: "block", visibility: '0' , height: "calc(418px)", width: "425px" }}></iframe>
      </div>
    </InfoSec_stock1>
  )
}


// const TradingViewWidget = () => {
//   const iframeStyle = {
//     position: 'center', width: '100%', height: '100%'
//   };

//   const src = "https://www.tradingview.com/widgetembed/?frameElementId=tradingview_d391a&amp;symbol=NYSE%3ATM&amp;interval=D&amp;sidetoolbar=1&amp;symboledit=1&amp;saveimage=1&amp;hidetoolbarbg=f1f3f6&amp,watchlist=NSE%3ANIFTY%1FNSE%3ABANKNIFTY%1FNSE%3ACNXFINANCE%1FNSE%3ACNXIT%1FBSE%3ASENSEX%1FNSE%3ACNXPHARMA%1FNSE%3ACNXPSUBANK%1FNCDEX%3AGOLD%1FINDEX%3ASENSEX%1FBSE%3AOILGAS%1FBSE%3ATELCOM%1FBSE%3ABSE500%1FBSE%3AIT&amp;details=1&amp;studies=%5B%5D&amp;theme=light&amp;style=1&amp;timezone=Etc%2FUTC&amp;withdateranges=1&amp;showpopupbutton=1&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;showpopupbutton=1&amp;locale=in&amp;utm_source=in.tradingview.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=NYSE%3ATM#%7B%22page-uri%22%3A%22in.tradingview.com%2Fwidget%2Fadvanced-chart%2F%22%7D";

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '46.8%'}}>
//     <iframe
//       id="tradingview_d391a"
//       src={src}
//       style={iframeStyle}
//       frameBorder="0"
//       allowTransparency="true"
//       scrolling="no"
//       allowFullScreen
//     ></iframe>
//     </div>
//   );
// };

// export default TradingViewWidget;
      
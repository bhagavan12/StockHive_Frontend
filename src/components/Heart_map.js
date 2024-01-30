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
export default function Heart_map({
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
  return (
    <InfoSec_stock lightBg={lightBg}>
        {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}> */}
            <div>
                <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A1000%2C%22height%22%3A500%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22CAD%22%2C%22NZD%22%2C%22INR%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22localhost%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22localhost%3A3000%2F%22%7D"
                style={{boxSizing: "borderBox", display: "block" ,height: "calc(468px)" ,width: "1000px"}}></iframe>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {/* <div>
                <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/hotlists/?locale=en#%7B%22colo…C%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fmarket-movers%2F%22%7D"
                style={{boxSizing: "borderBox" ,display: "block",height: "calc(568px)", width: "400px"}}></iframe>
            </div>
            <div>
                <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Afalse%2C%22height%22%3A%22100%25%22%2C%22symbol%22%3A%22NASDAQ%3ATSLA%22%2C%22showIntervalTabs%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Ftechnical-analysis%2F%22%7D" 
                style={{boxSizing: "borderBox", display: "block", height: "calc(418px)", width: "425px"}}></iframe>
            </div> */}
            </div>
        {/* </div> */}
    </InfoSec_stock>
  )
}

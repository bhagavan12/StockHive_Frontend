import React from 'react';
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
export default function Mover(
    {
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/hotlists/?locale=en#%7B%22colo…C%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fmarket-movers%2F%22%7D"
            style={{boxSizing: "borderBox" ,display: "block",height: "calc(568px)", width: "400px"}}></iframe>
        </div>
    </InfoSec_stock>
  )
}

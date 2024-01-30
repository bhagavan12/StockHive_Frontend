import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiNurseMale, GiMechaHead } from 'react-icons/gi';
import { GiPerson,GiBananaPeel,GiAutoRepair,GiNinjaHead,GiPayMoney,GiMale, GiMoneyStack } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';
import ButtonMailto from '../ButtonMailto';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                {/* <img src={"../../profile1.jpg"} /> */}
                 {/* <GiPayMoney/>  */}
                 <GiMoneyStack/> 
               </PricingCardIcon>
                <PricingCardPlan>Payment Facilitator</PricingCardPlan>
                {/* <PricingCardCost>Payment Facilitator</PricingCardCost>
                <PricingCardLength>Payment Facilitator</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>CH VARSHITH</PricingCardFeature>
                  <PricingCardFeature>varshi1188@gmail.com</PricingCardFeature>
                  <PricingCardFeature>+91 9502945989</PricingCardFeature>
                </PricingCardFeatures>
                {/* <Link > */}
                {/* <Button primary>contact us</Button> */}
                {/* <p><Link to="mailto:varshi1188@gmail.com">Send email</Link></p> */}
                <Button color= "#ffff"><ButtonMailto  label="Contact us"  mailto="mailto:varshi1188@gmail.com" /></Button>

                {/* </Link> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiAutoRepair />
                </PricingCardIcon>
                {/* <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardPlan>Technical Support</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>J SAI BHAGAVAN</PricingCardFeature>
                  <PricingCardFeature>jsbteja123@gmail.com</PricingCardFeature>
                  <PricingCardFeature>+91 8143238894</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary><ButtonMailto label="Contact us" mailto="mailto:jsbteja123@gmail.com" /></Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiNinjaHead />
                </PricingCardIcon>
                {/* <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardPlan>Stock Broker</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>K RAJIV RATNA</PricingCardFeature>
                  <PricingCardFeature>kokkiligaddarjivratna@gmail.com</PricingCardFeature>
                  <PricingCardFeature>+91 8328249858</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary><ButtonMailto label="Contact us" mailto="mailto:kokkiligaddarjivratna@gmail.com">send</ButtonMailto> </Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;

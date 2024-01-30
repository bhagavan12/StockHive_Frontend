import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree,homeObjFour } from './Data';

function Services() {
  return (
    <>
      {/* <Pricing /> */}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Services;

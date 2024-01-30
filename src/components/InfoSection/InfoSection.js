import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonLabel1,
  buttonLabel2,
  buttonLabel3,
  img,
  alt,
  imgStart,
  start
}) {

 
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                
                <div>
                  {buttonLabel && (
                    <Link to='/protifolio'>
                      <Button big fontBig primary={primary}>
                        {buttonLabel}
                      </Button>
                    </Link>
                  )}

                  {buttonLabel1 && (
                    <Link to='/stockss'>
                      <Button big fontBig primary={primary}>
                        {buttonLabel1}
                      </Button>
                    </Link>
                  )}

                  {buttonLabel2 && (
                    <Link to='/news'>
                      <Button big fontBig primary={primary}>
                        {buttonLabel2}
                      </Button>
                    </Link>
                  )}
                  {buttonLabel3 && (
                    <Link to='/login'>
                      <Button big fontBig primary={primary}>
                        {buttonLabel3}
                      </Button>
                    </Link>
                  )}
                </div>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;

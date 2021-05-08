import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
// import { Grid, GridItem } from '@chakra-ui/react';
import tarotCardImg from '../assets/tarot_1.png';
import samsung from '../assets/samsung.png';
import Styled from './styles';

const TarotCard = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClickCard = () => {
    setFlipped((flipped) => !flipped);
  };

  return (
    <Styled.Root>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Styled.FrontWrapper onClick={handleClickCard}>
          <Styled.FrontImage src={tarotCardImg} alt="tarot" />
        </Styled.FrontWrapper>

        <Styled.BackWrapper onClick={handleClickCard}>
          <Styled.BackImage src={samsung} />
          <Styled.BackTitle>삼성전자</Styled.BackTitle>
        </Styled.BackWrapper>
      </ReactCardFlip>
    </Styled.Root>
  );
};

export default TarotCard;

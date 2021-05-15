import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import tarotCardImg from '../assets/tarot_3.jpeg';
import Styled from './styles';

type TarotCardProps = {
  corp: { id: number; name: string; image: string };
};

const TarotCard = ({ corp }: TarotCardProps) => {
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
          <Styled.BackImage src={corp.image} />
          <Styled.BackTitle>{corp.name}</Styled.BackTitle>
        </Styled.BackWrapper>
      </ReactCardFlip>
    </Styled.Root>
  );
};

export default TarotCard;

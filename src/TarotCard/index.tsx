import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import tarotCardImg from '../assets/tarot_3.jpeg';
import Styled from './styles';

type TarotCardProps = {
  corp: { id: number; name: string; image: string };
  onOpenCard: () => void;
  onCloseCard: () => void;
};

const TarotCard = ({ corp, onOpenCard, onCloseCard }: TarotCardProps) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleOpenCard = () => {
    setFlipped((flipped) => !flipped);
    onOpenCard();
  };

  const handleCloseCard = () => {
    setFlipped((flipped) => !flipped);
    onCloseCard();
  };

  return (
    <Styled.Root>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Styled.FrontWrapper onClick={handleOpenCard}>
          <Styled.FrontImage src={tarotCardImg} alt="tarot" />
        </Styled.FrontWrapper>

        <Styled.BackWrapper onClick={handleCloseCard}>
          <Styled.BackImage src={corp.image} />
          <Styled.BackTitle>{corp.name}</Styled.BackTitle>
        </Styled.BackWrapper>
      </ReactCardFlip>
    </Styled.Root>
  );
};

export default TarotCard;

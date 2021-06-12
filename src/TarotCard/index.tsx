import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import tarotCardImg from '../assets/tarot_3.jpeg';
import { CORP } from '../types';
import Styled from './styles';

type TarotCardProps = {
  corp: CORP;
  isFlippable: boolean;
  forceReset: boolean;
  onOpenCard: (card: CORP) => void;
  onCloseCard: (card: CORP) => void;
};

const TarotCard = ({
  corp,
  isFlippable,
  onOpenCard,
  forceReset,
  onCloseCard,
}: TarotCardProps) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleOpenCard = () => {
    if (!isFlippable) return;

    setFlipped((flipped) => !flipped);
    onOpenCard(corp);
  };

  const handleCloseCard = () => {
    setFlipped((flipped) => !flipped);
    onCloseCard(corp);
  };

  useEffect(() => {
    setFlipped(false);
  }, [forceReset]);

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

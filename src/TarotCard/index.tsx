import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import tarotCardImg from '../assets/tarot_3.jpeg';
import Styled from './styles';

type TarotCardProps = {
  corp: { id: number; name: string; image: string };
  onOpenCard: () => void;
  onCloseCard: () => void;
  onClickMoreButton: (corpId: number) => void;
};

const TarotCard = ({
  corp,
  onOpenCard,
  onCloseCard,
  onClickMoreButton,
}: TarotCardProps) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleOpenCard = () => {
    setFlipped((flipped) => !flipped);
    onOpenCard();
  };

  const handleCloseCard = () => {
    setFlipped((flipped) => !flipped);
    onCloseCard();
  };

  const handleClickCardDetailButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    onClickMoreButton(corp.id);
  };

  return (
    <Styled.Root>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Styled.FrontWrapper onClick={handleOpenCard}>
          <Styled.FrontImage src={tarotCardImg} alt="tarot" />
        </Styled.FrontWrapper>

        <Styled.BackWrapper onClick={handleCloseCard}>
          <Styled.BackImage src={corp.image} />
          <Styled.CardButton onClick={handleClickCardDetailButton}>
            &nbsp; 더보기 👉
          </Styled.CardButton>
          <Styled.BackTitle>{corp.name}</Styled.BackTitle>
        </Styled.BackWrapper>
      </ReactCardFlip>
    </Styled.Root>
  );
};

export default TarotCard;

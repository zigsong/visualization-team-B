import React, { useEffect, useMemo, useState, useRef } from 'react';
import _ from 'lodash';
import corporations from '../corporations';
import TarotCard from '../TarotCard';
import Modal from '../Modal';
import CorpDetail from '../CorpDetail';
import Styled from './styles';
import { CORP } from '../types';

const Home = () => {
  const [corpId, setCorpId] = useState<number>(0);
  const [selectedCards, setSelectedCards] = useState<CORP[]>([]);
  const scrollRef = useRef<HTMLElement>(null);
  const shuffledCorps = useMemo(() => _.shuffle(corporations), []);

  const handleSelectCard = (card: CORP) => {
    setSelectedCards(selectedCards.concat(card));
  };

  const handleUnselectCard = (card: CORP) => {
    setSelectedCards(
      selectedCards.filter((selectedCard) => selectedCard.id !== card.id)
    );
  };

  const handleClickCardDetailButton = (id: number) => {
    setCorpId(id);
  };

  const handleClickModalClose = () => {
    setCorpId(0);
  };

  useEffect(() => {
    if (selectedCards.length === 3) {
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [selectedCards]);

  const selectedCardNames = selectedCards
    .map((selectedCard) => selectedCard.name)
    .join(' vs ');

  return (
    <Styled.Root>
      <Styled.GridContainer>
        {shuffledCorps.map((corp) => (
          <li key={corp.id}>
            <TarotCard
              corp={corp}
              onOpenCard={handleSelectCard}
              onCloseCard={handleUnselectCard}
              onClickMoreButton={handleClickCardDetailButton}
            />
          </li>
        ))}
        <Modal isOpen={corpId} onClickClose={handleClickModalClose}>
          {corpId}번 기업
        </Modal>
      </Styled.GridContainer>
      {selectedCards.length === 3 && (
        <Styled.CompareSection ref={scrollRef}>
          <Styled.CompareTitle>{selectedCardNames}</Styled.CompareTitle>
          <CorpDetail />
        </Styled.CompareSection>
      )}
    </Styled.Root>
  );
};

export default Home;

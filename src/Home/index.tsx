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
  const [isCompareShowing, setCompareShowing] = useState<boolean>(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLElement>(null);

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

  const handleClickCompare = () => {
    setCompareShowing(true);
  };

  const selectedCardNames = selectedCards
    .map((selectedCard) => selectedCard.name)
    .join(' vs ');

  useEffect(() => {
    if (selectedCards.length === 3) {
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (isCompareShowing) {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isCompareShowing]);

  return (
    <Styled.Root>
      <Styled.GridContainer>
        {shuffledCorps.map((corp) => (
          <li key={corp.id}>
            <TarotCard
              corp={corp}
              isFlippable={selectedCards.length < 3}
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
        <Styled.ScrollClick ref={scrollRef} onClick={handleClickCompare}>
          🏢 선택 기업 비교하기
        </Styled.ScrollClick>
      )}
      {isCompareShowing && (
        <Styled.CompareSection ref={resultRef}>
          <Styled.CompareTitle>{selectedCardNames}</Styled.CompareTitle>
          <CorpDetail />
        </Styled.CompareSection>
      )}
    </Styled.Root>
  );
};

export default Home;

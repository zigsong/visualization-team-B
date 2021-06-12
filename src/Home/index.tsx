import React, { useEffect, useMemo, useState, useRef } from 'react';
import _ from 'lodash';
import corporations from '../corporations';
import TarotCard from '../TarotCard';
import Modal, { MordalPortal } from '../Modal';
import CorpDetail from '../CorpDetail';
import Styled from './styles';
import { CORP } from '../types';
import GuideModal from '../GuideModal';

const Home = () => {
  const [isGuideOpen, setGuideOpen] = useState<boolean>(false);
  const [selectedCards, setSelectedCards] = useState<CORP[]>([]);
  const [isCompareShowing, setCompareShowing] = useState<boolean>(false);
  const [isRestartShowing, setRestartShowing] = useState<boolean>(false);
  const [isRestart, setRestart] = useState<boolean>(false);

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

  const handleClickCompare = () => {
    setCompareShowing(true);
    setRestartShowing(true);
    setRestart(false);
  };

  const handleClickRestart = () => {
    setSelectedCards([]);
    setCompareShowing(false);
    setRestartShowing(false);
    setRestart(true);
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

  useEffect(() => {
    setTimeout(() => {
      setGuideOpen(true);
    }, 1000);
  }, []);

  return (
    <Styled.Root>
      <Styled.GridContainer>
        {shuffledCorps.map((corp) => (
          <Styled.CardItem
            key={corp.id}
            isFlipped={selectedCards.includes(corp)}
          >
            <TarotCard
              corp={corp}
              isFlippable={selectedCards.length < 3}
              forceReset={isRestart}
              onOpenCard={handleSelectCard}
              onCloseCard={handleUnselectCard}
            />
          </Styled.CardItem>
        ))}
      </Styled.GridContainer>
      {selectedCards.length === 3 &&
        (!isRestartShowing ? (
          <Styled.ScrollClick ref={scrollRef} onClick={handleClickCompare}>
            🏢 선택 기업 비교하기
          </Styled.ScrollClick>
        ) : (
          <Styled.ScrollClick onClick={handleClickRestart}>
            🌱 다시 선택하기
          </Styled.ScrollClick>
        ))}
      {isCompareShowing && (
        <Styled.CompareSection ref={resultRef}>
          <Styled.CompareTitle>{selectedCardNames}</Styled.CompareTitle>
          <CorpDetail corporations={selectedCards} />
        </Styled.CompareSection>
      )}
      <MordalPortal>
        <Modal isOpen={isGuideOpen} onClickClose={() => setGuideOpen(false)}>
          <GuideModal onClickStart={() => setGuideOpen(false)} />
        </Modal>
      </MordalPortal>
    </Styled.Root>
  );
};

export default Home;

import React, { useEffect, useMemo, useState, useRef } from 'react';
import _ from 'lodash';
import corporations from '../corporations';
import TarotCard from '../TarotCard';
import Styled from './styles';
import Modal from '../Modal';

const Home = () => {
  const [corpId, setCorpId] = useState<number>(0);
  const [selectedLength, setSelectedLength] = useState<number>(0);
  const scrollRef = useRef<HTMLElement>(null);
  const shuffledCorps = useMemo(() => _.shuffle(corporations), []);

  const handleSelectCard = () => {
    setSelectedLength(selectedLength + 1);
  };

  const handleUnselectCard = () => {
    setSelectedLength(selectedLength - 1);
  };

  const handleClickCardDetailButton = (id: number) => {
    // eslint-disable-next-line no-alert
    setCorpId(id);
  };

  const handleClickModalClose = () => {
    setCorpId(0);
  };

  useEffect(() => {
    if (selectedLength === 3) {
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [selectedLength]);

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
      <Styled.CompareSection ref={scrollRef}>
        엄청난 페이지가 기다리는 중
      </Styled.CompareSection>
    </Styled.Root>
  );
};

export default Home;

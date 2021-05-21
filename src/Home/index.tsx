import React, { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import corporations from '../corporations';
import TarotCard from '../TarotCard';
import Styled from './styles';

const Home = () => {
  const [selectedLength, setSelectedLength] = useState<number>(0);

  const shuffledCorps = useMemo(() => _.shuffle(corporations), []);

  const handleSelectCard = () => {
    setSelectedLength(selectedLength + 1);
  };

  const handleUnselectCard = () => {
    setSelectedLength(selectedLength - 1);
  };

  useEffect(() => {
    if (selectedLength === 3) {
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert('세 장의 카드 클릭! 비교하러가기 (구현중)');
      }, 500);
    }
  }, [selectedLength]);

  return (
    <Styled.Root>
      <Styled.GridContainer>
        {shuffledCorps.map((corp) => (
          <TarotCard
            key={corp.id}
            corp={corp}
            onOpenCard={handleSelectCard}
            onCloseCard={handleUnselectCard}
          />
        ))}
      </Styled.GridContainer>
    </Styled.Root>
  );
};

export default Home;

import React from 'react';
import _ from 'lodash';
import corporations from '../corporations';
import TarotCard from '../TarotCard';
import Styled from './styles';

const Home = () => {
  const shuffledCorps = _.shuffle(corporations);

  return (
    <Styled.Root>
      <Styled.GridContainer>
        {shuffledCorps.map((corp) => (
          <TarotCard key={corp.id} corp={corp} />
        ))}
      </Styled.GridContainer>
    </Styled.Root>
  );
};

export default Home;

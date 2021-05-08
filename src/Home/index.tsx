import React from 'react';
import TarotCard from '../TarotCard';
import Styled from './styles';

const Home = () => {
  return (
    <Styled.Root>
      <Styled.GridContainer>
        {Array.from({ length: 10 }, () => (
          <TarotCard />
        ))}
      </Styled.GridContainer>
    </Styled.Root>
  );
};

export default Home;

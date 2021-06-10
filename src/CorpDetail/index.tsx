import React from 'react';
import Chart from '../Chart';
import { CORP } from '../types';
import Styled from './styles';

interface Props {
  corporations: CORP[];
}

const CorpDetail = ({ corporations }: Props) => {
  return (
    <Styled.Root>
      <Chart corporations={corporations} />
    </Styled.Root>
  );
};

export default CorpDetail;

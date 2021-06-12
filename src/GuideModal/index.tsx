import React from 'react';
import Styled from './styles';

interface Props {
  onClickStart: () => void;
}

const GuideModal = ({ onClickStart }: Props) => {
  return (
    <Styled.Root>
      <div>
        💸금전운을 가장 높이고 싶다면? <br />
        당신과 잘 맞는 회사를 점쳐드릴게요. <br />
        랜덤하게 <b>3장의 타로카드🃏</b>를 선택해주세요!
      </div>
      <Styled.StartButton onClick={onClickStart}>
        카드 선택하기
      </Styled.StartButton>
    </Styled.Root>
  );
};

export default GuideModal;

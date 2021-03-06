import React from 'react';
import Styled from './styles';

interface Props {
  onClickStart: () => void;
}

const GuideModal = ({ onClickStart }: Props) => {
  return (
    <Styled.Root>
      <div>
        ๐ธ๊ธ์ ์ด์ ๊ฐ์ฅ ๋์ด๊ณ  ์ถ๋ค๋ฉด? <br />
        ๋น์ ๊ณผ ์ ๋ง๋ ํ์ฌ๋ฅผ ์ ์ณ๋๋ฆด๊ฒ์. <br />
        ๋๋คํ๊ฒ <Styled.Highlight>3์ฅ์ ํ๋ก์นด๋๐</Styled.Highlight>๋ฅผ
        ์ ํํด์ฃผ์ธ์!
      </div>
      <Styled.StartButton onClick={onClickStart}>
        ์นด๋ ์ ํํ๊ธฐ
      </Styled.StartButton>
    </Styled.Root>
  );
};

export default GuideModal;

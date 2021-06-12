import { createPortal } from 'react-dom';
import React from 'react';
import Styled from './styles';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClickClose: () => void;
}

export const MordalPortal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById('guide') as HTMLElement;

  return createPortal(children, el);
};

const Modal = ({ isOpen, children, onClickClose }: ModalProps) => {
  const handleClickDimmer = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClickClose();
  };

  return (
    <Styled.Dimmer isOpen={isOpen} onClick={handleClickDimmer}>
      <Styled.Container>
        <Styled.CloseButton onClick={onClickClose}>
          <svg viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </Styled.CloseButton>
        {children}
      </Styled.Container>
    </Styled.Dimmer>
  );
};

export default Modal;

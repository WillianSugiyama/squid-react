import React from 'react';
import { ButtonStyled } from './style';

interface Props {
  children: React.ReactNode;
  trigger: (navigate: any) => void;
}

export const Button = ({ children, trigger }: Props) => {
  return <ButtonStyled onClick={trigger}>{children}</ButtonStyled>;
};

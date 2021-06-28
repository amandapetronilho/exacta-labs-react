import styled, { css } from "styled-components";
import { ArrowBack, ArrowForward } from '@styled-icons/material';

export const Wrapper = styled.div`
margin-top: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
color:#073b4c;
`;

export const Back = styled(ArrowBack)`
  width: 2rem;

  ${({ disabled }) => disabled && css `color: transparent`}
`;

export const Next = styled(ArrowForward)`
  width: 2rem;

  ${({ disabled }) => disabled && css `color: transparent`}
`;
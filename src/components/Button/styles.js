import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  margin: 8px 0;
  border: 0;
  border-radius: 2px;
  color: #fff;
  background: #118ab2;
  box-shadow: 2px 2px 4px 0.25px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
  `;
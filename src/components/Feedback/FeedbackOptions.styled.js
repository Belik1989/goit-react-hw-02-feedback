import styled from 'styled-components';

export const StyledButton = styled.button`
  /* background: url('./src/images/coffee.png'); */
  background-color: #e2bc9b;
  font-family: fantasy;
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  border-radius: 5px;
  border-color: transparent;
  margin-right: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  transition: 300ms;
  &:hover {
    background-color: #f3b4a5;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px;
    scale: 1.3;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

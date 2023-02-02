import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 24px;
  color: #f3dba5;
  text-shadow: 2px 0 #aa8e74, 0 2px #aa8e74, 2px 0 #aa8e74, 0 2px #aa8e74;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    margin-left: 5px;
  }
`;

export const FeetbackBlock = styled.div`
  display: block;
  background: rgb(170, 142, 116);
  border-radius: 8px;
  padding: 15px;
`;

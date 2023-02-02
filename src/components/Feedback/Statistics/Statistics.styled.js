import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  background-color: #f3c6a5;
  padding-left: 0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    font-family: fantasy;
    color: #aa7e74;
    text-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

    font-size: 15px;
    & svg {
      height: 32px;
      width: 32px;
      fill: #aa7e74;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    }
  }
  & span {
    font-family: 'Gill Sans', sans-serif;
    font-size: 15px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #aa7e74;
    color: white;
  }
`;

export const NotificationSpan = styled.span`
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
`;

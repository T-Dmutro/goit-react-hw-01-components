import styled from '@emotion/styled';
var randomColor = require('randomcolor');
export const TitleMain = styled.h2`
  color: #333;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 25px;
`;
export const StatisticItems = styled.ul`
  height: 60px;
  display: flex;
  flex-shrink: 0;
  list-style: none;
  padding: 0px;
  margin-bottom: 0px;
`;
export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 120px;
  border: 1px solid #000;
  background-color: ${props => {
    return randomColor();
  }};
`;
export const Label = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-evenly;
`;
export const Percentage = styled.span`
  text-align: center;
  font-size: 16px;
`;

export const SectionContainer = styled.section`
  padding: 0px;
  margin-bottom: 20px;
  width: 540px;
  margin: 40px auto 0px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
`;

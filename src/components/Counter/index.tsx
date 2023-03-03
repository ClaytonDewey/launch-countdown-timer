import React from 'react';
import styled from 'styled-components';
import Count from './Count';

type CounterProps = {};

const StyledDiv = styled.div`
  text-align: center;
  perspective: 400px;
  margin: 20px auto;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const Counter: React.FC<CounterProps> = () => {
  return (
    <StyledDiv>
      <Count />
      <Count />
      <Count />
      <Count />
    </StyledDiv>
  );
};
export default Counter;

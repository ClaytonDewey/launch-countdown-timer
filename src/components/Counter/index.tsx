import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Count from './Count';

type CounterProps = {};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

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
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();

    const difference = +new Date(`04/01/${year}`) - +new Date();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <StyledDiv>
      {Object.keys(timeLeft).map((keyName, i) => {
        // console.log(typeof timeLeft[keyName]);
        return (
          <Count
            key={i}
            type={keyName}
            count={timeLeft[keyName as keyof TimeLeft]}
          />
        );
      })}
    </StyledDiv>
  );
};
export default Counter;

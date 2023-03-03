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

    const difference = +new Date(`03/04/${year}`) - +new Date();

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

/* const useCountdown = (deadline: Date) => {
  https://stackoverflow.com/questions/73429793/im-having-trouble-in-making-a-countdown-timer-reactjs
  // Time is in seconds
  const [time, setTime] = useState(
    Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000))
  );

  const decrement = () =>
    setTime((prevTime) => {
      return prevTime === 0 ? 0 : prevTime - 1;
    });

  useEffect(() => {
    const id = setInterval(decrement, 1000);
    return () => clearInterval(id);
  }, []);

  const format = (num: number): string => {
    return num < 10 ? '0' + num : num.toString();
  };

  return {
    days: format(Math.floor(time / (3600 * 24))),
    hours: format(Math.floor((time / 3600) % 24)),
    minutes: format(Math.floor((time / 60) % 60)),
    seconds: format(time % 60),
  };
}; */

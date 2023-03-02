import React from 'react';
import Count from './Count';

type CounterProps = {};

const Counter: React.FC<CounterProps> = () => {
  return (
    <div>
      <Count />
      <Count />
      <Count />
      <Count />
    </div>
  );
};
export default Counter;

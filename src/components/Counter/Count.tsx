import React from 'react';
import styled from 'styled-components';

type CountProps = {};

const StyledCard = styled.span`
  display: inline-block;
  margin: 0 5px;
  text-align: center;
  font-weight: 700;

  .flip-clock__slot {
    font-size: 1.6rem;
    color: var(--primary-gray);
    text-transform: uppercase;
  }

  .card {
    display: block;
    position: relative;
    padding-bottom: 0.72em;
    font-size: 9vw;
    line-height: 0.95;
    margin-bottom: 2rem;
  }

  .card__top,
  .card__bottom,
  .card__back::before,
  .card__back::after {
    display: block;
    height: 0.72em;
    color: var(--primary-red);
    background: hsl(236, 21%, 20%);
    padding: 0.25em 0.25em;
    border-radius: 0.15em 0.15em 0 0;
    -moz-backface-visiblity: hidden;
    transform-style: preserve-3d;
    width: 1.8em;
    transform: translateZ(0);
  }

  .card__bottom {
    color: var(--primary-red);
    position: absolute;
    top: 50%;
    left: 0;
    border-top: solid 1px #000;
    background: var(--dark-blue);
    border-radius: 0 0 0.15em 0.15em;
    pointer-events: none;
    overflow: hidden;
  }

  .card__bottom::after {
    display: block;
    margin-top: -0.72em;
  }

  .card__back::before,
  .card__bottom::after {
    content: attr(data-value);
  }

  .card__back {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0%;
    pointer-events: none;
  }

  .card__back::before {
    position: relative;
    z-index: -1;
    overflow: hidden;
  }

  .flip .card__back::before {
    animation: flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);
    animation-fill-mode: both;
    transform-origin: center bottom;
  }

  .flip .card__back .card__bottom {
    transform-origin: center top;
    animation-fill-mode: both;
    animation: flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1); // 0.3s;
  }

  @keyframes flipTop {
    0% {
      transform: rotateX(0deg);
      z-index: 2;
    }
    0%,
    99% {
      opacity: 0.99;
    }
    100% {
      transform: rotateX(-90deg);
      opacity: 0;
    }
  }

  @keyframes flipBottom {
    0%,
    50% {
      z-index: -1;
      transform: rotateX(90deg);
      opacity: 0;
    }
    51% {
      opacity: 0.99;
    }
    100% {
      opacity: 0.99;
      transform: rotateX(0deg);
      z-index: 5;
    }
  }
`;

const Count: React.FC<CountProps> = () => {
  return (
    <StyledCard className='flip-clock__piece flip'>
      <b className='flip-clock__card card'>
        <b className='card__top'>11</b>
        <b className='card__bottom' data-value='12'></b>
        <b className='card__back' data-value='12'>
          <b className='card__bottom' data-value='11'></b>
        </b>
      </b>
      <span className='flip-clock__slot'>Days</span>
    </StyledCard>
  );
};
export default Count;

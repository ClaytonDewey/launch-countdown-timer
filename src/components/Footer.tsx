import React from 'react';
import styled from 'styled-components';
import { IconFacebook, IconInstagram, IconPinterest } from './Icons';

type FooterProps = {};

const StyledFooter = styled.footer`
  text-align: center;

  .social-icons {
    margin-bottom: 4rem;

    a {
      &:not(:last-child) {
        margin-right: 3rem;
      }
      svg {
        transition: fill 0.25s ease-in-out;
        fill: var(--dark-blue);
      }

      &:hover {
        svg {
          transition: fill 0.25s ease-in-out;
          fill: var(--primary-red);
        }
      }
    }
  }
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <div className='social-icons'>
        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
          <IconFacebook />
        </a>
        <a href='https://www.pinterest.com/' rel='noreferrer' target='_blank'>
          <IconPinterest />
        </a>
        <a href='https://www.instagram.com/' rel='noreferrer' target='_blank'>
          <IconInstagram />
        </a>
      </div>
      <div className='attribution'>
        Challenge by{' '}
        <a
          href='hhttps://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-'
          rel='noreferrer'
          target='_blank'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://www.claytondewey.io/' rel='noreferrer' target='_blank'>
          Clayton Dewey
        </a>
        .
      </div>
    </StyledFooter>
  );
};
export default Footer;

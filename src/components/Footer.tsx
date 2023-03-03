import React from 'react';
import styled from 'styled-components';
import { IconFacebook, IconInstagram, IconPinterest } from './Icons';

type FooterProps = {};

const StyledFooter = styled.footer`
  text-align: center;
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }
`;

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <div className='social-icons'>
        <IconFacebook />
        <IconPinterest />
        <IconInstagram />
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

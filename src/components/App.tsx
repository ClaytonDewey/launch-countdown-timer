import React from 'react';
import GlobalStyle from '../globalStyles';
import styled from 'styled-components';
import Counter from './Counter';
import Footer from './Footer';

type AppProps = {};

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 10rem;
  }
`;

const App: React.FC<AppProps> = () => {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <main>
          <h1>We&rsquo;re Launching Soon</h1>
          <Counter />
        </main>
        <Footer />
      </StyledContainer>
    </>
  );
};
export default App;

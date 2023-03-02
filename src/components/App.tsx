import React from 'react';
import Counter from './Counter';
import Footer from './Footer';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <main>
        <h1>We're Launching Soon</h1>
        <Counter />
      </main>
      <Footer />
    </>
  );
};
export default App;

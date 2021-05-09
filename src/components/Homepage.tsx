import React from 'react';
import '../index.scss';
import Footer from './footer';

const Homepage = (): JSX.Element => {
  return (
    <div>
      <div>
        <h1>Hello ma!</h1>
      </div>
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Homepage;

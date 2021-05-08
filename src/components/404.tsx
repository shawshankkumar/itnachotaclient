import React from 'react';
import '../index.scss';
import logo from './INTERSTELLAR.jpg';
import Footer from './footer';

const Fourofour = (): JSX.Element => {
  return (
    <section>
      <div className="bg-cover h-screen">
        <img src={logo} alt="hell" />
      </div>
      <div className="absolute top-5 left-1 text-x1 text-sans font-bold ml-5 text-white items-center justify-content p-3	text-opacity-75">
        Not all those who wander are lost...
        <br />
        but you most definitely are my friend.
      </div>
      <div className="absolute bottom-3 w-full ">
        <Footer />
      </div>
      <div className="absolute top-10 right-5 text-3xl text-mono font-bold ml-5 text-black items-center justify-content p-3	hover:text-opacity-100 text-opacity-20 transform hover:-translate-y-1 hover:-translate-x-3	">
        Don&apos;t worry it&apos;s just a 404 Error. You are merely lost on the web.
        <br /> Unlike Cooper, who got lost in a black-hole!
      </div>
    </section>
  );
};

export default Fourofour;

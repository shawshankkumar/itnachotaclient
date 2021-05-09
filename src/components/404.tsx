import React from 'react';
import '../index.scss';
import logo from './img1.jpg';
import Footer from './footer';

const Fourofour = (): JSX.Element => {
  return (
    <div>
      <section className="bg-black">
        <div className="">
          <img src={logo} alt="Oops, unable to load this." className="object-fill w-full h-auto" />
          <body className="">
            <main className="">
              <div className="absolute top-5 left-1 text-x1 text-sans font-bold ml-5 text-white items-center justify-content p-3	text-opacity-75">
                Not all those who wander are lost...
                <br />
                but you most definitely are my friend.
              </div>
            </main>
            <div className=" fixed bottom-40 right-1 text-2xl text-mono font-bold ml-5 text-black items-center justify-content p-3	hover:text-opacity-100 text-opacity-20 transform hover:-translate-y-1 hover:-translate-x-3	">
              Don&apos;t worry it&apos;s just a 404 Error. You are merely lost on the web.
              <br /> Unlike Cooper, who got lost in a black-hole!
            </div>
          </body>
        </div>
      </section>
      <div className="">
        <footer className=" content-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Fourofour;

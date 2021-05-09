import React from 'react';
import '../index.scss';
import { FaInstagram, FaGithub, FaBlog, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  const permanentFooter = `Forged by the Dark Lord Shashank💖 at Mount Doom🔥 to gain dominion over other url-shorteners! 😈`;
  const tempFooter = `Yes, you guessed it right!🥳 I am a huge geek.🤺 I love shows, movies and books(though some people call me "farzi" for not reading HP). Ping me, we'll have a nice chat!`;
  const [text, setText] = React.useState(permanentFooter);
  return (
    <footer>
      <div className="container w-full text-mono p-2 fixed bottom-0 bg-black justify-center items-center text-center">
        <div className="text-white text-center transform hover:-translate-y-1">
          <a href="https://instagram.com/shashankkumarthakur" className="text-x1" target="_blank" rel="noreferrer">
            <FaInstagram className="inline " />
            &nbsp; Instagram&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a href="https://github.com/shawshankkumar" target="_blank" rel="noreferrer">
            <FaGithub className="inline" />
            &nbsp;Github&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a href="https://humansofcollege.in" target="_blank" rel="noreferrer">
            <FaBlog className="inline" />
            &nbsp;Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a href="mailto:shashankkumarthakur@gmail.com" target="_blank" rel="noreferrer">
            <FaMailBulk className="inline" />
            &nbsp;E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a href="https://www.linkedin.com/in/shawshankkumar/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="inline" />
            &nbsp;LinkedIn
            <br />
          </a>
        </div>
        <div
          className="text-center text-x1 font-bold ml-5 text-white items-center justify-content p-3	"
          onMouseLeave={() => {
            setText(permanentFooter);
          }}
          onMouseOver={() => {
            setText(tempFooter);
          }}
          onFocus={() => {}}
        >
          <div> {text}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import '../index.scss';
import axios from 'axios';
import copy from 'copy-to-clipboard';

import Footer from './footer';

const Homepage = (): JSX.Element => {
  const formText = 'phalanadhimka.com/whyisthisurlsolong?';
  const texts = 'ss';
  const api = 'https://itnachota.herokuapp.com/api/create/link';
  const [text, setText] = React.useState(formText);
  const [value, setValue] = React.useState('');
  const [url, setUrl] = React.useState('https://itnachota.vercel.app/');
  const [message, setMessage] = React.useState('');
  const [button, setButton] = React.useState('itnachota');

  const onSubmitHandler = () => {
    setValue('Waving my wand to make this url shorter...');
    const urlRegex = new RegExp(/(itnachota.vercel.app)/);
    console.log(urlRegex.test(url));
    if (!urlRegex.test(url))
      axios
        .post(api, { link: url })
        .then(code => {
          const link = `itnachota.vercel.app/${code.data.code}`;
          setValue(link);
          setMessage('🎊 Your itnachota url is here! 🎊');
          setUrl(link);
          if (copy(link)) setButton('Link copied!🎉');
        })
        .catch(e => {
          setValue('Oopsie, something went wrong!');
        });
    else {
      setMessage('Woah easy there! ✋ The url is already itnachota, aur kitna chota?');
      setValue(url);
    }
  };
  return (
    <div>
      <div className="bg-black bg-gradient-to-t from-blue-500 via-gray-300	to-gray-50	min-h-screen flex flex-col justify-center">
        {/* <div className="absolute top-5 right-10">
          <button type="button" className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              itnachota url
            </a>
          </button>
        </div> */}
        <div className="absolute top-10 left-10">
          <button type="button" className=" bg-blue-500 hover:bg-red-500 text-white py-2 px-4 rounded">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <div className="font-mono font-extrabold inline">itnachota</div>
            </a>
          </button>
        </div>
        <div className="container mx-auto my-20 w-1/2 border border-none bg-transparent ">
          <div className="p-8 space-y-10 shadow-2xl ">
            <form
              onMouseEnter={() => {
                setText('Enter url here...');
              }}
              onMouseLeave={() => {
                setText(formText);
              }}
              onSubmit={event => {
                event.preventDefault();
                onSubmitHandler();
              }}
            >
              <div className="text-2xl text-bold text-center"> {message}</div>
              <input
                type="text"
                name="url"
                className="bg-transparent placeholder-black text-font-sans box-bover h-12 w-full border rounded-md border-none text-center"
                placeholder={text}
                value={value}
                onChange={e => {
                  setUrl(e.target.value);
                  setValue(e.target.value);
                }}
              />
              <br />
              <br />
              <div>
                <input
                  type="submit"
                  value={button}
                  className="border rounded-md w-full h-10 items-center text-center bg-gray-300 border-rounded hover:bg-black hover:text-white"
                />
              </div>
            </form>
          </div>
        </div>
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

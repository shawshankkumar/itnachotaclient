import React from 'react';
import '../index.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Fourofour from './404';
import img1 from './img6.jpg';
import img2 from './img4.jpg';
import img3 from './img10.jpg';
import Footer from './footer';

const Redirection = () => {
  const errorMessage = 'Oops! Something went wrong. We have sent a letter to 221B Baker Street.';
  const fetchingMEssage = 'Let me wave my elder wand and redirect you to your url!';
  const invalidCode = 'This is not a valid "itna chota" url. Please recheck!';
  const [image, setImage] = React.useState(img1);
  const { code } = useParams() as { code: string };
  if (code.length !== 6) return Fourofour();
  if (!code) return Fourofour();
  const api = `https://itnachota.herokuapp.com/api/fetch/link?code=${code}`;
  axios
    .get(api)
    .then(data => {
      if (data.data.success) window.location.href = data.data.link;
    })
    .catch(err => {
      if (err.message === 'Request failed with status code 404') setImage(img3);
      else setImage(img2);
    });
  return (
    <div>
      <div>
        <div className="items-center">
          <img src={image} alt="Network failure" className="object-fill w-full h-auto" />
        </div>
        <div className="absolute top-10 text-black text-bold">
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Redirection;

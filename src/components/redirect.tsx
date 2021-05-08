import React from 'react';
import '../index.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Fourofour from './404';

const Redirection = () => {
  const errorMessage = 'Oops! Something went wrong. We have sent a letter to 221B Baker Street.';
  const fetchingMEssage = 'Let me wave my elder wand and redirect you to your url!';
  const invalidCode = 'This is not a valid "itna chota" url. Please recheck!';
  const [text, setText] = React.useState(fetchingMEssage);
  const { code } = useParams() as { code: string };
  if (code.length !== 6) return Fourofour();
  if (!code) return Fourofour();
  const api = `http://localhost:4000/api/fetch/link?code=${code}`;
  axios
    .get(api)
    .then(data => {
      if (data.data.success) window.location.href = data.data.link;
    })
    .catch(err => {
      if (err.message === 'Request failed with status code 404') setText(invalidCode);
      else setText(errorMessage);
    });
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
export default Redirection;

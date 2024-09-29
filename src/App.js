import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [memes, setMemes] = useState([]);
  const [memeImage, setMemeImage] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
      .then(response => {
        setMemes(response.data.data.memes);
      })
      .catch(error => {
        console.error('Error fetching memes', error);
      });
  }, []);

  const generateMeme = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setMemeImage(memes[randomIndex]);
  };

  return (
    <div className='mainDiv'>
      <div>
      <h1 className='meme-header'>Meme Generator</h1>

{memeImage && (
  <div className='mememe'>
    <img src={memeImage.url} alt={memeImage.name} width="300" />
    <h2 className='head1'>{topText}</h2>
    <h2 className='head2'>{bottomText}</h2>

    <div>
      <input
        className='btn2'
        type="text"
        placeholder="Top Text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <input
        className='btn2'
        type="text"
        placeholder="Bottom Text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
    </div>
  </div>
)}
      </div>

      <button className='btn1' onClick={generateMeme}>Generate Meme</button>

    </div>
  );
}

export default App;

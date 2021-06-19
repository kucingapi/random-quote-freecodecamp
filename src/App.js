import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import {FaQuoteLeft} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

function App() {

  function createHsl(hue,lightness,saturation){
    return(`hsl(${hue},${lightness}%,${saturation}%)`);
  }

  const [quote, setQuote] = useState('');
  const [currentHue, setHue] = useState(0);
  const [currentColor, setColor] = useState('hsl(0,80%,60%)');
  const [twitterLink, setTwitterLink] = useState('');

  useEffect(async () => {
		const response = await fetch('https://api.quotable.io/random');
		const data = await response.json();
    console.log(data.content);
		setQuote(data);

    setTwitterLink(
      'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + data.content + '" ' + data.author)
    );

  },[currentColor])
  

  const changingColor = () => {
    currentHue === 250? setHue(0) : setHue(currentHue +50);
    const currentHslColor = createHsl(currentHue,80,60);

    document.body.style.backgroundColor = currentHslColor;
    console.log(currentColor);
    setColor(currentHslColor);
  }
    
  return (
    <div id="wrapper">
      <div id="quote-box">
        <p id="text" style={{color: currentColor}}><FaQuoteLeft/> {quote.content}</p>
        <p id="author" style={{color: currentColor}}>-{quote.author}</p>
        <div className="link">
          <a id="tweet-quote" href={twitterLink} target="_top" style={{color: currentColor}}>
            <FaTwitter/>
          </a>

          <button onClick={changingColor}  id="new-quote" style={{background: currentColor}}>New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;

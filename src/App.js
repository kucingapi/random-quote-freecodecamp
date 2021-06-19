import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  function createHsl(hue,lightness,saturation){
    return(`hsl(${hue},${lightness}%,${saturation}%)`);
  }

  const [currentHue, setHue] = useState(0);
  const [color, setColor] = useState({color : 'hsl(0,80%,60%)'});

  const changingColor = () => {
    currentHue === 250? setHue(0) : setHue(currentHue +50);
    const currentHslColor = createHsl(currentHue,80,60);

    document.body.style.backgroundColor = currentHslColor;
    setColor({color : currentHslColor});
    console.log(color);
  }
    
  return (
    <div id="wrapper">
      <div id="quote-box">
        <p id="text" style={color}>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.</p>
        <p id="author" style={color}>-Steve jobs</p>

        <button onClick={changingColor} id="new-quote">Press</button>

      </div>
    </div>
  );
}

export default App;

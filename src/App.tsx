import React from 'react';
import './App.css';
import {Typewriter} from "react-simple-typewriter";

function App() {
    return (
    <div className="App">
      <header className="App-header" title={"phalla"}>
          <Typewriter
              words={["Phalla", "Ou", "is", "still", "alive."]}
              loop={true}
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={800}
          />
      </header>
    </div>
  );
}

export default App;

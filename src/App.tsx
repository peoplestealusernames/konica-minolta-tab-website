import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setinput] = useState<string>("")

  return (
    <div className='App'>
      <div style={{
        overflowY: "scroll",
      }}
      >
        <textarea
          onChange={(e) => {
            const text = e.target.value
            setinput(text ? text : "")
          }}
          style={{
            display: "flex",
            width: "50vw",
            height: "100vh",
            backgroundColor: "black",
            color: "white",
            fontSize: "150%",
            border: "none",
            padding: "0px",
            margin: "0px"
          }}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
      <div>
        {input}
      </div>
    </div>
  );
}

export default App;

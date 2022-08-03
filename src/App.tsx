import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TabShow } from './TabShow';

function App() {
  const [input, setinput] = useState<string>("")
  const [tabs, settabs] = useState<string[][]>([])

  useEffect(() => {
    const lines = input.split("\n")
    const newTab: string[][] = []

    lines.map((line, i) => {
      const n = i % 20
      const t = (Math.floor(i / 20))

      if (n === 0)
        newTab[t] = []

      newTab[t][n] = line
    })

    settabs(newTab)
  }, [input])

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
      <div style={{
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        margin: "0px",
        border: "1px soild white",
        color: "white",
      }}>
        {tabs.map((tabSection, i) => {
          return <TabShow
            title={`Tab ${i + 1}/${tabs.length}`}
            key={i}
            tabs={tabSection}
          />
        })}
      </div>
    </div>
  );
}

export default App;

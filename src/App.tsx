import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TabShow } from './TabShow';
import { DisplayTabs } from './DisplayTabs';
import { fileReturn, MakeTabs } from './MakeTabs';
import { GrDownload } from "react-icons/gr"
import { DownloadTabs } from './DownloadTabs';

function App() {
  const [input, setinput] = useState<string>("")
  const [tabs, settabs] = useState<string[][]>([])
  const [Model, setModel] = useState("C754")

  function TextChange(newInput: string) {
    const lines = newInput.split("\n")
    const newTab: string[][] = []

    lines.map((line, i) => {
      if (line.length > 20) {
        line = line.slice(0, 20)
        lines[i] = line
      }

      const n = i % 20
      const t = (Math.floor(i / 20))

      if (n === 0)
        newTab[t] = []

      newTab[t][n] = line
    })

    settabs(newTab)
    setinput(lines.join("\n"))
  }

  return (
    <div className='App'>
      <div style={{
        overflowY: "scroll",
      }}
      >
        <textarea
          value={input}
          onChange={(e) => {
            const text = e.target.value
            TextChange(text ? text : "")
          }}
          style={{
            border: "2px solid white",
            display: "flex",
            width: "calc(50vw - 12px)",
            height: "calc(100vh - 12px)",
            backgroundColor: "black",
            color: "white",
            fontSize: "150%",
            padding: "4px",
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
        width: "50vw",
        flexDirection: "column",
      }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            color: "white",
            backgroundColor: "black",
            border: "3px solid gold",
            height: "fit-content"
          }}
        >
          <span style={{
            padding: "1px",
            userSelect: "none"
          }}>
            Type Model:<br />(ex: C754 or C759)
          </span>
          <input
            value={Model}
            style={{
              width: "45px",
              textAlign: "right",
            }}
            onChange={(e) => {
              const val = e.target.value
              setModel(val ? val : "")
            }}
            type="text"
          />
          <DownloadTabs Tabs={tabs} Model={Model} />
        </div>
        <DisplayTabs tabs={tabs} />
      </div>
    </div>
  );
}

export default App;

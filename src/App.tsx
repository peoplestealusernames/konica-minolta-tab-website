import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TabShow } from './TabShow';
import { DisplayTabs } from './DisplayTabs';
import { fileReturn, MakeTabs } from './MakeTabs';

function App() {
  const [input, setinput] = useState<string>("")
  const [tabs, settabs] = useState<string[][]>([])
  const [Model, setModel] = useState("C754")

  useEffect(() => {
    const lines = input.split("\n")
    const newTab: string[][] = []

    const lastLine = lines[lines.length - 1]
    if (lastLine === "")
      lines.pop()

    lines.map((line, i) => {
      const n = i % 20
      const t = (Math.floor(i / 20))

      if (n === 0)
        newTab[t] = []

      newTab[t][n] = line
    })

    settabs(newTab)
  }, [input])

  function DownloadClick() {
    const TabFiles = MakeTabs(tabs, Model)
    TabFiles.forEach(downloadKSF)
  }

  function downloadKSF(tabString: fileReturn) {
    const element = document.createElement("a");
    const file = new Blob(["\ufeff" + tabString.write], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = tabString.name;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element)
  }

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
          }}
        >
          <input
            value={Model}
            onChange={(e) => {
              const val = e.target.value
              setModel(val ? val : "")
            }}
            type="text"
          />
          <div style={{
            display: "flex",
            backgroundColor: "black",
            color: "white",
            border: "2px solid white",
            height: "30px",
            alignItems: "center",
            alignContent: "center",
            justifyItems: "center",
            justifyContent: "center",
            flex: 1
          }}
            onClick={DownloadClick}
          >
            Download
          </div>
        </div>
        <DisplayTabs tabs={tabs} />
      </div>
    </div>
  );
}

export default App;

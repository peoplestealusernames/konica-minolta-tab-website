import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TabShow } from './TabShow';
import { DisplayTabs } from './DisplayTabs';
import { fileReturn, MakeTabs } from './MakeTabs';
import { GrDownload } from "react-icons/gr"
import { DownloadTabs } from './DownloadTabs';
import { Editor } from './Editor';

function App() {
  const [tabs, settabs] = useState<string[][]>([])
  const [Model, setModel] = useState("C754")

  function EditorChange(text: string) {
    const lines = text.split("\n")
    const newTab: string[][] = []

    lines.map((line, i) => {
      const n = i % 20
      const t = (Math.floor(i / 20))

      if (n === 0)
        newTab[t] = []

      newTab[t][n] = line
    })

    settabs(newTab)
  }

  return (
    <div className='App'>
      <Editor onChange={EditorChange} />
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
          <DownloadTabs
            Tabs={tabs}
            Model={Model}
            style={{
              backgroundColor: "grey",
              color: "black",
              border: "3px solid white",
              flex: 1
            }}
            size={20}
          />
        </div>
        <DisplayTabs tabs={tabs} />
      </div>
    </div>
  );
}

export default App;

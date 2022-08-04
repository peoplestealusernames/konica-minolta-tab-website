import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TabShow } from './TabShow';
import { DisplayTabs } from './DisplayTabs';
import { fileReturn, MakeTabs } from './MakeTabs';
import { GrDownload } from "react-icons/gr"
import { DownloadTabs } from './DownloadTabs';
import { Editor } from './Editor';
import { TabOption } from './TabOptions';

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
        <TabOption tabs={tabs} options={{
          Model: "C754",
          FontSize: 16
        }} />
        <DisplayTabs tabs={tabs} />
      </div>
    </div>
  );
}

export default App;

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
import { PastePopup } from './PastePopup';

function App() {
  const [tabs, settabs] = useState<string[][]>([])
  const [pastePopup, setpastePopup] = useState(true)

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
      <PastePopup active={pastePopup} setActive={setpastePopup} />
      <div style={{
        display: "flex",
        overflowY: "scroll",
        width: "300px",
        height: "100vh",
        flexDirection: "column",
      }}
      >
        <div
          style={{
            display: "flex",
            border: "4px solid white",
            backgroundColor: "grey",
            color: "black",
            fontSize: "150%",
            padding: "4px",
            margin: "0px",
            justifyContent: "center",
            alignContent: "center"
          }}
          onClick={() => { setpastePopup(true) }}
        >
          Import paths
        </div>
        <Editor onChange={EditorChange} />
      </div>
      <div style={{
        display: "flex",
        flex: 1,
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

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayTabs } from './DisplayTabs';
import { fileReturn, MakeTabs } from './MakeTabs';
import { GrDownload } from "react-icons/gr"
import { DownloadTabs } from './DownloadTabs';
import { Editor } from './Editor';
import { Options, TabOption } from './TabOptions';
import { PastePopup } from './PastePopup';

function App() {
  const [tabs, settabs] = useState<string[][]>([])
  const [pastePopup, setpastePopup] = useState(false)
  const [input, setinput] = useState<string>("Enter tab names")

  const [options, setoptions] = useState<Options>({
    Model: "C754",
    FontSize: 16,
    Cut: 5
  })

  function EditorChange(text: string) {
    setinput(text)
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
      <PastePopup setInput={EditorChange} active={pastePopup} setActive={setpastePopup} />
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
        <Editor value={input} onChange={EditorChange} />
      </div>
      <div style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}>
        <TabOption tabs={tabs} onChange={setoptions} options={options} />
        <DisplayTabs tabs={tabs} Options={options} />
      </div>
    </div>
  );
}

export default App;

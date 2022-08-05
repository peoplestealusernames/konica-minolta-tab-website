import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayTabs } from './DisplayTabs';
import { fileReturn, MakeTabs } from './MakeTabs';
import { GrDownload } from "react-icons/gr"
import { Editor } from './Editor';
import { Options, TabOption } from './TabOptions';
import { PastePopup } from './PastePopup';
import { TopBar } from './components/TopBar';

function App() {
  const [tabs, settabs] = useState<string[][]>([])
  const [pastePopup, setpastePopup] = useState(false)
  const [input, setinput] = useState<string>("")

  const [selectLine, setselectLine] = useState<number>(1)

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
      <TopBar tabs={tabs} options={options} />
      <PastePopup setInput={EditorChange} active={pastePopup} setActive={setpastePopup} />
      <div className='Area' style={{
        position: "relative",
        display: "flex",
        flexGrow: 1,
        textAlign: "center",
        flexDirection: "row",
        overflow: "auto"
      }}>
        <Editor style={{
          maxWidth: "350px",
          margin: "30px",
          border: "none",
          borderRadius: "15px",
          padding: "10px",
          transition: "box-shadow 200ms linear",
          boxShadow: `0px 0px 2px 3px lightgrey`,
          outline: "none",
        }}
          focusStyle={{
            boxShadow: `0px 0px 2px 3px red`,
          }}
          selectedLine={selectLine}
          value={input}
          onChange={EditorChange}
          placeholder={"Type tabs here."}
        />
        <div style={{
          display: "flex",
          width: "300px",
          height: "100%",
          flexDirection: "column",
          overflowY: "scroll",
          userSelect: "none",
        }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "4px solid white",
              backgroundColor: "grey",
              color: "black",
              fontSize: "150%",
              padding: "0px",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <span style={{
              borderBottom: "4px solid white"
            }}
              onClick={() => { setpastePopup(true) }}
            >
              Import paths
            </span>
            <span
              onClick={() => { EditorChange(input.split("\n").sort(sortWithNumber).join("\n")) }}
            >
              Sort tab names
            </span>
          </div>
        </div>
        <div style={{
          display: "flex",
          maxHeight: "100%",
          flexDirection: "column",
        }}>
          <TabOption tabs={tabs} onChange={setoptions} options={options} />
          <DisplayTabs tabs={tabs} Options={options} setSelectedLine={setselectLine} />
        </div>
      </div>
    </div >
  );
}

export default App;

function sortWithNumber(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true })
}
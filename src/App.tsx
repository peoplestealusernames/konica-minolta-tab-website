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
import { ContextButton } from './components/ContextButton';
import { MiddleTab } from './components/MiddleTab';
import { FilterTab } from './components/FilterTab';

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
      <PastePopup
        setInput={EditorChange}
        active={pastePopup}
        onClose={() => setpastePopup(false)}
      />
      <div className='Area' style={{
        position: "relative",
        display: "flex",
        height: "100%",
        textAlign: "center",
        flexDirection: "row",
        overflow: "auto",
      }}>
        <Editor style={{
          maxWidth: "35rem",
          margin: "3rem",
          border: "0.2rem solid grey",
          borderRadius: "1.5rem",
          padding: "1rem",
          transition: "box-shadow 200ms ease-in",
          background: "rgb(40,40, 45)",
          fontSize: "2.2rem",
          color: "rgb(255,255,255)",
          outline: "none",
        }}
          focusStyle={{
            boxShadow: `0 0 0.5rem 0.3rem red`,
          }}
          selectedLine={selectLine}
          value={input}
          onChange={EditorChange}
          placeholder={"Type tabs here."}
        />
        <div style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        >
          <FilterTab
            input={input}
            onChange={EditorChange}
            openPastePopup={() => setpastePopup(true)}
          />
          <TabOption
            tabs={tabs}
            onChange={setoptions}
            options={options}
          />
        </div>
        <DisplayTabs
          tabs={tabs}
          Options={options}
          setSelectedLine={setselectLine}
        />
      </div>
    </div >
  );
}

export default App;


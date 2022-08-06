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
          maxWidth: "350px",
          margin: "30px",
          border: "2px solid grey",
          borderRadius: "15px",
          padding: "10px",
          transition: "box-shadow 200ms ease-in",
          background: "rgb(40,40, 45)",
          fontSize: "22px",
          color: "rgb(255,255,255)",
          outline: "none",
        }}
          focusStyle={{
            boxShadow: `0 0 5px 3px red`,
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
          userSelect: "none",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
        >
          <MiddleTab
            style={{
              fontSize: "150%",
              fontWeight: "bold",
              width: "fit-content",
              marginBottom: "60px",
            }}
          >
            <ContextButton style={{
              transition: "box-shadow 250ms linear",
              boxShadow: "0 0 1px 0 white",
              borderRadius: "10px"
            }}
              hoverStyle={{
                color: "inherit",
                boxShadow: "0 0 1px 0 white, 0 0 2px 2px red",
              }}
              onMouseDown={() => { setpastePopup(true) }}
            >
              Import file paths
            </ContextButton>
            <ContextButton style={{
              transition: "box-shadow 250ms linear",
              boxShadow: "0 0 1px 0 white",
              borderRadius: "10px"
            }}
              hoverStyle={{
                boxShadow: "0 0 1px 0 white, 0 0 2px 2px red",
              }}
              onMouseDown={() => { EditorChange(input.split("\n").sort(sortWithNumber).join("\n")) }}
            >
              Sort tab names
            </ContextButton>
          </MiddleTab>
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

function sortWithNumber(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true })
}
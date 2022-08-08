import { useEffect, useState } from 'react';
import './App.css';
import { DisplayTabs } from './DisplayTabs';
import { Editor } from './Editor';
import { Options, TabOption } from './TabOptions';
import { PastePopup } from './PastePopup';
import { TopBar } from './components/TopBar';
import { FilterTab } from './components/FilterTab';

function App() {
  const [tabs, settabs] = useState<string[][]>([[""]])
  const [pastePopup, setpastePopup] = useState(false)
  const [input, setinput] = useState<string>("")

  const [selectLine, setselectLine] = useState<number>(1)

  const [options, setoptions] = useState<Options>({
    Model: "C754",
    FontSize: 16,
    Cut: 5,
    Offset: 2,
  })

  function EditorChange(text: string) {
    setinput(text)
    const lines = text.split("\n")
    const newTab: string[][] = []
    const TabPerFile = Math.floor(20 / options.Cut) * options.Cut

    lines.map((line, i) => {
      const n = i % TabPerFile
      const t = (Math.floor(i / TabPerFile))

      if (n === 0)
        newTab[t] = []

      newTab[t][n] = line
    })

    settabs(newTab)
  }

  useEffect(() => {
    EditorChange(input)
  }, [options.Cut])

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
          width: "35rem",
          flexGrow: 0,
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
          printButton={true}
          placeholder={"Type tabs here."}
          replacer={true}
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


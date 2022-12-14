import { useEffect, useState } from 'react';
import './App.css';
import { DisplayTabs } from './DisplayTabs';
import { Editor } from './Editor';
import { Options, TabOption } from './TabOptions';
import { PastePopup } from './PastePopup';
import { TopBar } from './components/TopBar';
import { FilterTab } from './components/FilterTab';
import { ConvertToTabs } from './ConvertToTabs';

function App() {
  const [tabs, settabs] = useState<string[][]>([[""]])
  const [pastePopup, setpastePopup] = useState(false)
  const [input, setinput] = useState<string>("")

  const [selectLine, setselectLine] = useState<number>(1)

  const [options, setoptions] = useState<Options>({
    Model: "KONICA MINOLTA C754SeriesPCL",
    FontSize: 16,
    Cut: 5,
    Offset: 4,
  })

  useEffect(() => {
    settabs(ConvertToTabs(input, options))
  }, [options.Cut, input])

  return (
    <div className='App'>
      <TopBar tabs={tabs} options={options} />
      <PastePopup
        setInput={setinput}
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
          onChange={setinput}
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
            onChange={setinput}
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


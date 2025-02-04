import { useEffect, useState } from 'react';
import './App.css';
import { DisplayTabs } from './DisplayTabs';
import { Editor } from './Editor';
import { Options, TabOption } from './TabOptions';
import { PastePopup } from './PastePopup';
import { FilterTab } from './components/FilterTab';
import { ConvertToTabs } from './ConvertToTabs';

function App() {
  const [tabs, settabs] = useState<string[][]>([[""]])
  const [pastePopup, setpastePopup] = useState(false)
  const [input, setinput] = useState<string>("")

  const [selectLine, setselectLine] = useState<number>(1)

  const savedOptions = localStorage.getItem("options")
  const initialOptions = savedOptions ? JSON.parse(savedOptions) : {
    Model: "", // Should be overridden by preset
    Version: "", // Should be overridden by preset
    FontSize: 16,
    Cut: 5,
    Offset: 4,
    Font: "Times New Roman",
    bold: true,
  }

  const [options, setoptions] = useState<Options>(initialOptions)

  useEffect(() => {
    settabs(ConvertToTabs(input, options))
  }, [options.Cut, input])

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options))
  }, [options])

  return (
    <div className='App'>
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
        <Editor
          value={input}
          selectedLine={selectLine}
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
            options={options}
            tabs={tabs}
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


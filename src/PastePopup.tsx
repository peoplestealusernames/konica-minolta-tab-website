import { Dispatch, SetStateAction, useState } from "react";
import { Popup } from "./components/popup/Popup";
import { StyledTab } from "./components/popup/StyledTab";
import { Editor } from "./Editor";


export function PastePopup(props: {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>,
    setInput: (input: string) => void
}) {
    const [paths, setpaths] = useState<string>("")

    function GeneratePaths() {
        const out = paths.split("\n").map((e, i) => {
            let file = e.split("/").pop()
            if (!file)
                return ""

            const prefixi = file.lastIndexOf(".")
            if (prefixi !== -1)
                file = file.slice(0, prefixi)

            return file
        })

        props.setInput(out.join("\n"))
    }

    return <Popup
        active={props.active}
        setActive={props.setActive}
    >
        <StyledTab style={{
            flexDirection: "column",
            alignItems: "center"
        }}
            title="Paste paths"
        >
            <div style={{
                display: "flex",
                color: "white",
                margin: "2px",
                border: "2px solid white",
                width: "fit-content"
            }}
                onClick={() => GeneratePaths()}
            >
                Generate Names
            </div>
            <Editor lineLength={1000} value={paths} onChange={setpaths} />
        </StyledTab>
    </Popup>
}
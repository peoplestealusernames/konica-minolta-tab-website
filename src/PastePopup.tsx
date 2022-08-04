import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Popup } from "./components/popup/Popup";
import { StyledTab } from "./components/popup/StyledTab";
import { Editor } from "./Editor";
import path from "path-browserify";

export function PastePopup(props: {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>,
    setInput: (input: string) => void
}) {
    const [paths, setpaths] = useState<string>("")

    function GeneratePaths() {
        const out = paths.split("\n").map((e, i) =>
            path.basename(e)
        )

        props.setInput(out.join("\n"))
        props.setActive(false)
    }

    useEffect(() => {
        setpaths("")
    }, [props.active])

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
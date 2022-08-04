import { Dispatch, SetStateAction, useState } from "react";
import { Popup } from "./components/popup/Popup";
import { StyledTab } from "./components/popup/StyledTab";
import { Editor } from "./Editor";


export function PastePopup(props: {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>,
}) {
    const [paths, setpaths] = useState<string>("")

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

            >
                Generate Names
            </div>
            <Editor lineLength={1000} value={paths} onChange={setpaths} />
        </StyledTab>
    </Popup>
}
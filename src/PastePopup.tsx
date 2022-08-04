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
        <StyledTab title="Paste paths">
            <Editor lineLength={1000} value={paths} onChange={setpaths} />
        </StyledTab>
    </Popup>
}
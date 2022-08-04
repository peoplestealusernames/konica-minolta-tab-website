import { Dispatch, SetStateAction } from "react";
import { Popup } from "./components/popup/Popup";
import { StyledTab } from "./components/popup/StyledTab";


export function PastePopup(props: {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>,
}) {

    return <Popup
        active={props.active}
        setActive={props.setActive}
    >
        <StyledTab title="Paste paths">
            <textarea />
        </StyledTab>
    </Popup>
}
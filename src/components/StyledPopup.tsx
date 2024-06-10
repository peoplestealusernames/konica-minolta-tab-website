import React from "react";
import { ContextButton } from "./ContextButton";
import { Popup } from "./popup/Popup";
import { StyledTab } from "./popup/StyledTab";


export function StyledPopup(props: {
    children?: React.ReactNode
    title?: React.ReactNode
    style?: React.CSSProperties
    onClose: () => void
    active: boolean
}) {
    return <Popup
        active={props.active}
        onClose={() => props.onClose()}
        closeStyle={{
            backgroundColor: "#494a4c",
            borderRadius: "2rem",
            right: "0.5rem",
            top: "0.5rem",
            width: "2rem",
            height: "2rem",
            color: "white",
        }}
    >
        <StyledTab style={{
            flexDirection: "column",
            alignItems: "center",
        }}
            masterStyle={{
                borderRadius: "1.5rem",
                padding: "3.5rem",
                paddingTop: "1rem",
                backgroundColor: "#202123",
                border: "none",
                ...props.style
            }}
            title={props.title}
        >
            {props.children}
        </StyledTab>
    </Popup>
}
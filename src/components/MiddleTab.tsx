import React from "react";
import { StyledTab } from "./popup/StyledTab";


export function MiddleTab(props: {
    style?: React.CSSProperties
    children?: React.ReactNode
    title?: React.ReactNode
}) {
    return <StyledTab
        masterStyle={{
            height: "fit-content",
            border: "0.2rem solid grey",
            borderRadius: "1.5rem",
            padding: "1rem",
            transition: "box-shadow 200ms ease-in",
            background: "rgb(40,40, 45)",
            fontSize: "1.4rem",
            color: "rgb(255,255,255)",
            outline: "none",
            ...props.style
        }}
        style={{
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center"
        }}
        title={props.title}
    >
        {props.children}
    </StyledTab>
}
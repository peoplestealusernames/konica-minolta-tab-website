import React from "react";
import { StyledTab } from "./popup/StyledTab";


export function MiddleTab(props: {
    style?: React.CSSProperties
    children?: React.ReactNode
    title?: React.ReactNode
}) {
    return <StyledTab
        masterStyle={{
            margin: "30px",
            border: "2px solid grey",
            borderRadius: "15px",
            padding: "10px",
            transition: "box-shadow 200ms ease-in",
            background: "rgb(40,40, 45)",
            fontSize: "14px",
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
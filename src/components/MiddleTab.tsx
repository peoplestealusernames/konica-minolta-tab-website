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
            border: "",
            borderRadius: "1.5rem",
            padding: "1rem",
            transition: "box-shadow 200ms ease-in",
            background: "#202123",
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
        titleStyle={
            { color: "#6e6f71" }
        }
        title={props.title}
    >
        {props.children}
    </StyledTab>
}
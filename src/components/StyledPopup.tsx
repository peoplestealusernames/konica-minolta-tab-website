import React from "react";
import { ContextButton } from "./ContextButton";
import { Popup } from "./popup/Popup";
import { StyledTab } from "./popup/StyledTab";


export function StyledPopup(props: {
    children?: React.ReactNode
    title?: React.ReactNode
    onClose: () => void
    active: boolean
}) {
    return <Popup
        active={props.active}
        onClose={() => props.onClose()}
        closeStyle={{
            backgroundImage: `radial-gradient(
                rgba(65,65,65,255) 0%,
                rgba(65,65,65,255) 55%,
                black 60%,
                black 65%,
                rgba(0,0,0,0) 70%)
            `,
            right: "0rem",
            top: "0rem",
            width: "2rem",
            height: "2rem",
            color: "rgb(200,200,200)",
        }}
    >
        <StyledTab style={{
            flexDirection: "column",
            alignItems: "center",
        }}
            masterStyle={{
                borderRadius: "1rem",
                padding: "3.5rem",
                paddingTop: "0rem",
                backgroundImage: "linear-gradient(to bottom, rgb(40,40,45) 0, rgb(50,100,100) 250%)",
                border: "none",
                boxShadow:
                    "0 0 0.2rem 0.3rem lightgrey, " +
                    "0 0 2rem .5rem black, " +
                    "0 0 10rem .5rem black"
            }}
            title={props.title}
        >
            {props.children}
        </StyledTab>
    </Popup>
}
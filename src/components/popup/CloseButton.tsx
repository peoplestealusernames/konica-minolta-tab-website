import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ContextButton } from "../ContextButton";

export function CloseButton(props: {
    onClose: () => void
    stye?: React.CSSProperties
}) {
    const style: React.CSSProperties = {
        position: "absolute",
        right: "0.3rem",
        top: "0.3rem",
        color: "grey",
        height: "2rem",
        width: "2rem",
        transition: "color 200ms linear",
        cursor: "pointer",
        ...props.stye
    }

    return (
        <ContextButton style={style} hoverStyle={{ color: "red" }}>
            <MdOutlineClose
                style={{ display: "flex", width: "100%", height: "100%" }}
                onClick={props.onClose}
            />
        </ContextButton>
    )
}
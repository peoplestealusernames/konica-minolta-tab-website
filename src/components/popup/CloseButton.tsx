import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ContextButton } from "../ContextButton";

export function CloseButton(props: {
    onClose: () => void
    stye?: React.CSSProperties
}) {
    const style: React.CSSProperties = {
        position: "absolute",
        right: "3px",
        top: "3px",
        color: "grey",
        height: "20px",
        width: "20px",
        transition: "color 200ms linear",
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
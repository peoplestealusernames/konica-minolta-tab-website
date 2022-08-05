import React from "react";
import { MdOutlineClose } from "react-icons/md";

export function CloseButton(props: {
    onClose: () => void
    stye?: React.CSSProperties
}) {
    return (
        <MdOutlineClose style={{
            position: "absolute",
            right: "3px",
            top: "3px",
            color: "grey",
            height: "20px",
            width: "20px",
            ...props.stye
        }}
            onClick={props.onClose}
        />
    )
}
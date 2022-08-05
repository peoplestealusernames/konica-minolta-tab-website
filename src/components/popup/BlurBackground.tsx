import React from "react"

export function BlurBackground(props: {
    children?: React.ReactNode
    style?: React.CSSProperties
}) {
    return (
        <div style={{
            display: "flex",
            position: "fixed",
            top: "0px",
            left: "0px",
            background: "rgba(0, 0, 30, 0.5)",
            width: "100vw",
            height: "100vh",
            overflow: "clip",
            ...props.style
        }}>
            {props.children}
        </div>
    )
}
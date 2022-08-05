import React from "react"

export function BlurBackground(props: {
    children?: React.ReactNode
    style?: React.CSSProperties
}) {
    return (
        <div style={{
            display: "flex",
            background: "rgba(0, 0, 30, 0.5)",
            ...props.style
        }}>
            {props.children}
        </div>
    )
}
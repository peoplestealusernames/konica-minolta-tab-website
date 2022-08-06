import React from "react";


export function StyledTab(props: {
    children?: React.ReactNode
    title?: string | React.ReactNode
    style?: React.CSSProperties
    titleStyle?: React.CSSProperties
    masterStyle?: React.CSSProperties
}) {

    return (
        <div style={{
            ...{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "center",
                backgroundColor: "black",
                borderRadius: "0",
                padding: "0.3rem",
                border: "0.2rem solid white",
                width: "fit-content",
            }, ...props.masterStyle
        }}>
            {props.title && <div
                style={{
                    ...{
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        borderBottom: "0.4rem solid white",
                        fontSize: "3rem",
                        padding: "0",
                        margin: "1.4rem",
                        fontWeight: "bold",
                        userSelect: "none",
                    }, ...props.titleStyle
                }
                }>
                {props.title}
            </div >}
            <div
                style={{
                    ...{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }, ...props.style
                }}>
                {props.children}
            </div >
        </div >
    )
}
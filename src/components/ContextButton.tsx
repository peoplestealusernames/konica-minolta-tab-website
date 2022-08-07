import React, { Dispatch, SetStateAction, useState } from "react"


export function ContextButton(props: {
    children: React.ReactNode
    context?: React.ReactNode
    contextStyle?: React.CSSProperties
    style?: React.CSSProperties
    toggle?: boolean
    onMouseDown?: () => void
    onMouseUp?: () => void
    onMouse?: (state: boolean) => void
    onHover?: (Hover: boolean) => void
    pressedStyle?: React.CSSProperties
    hoverStyle?: React.CSSProperties
}) {
    //TODO: toggle button option
    const hoverStyle = props.hoverStyle ? props.hoverStyle : { color: "grey" }
    const pressedStyle = props.pressedStyle ? props.pressedStyle : {}

    const [Hover, setHoverState] = useState<boolean>(false)
    const [Pressed, setPressedState] = useState<boolean>(false)

    const PonMouseDown = props.onMouseDown ? props.onMouseDown : () => { }
    const PonMouseUp = props.onMouseUp ? props.onMouseUp : () => { }
    const PonMouse = props.onMouse ? props.onMouse : () => { }
    const PonHover = props.onHover ? props.onHover : () => { }

    function setHover(state: boolean) {
        setHoverState(state)
        PonHover(state)
    }

    function setPressed(state: boolean) {
        if (props.toggle && !state)
            return

        state = !Pressed

        setPressedState(state)

        try {
            if (state)
                PonMouseDown()
            else
                PonMouseUp()
        } catch (e) { console.error(e) }

        PonMouse(state)
    }

    return (
        <div style={{
            ...{
                position: "relative",
                display: "flex",
                margin: "0.4rem",
                padding: "0.3rem",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                justifyContent: "center",
                borderRadius: "0.6rem",
                color: "white",
                userSelect: "none",
                transition: "color 100ms ease-in",
                cursor: "pointer"
            }, ...props.style,
            ...Hover ? hoverStyle : {},
            ...Pressed ? pressedStyle : {},
        }}
            onMouseEnter={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
            onMouseDown={() => { setPressed(true) }}
            onMouseUp={() => { setPressed(false) }}
        >
            {props.children}
            {
                props.context && Hover && (
                    <div style={{
                        ...{
                            position: "absolute",
                            whiteSpace: "nowrap",
                            backgroundColor: "black",
                            padding: "0.2rem",
                            fontSize: "1.2rem",
                            border: "0.1rem solid white",
                            borderRadius: "0.6rem",
                            color: "white",
                        }, ...props.contextStyle
                    }}>
                        {props.context}
                    </div>
                )
            }
        </div >
    )
}
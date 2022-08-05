import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BlurBackground } from "./BlurBackground";
import { CenterDiv } from "./CenterDiv";
import { CloseButton } from "./CloseButton"


export function Popup(props: {
    active: boolean
    onClose?: () => void
    dissableCloseButton?: boolean;
    children?: React.ReactNode
    closeStyle?: React.CSSProperties
}) {
    const [active, setActive] = useState<boolean>(props.active)

    const onClose = props.onClose ? props.onClose : () => { }

    function close() {
        setActive(false)
        onClose()
    }

    useEffect(() => {
        setActive(props.active)
    }, [props.active])

    useEffect(() => {
        const KeyPressed = (e: KeyboardEvent) => {
            if (e.key === "Escape")
                close()
        }

        if (active)
            window.addEventListener('keydown', KeyPressed)
        else
            window.removeEventListener('keydown', KeyPressed)

        return () => {
            window.removeEventListener('keydown', KeyPressed)
        }
    }, [active])

    return (<span>
        <div style={{
            position: "fixed",
            display: "flex",
            top: "0px",
            left: "0px",
            transition: "200ms linear",
            transform: active ?
                "translateY(0px) scale(100%)" :
                "translateY(100vh) scale(0%)",
            zIndex: 1000
        }}>
            {active &&
                <CenterDiv styleOverride={{ width: "100vw", height: "100vh" }}>
                    <span style={{
                        display: "flex",
                        position: "relative",
                        width: "fit-content",
                        height: "fit-content"
                    }}>
                        {!props.dissableCloseButton &&
                            <CloseButton
                                stye={props.closeStyle}
                                onClose={close}
                            />
                        }
                        {props.children}
                    </span>
                </CenterDiv>
            }
        </div >
        {active &&
            <BlurBackground style={{ zIndex: 999 }} />
        }
    </span >)
}
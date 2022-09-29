import { ContextButton } from "./ContextButton"
import { HiDownload } from "react-icons/hi"
import { Options } from "../TabOptions"
import { useState } from "react"

export function TopBar(props: {
    children?: React.ReactNode
    tabs: string[]
    options: Options
}) {
    const [bounce, setbounce] = useState(false)

    return (<div className='TopBar' style={{
        display: "flex",
        position: "static",
        width: "100vw",
        height: "5rem",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        background: "black",
        marginBottom: "0.6rem",
        boxShadow: "0 0.1rem 0.5rem 0.5rem white",
        userSelect: "none",
    }}>
        <div className='Logo' style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "left",
            left: "1rem",
            fontSize: "3.5rem",
            fontWeight: "bold",
            color: "white",
            marginLeft: ".3rem",
        }} >
            Konica Tab Maker
        </div>
        <div className='LeftSide' style={{
            display: "flex", position: "absolute", width: "100vw", height: "5rem",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "right",
            right: "1rem",
            fontSize: "2.5rem",
        }} >
            <ContextButton
                style={{
                    color: "rgb(10,90,255)",
                    boxShadow: "0 0 .2rem .1rem white",
                    backgroundColor: "black",
                    transition: "background-color 300ms linear",
                }}
                hoverStyle={{ color: "rgb(0,80,255)", backgroundColor: "white" }}
                onMouseDown={() => { setbounce(true); /*TODO: print tabs*/ }}
            >
                <HiDownload style={{
                    animationFillMode: "both",
                    animationDuration: "100ms",
                    animation: bounce ? "bounce 500ms linear" : "",
                    cursor: "pointer",
                }}
                    onAnimationEnd={() => setbounce(false)}
                />
            </ContextButton>
        </div>
    </div>)
}
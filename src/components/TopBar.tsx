import { ContextButton } from "./ContextButton"
import { HiDownload } from "react-icons/hi"
import { DownloadTabs } from "../MakeTabs"
import { Options } from "../TabOptions"
import { useState } from "react"

export function TopBar(props: {
    children?: React.ReactNode
    tabs: string[][]
    options: Options
}) {
    const [bounce, setbounce] = useState(false)

    return (<div className='TopBar' style={{
        display: "flex",
        position: "static",
        width: "100vw",
        height: "50px",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        background: "black",
        marginBottom: "6px",
        boxShadow: "0px 1px 5px 5px white",
        userSelect: "none"
    }}>
        <div className='Logo' style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "left",
            left: "10px",
            fontSize: "30px",
            color: "white",
        }} >
            <img
                src={process.env.PUBLIC_URL + "/logoWhite.png"}
                style={{
                    marginRight: "10px"
                }}
            />
            TabMaker
        </div>
        <div className='LeftSide' style={{
            display: "flex", position: "absolute", width: "100vw", height: "50px",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "right",
            right: "10px",
            fontSize: "25px",
            color: "white",
        }} >
            <ContextButton
                style={{
                    backgroundColor: "black",
                    transition: "background-color 300ms linear",
                }}
                hoverStyle={{ color: "#1976d2", backgroundColor: "white" }}
                onMouseDown={() => { setbounce(true); DownloadTabs(props.tabs, props.options) }}
            >
                <HiDownload style={{
                    animationFillMode: "both",
                    animationDuration: "100ms",
                    animation: bounce ? "bounce 500ms linear" : ""
                }}
                    onAnimationEnd={() => setbounce(false)}
                    size={25}
                />
            </ContextButton>
        </div>
    </div>)
}
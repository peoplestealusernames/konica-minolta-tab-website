import React from "react";
import ReactDOM from "react-dom";
import { BsFillPrinterFill } from "react-icons/bs"
import { ContextButton } from "../components/ContextButton";
import { Options } from "../TabOptions";
import { PrintJSX } from "./PrintJSX";
import { TabPage } from "./TabPage";

export function PrintTab(props: {
    tabs: string[]
    options: Options
    style?: React.CSSProperties
}) {

    function Print() {
        PrintJSX(<TabPage options={props.options} tabs={props.tabs} />)
    }


    return <ContextButton style={{
        display: "flex",
        position: "absolute",
        top: "0",
        right: "0",
        width: "1rem",
        height: "1rem",
        ...props.style
    }}
        onMouseDown={Print}
    >
        <BsFillPrinterFill style={{ width: "100%", height: "100%" }} />
    </ContextButton>
}
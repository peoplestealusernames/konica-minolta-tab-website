import React from "react";
import ReactDOM from "react-dom";
import { BsFillPrinterFill } from "react-icons/bs"
import { ContextButton } from "../components/ContextButton";
import { PrintJSX } from "./PrintJSX";

export function PrintIndex(props: {
    text: string
    style?: React.CSSProperties
}) {

    function Print() {
        const lines = props.text.split("\n")
        if (lines.length <= 0)
            throw new Error("Print error: Text is Empty")

        const padding = Math.floor(Math.log10(lines.length)) + 1

        PrintJSX(<div style={{ margin: "5px" }}>
            {lines.map((e, i) => <div style={{
                width: "100%",
                borderBottom: "1px solid black",
            }}>
                {`${(i + 1).toString().padStart(padding, "0")
                    }:   ${e}`}
            </div>
            )}
        </div>)
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
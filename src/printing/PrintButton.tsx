import React from "react";
import ReactDOM from "react-dom";
import { BsFillPrinterFill } from "react-icons/bs"
import { ContextButton } from "../components/ContextButton";

export function PrintButton(props: {
    text: string
    style?: React.CSSProperties
}) {

    function Print() {
        const printWindow = window.open();
        if (!printWindow)
            throw new Error("Print error: Cannot open window.")

        const lines = props.text.split("\n")
        if (lines.length <= 0)
            throw new Error("Print error: Text is Empty")

        const padding = Math.floor(Math.log10(lines.length)) + 1

        printWindow.document.open("text/plain")
        printWindow.document.write("<!DOCTYPE html>")
        ReactDOM.render(
            <html>
                <head>
                    <style>
                        {`
                        @page {
                            margin: 0px
                        }
                        `}
                    </style>
                </head>
                <div style={{ margin: "5px" }}>
                    {lines.map((e, i) => <div style={{
                        width: "100%",
                        borderBottom: "1px solid black",
                    }}>
                        {`${(i + 1).toString().padStart(padding, "0")
                            }:   ${e}`}
                    </div>
                    )}
                </div>
            </html>
            , printWindow.document)

        printWindow.focus();
        printWindow.print();
        printWindow.close();
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
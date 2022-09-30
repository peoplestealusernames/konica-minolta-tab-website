import React from "react";
import ReactDOM from "react-dom";


export function PrintJSX(element: React.ReactNode) {
    const printWindow = window.open();
    if (!printWindow)
        throw new Error("Print error: Cannot open window.")

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
            {element}
        </html>
        , printWindow.document)

    printWindow.focus();
    printWindow.print();
}
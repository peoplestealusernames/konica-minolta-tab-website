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

        lines.forEach((e, i) => {
            lines[i] = `${(i + 1).toString().padStart(padding, "0")
                }:   ${lines[i]}`
        });

        let text = lines.join("<br/>")

        printWindow.document.open()
        printWindow.document.write("<html><style type='text/css' media='print'>")
        printWindow.document.write("@page { size: auto; margin: 0; }")
        printWindow.document.write("html { background-color: #FFFFFF; margin: 0; }")
        printWindow.document.write("body { border: solid 1px blue; margin 10px 15px 10px 15px;")
        printWindow.document.write("</style><body>")
        printWindow.document.write(text);
        printWindow.document.write("</body></html>")
        printWindow.document.close();
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
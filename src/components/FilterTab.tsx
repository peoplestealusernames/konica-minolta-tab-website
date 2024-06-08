import { useEffect, useState } from "react"
import { ContextButton } from "./ContextButton"
import { MiddleTab } from "./MiddleTab"
import { HiDownload } from "react-icons/hi"
import { DownloadTabs } from "../MakeTabs"
import { Options } from "../TabOptions"

const ButtonStyle: React.CSSProperties = {
    flexDirection: "row",
    fontSize: "1.75rem",
    fontWeight: "bold",
}

const HoverStyle: React.CSSProperties = {
    // boxShadow: "inset 0 -0.175em white, inset 0 -0.2em #000"
    color: "grey",
}

export function FilterTab(props: {
    input: string
    onChange: (input: string) => void
    openPastePopup: () => void
    tabs: string[][]
    options: Options
}) {
    const [input, setinput] = useState<string>(props.input)

    function updateInput(newInput: string) {
        setinput(newInput)
        props.onChange(newInput)
    }

    useEffect(() => {
        setinput(props.input)
    }, [props.input])

    return <MiddleTab title="Filters" style={{
        marginBottom: "10vh",
        fontSize: "1.5rem",
        color: "white",
    }}>
        <ContextButton
            style={ButtonStyle}
            hoverStyle={HoverStyle}
            onMouseDown={() => { props.openPastePopup() }}
        >
            Import file paths
        </ContextButton>
        <ContextButton
            style={ButtonStyle}
            hoverStyle={HoverStyle}
            onMouseDown={() => { updateInput(input.split("\n").sort(sortWithNumber).join("\n")) }}
        >
            Sort tab names
        </ContextButton>
        <ContextButton
            style={ButtonStyle}
            hoverStyle={HoverStyle}
            onMouseDown={() => { DownloadTabs(props.tabs, props.options) }}
        >
            <HiDownload style={{
                animationFillMode: "both",
                animationDuration: "100ms",
                cursor: "pointer",
            }} />
            Download
        </ContextButton>
    </MiddleTab >
}

function sortWithNumber(a: string, b: string) {
    return a.localeCompare(b, undefined, { numeric: true })
}
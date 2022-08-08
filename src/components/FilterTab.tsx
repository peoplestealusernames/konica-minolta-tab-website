import { useEffect, useState } from "react"
import { ContextButton } from "./ContextButton"
import { MiddleTab } from "./MiddleTab"

export function FilterTab(props: {
    input: string
    onChange: (input: string) => void
    openPastePopup: () => void
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
        fontSize: "2rem"
    }}>
        <ContextButton style={{
            transition: "box-shadow 250ms linear",
            boxShadow: "0 0 0.1rem 0.1rem white",
            borderRadius: "1rem",
        }}
            hoverStyle={{
                color: "inherit",
                boxShadow: "0 0 0.1rem 0.1rem white, 0 0 0.2rem 0.2rem red",
            }}
            onMouseDown={() => { props.openPastePopup() }}
        >
            Import file paths
        </ContextButton>
        <ContextButton style={{
            transition: "box-shadow 250ms linear",
            boxShadow: "0 0 0.1rem 0.1rem white",
            borderRadius: "1rem",
        }}
            hoverStyle={{
                color: "inherit",
                boxShadow: "0 0 0.1rem 0.1rem white, 0 0 0.2rem 0.2rem red",
            }}
            onMouseDown={() => { updateInput(input.split("\n").sort(sortWithNumber).join("\n")) }}
        >
            Sort tab names
        </ContextButton>
    </MiddleTab >
}

function sortWithNumber(a: string, b: string) {
    return a.localeCompare(b, undefined, { numeric: true })
}
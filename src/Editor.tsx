import { useState } from "react"


export function Editor(props: {
    value?: string
    onChange?: (value: string) => void
}) {
    const [input, setinput] = useState<string>("")

    const onChange = props.onChange ? props.onChange : () => { }

    function TextChange(newInput: string) {
        const lines = newInput.split("\n")

        lines.map((line, i) => {
            if (line.length > 20) {
                line = line.slice(0, 20)
                lines[i] = line
            }
        })

        setinput(lines.join("\n"))
        onChange(lines.join("\n"))
    }

    return <div style={{
        overflowY: "scroll",
    }}
    >
        <textarea
            value={input}
            onChange={(e) => {
                const text = e.target.value
                TextChange(text ? text : "")
            }}
            style={{
                border: "2px solid white",
                display: "flex",
                width: "calc(50vw - 12px)",
                height: "calc(100vh - 12px)",
                backgroundColor: "black",
                color: "white",
                fontSize: "150%",
                padding: "4px",
                margin: "0px"
            }}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
        />
    </div>
}
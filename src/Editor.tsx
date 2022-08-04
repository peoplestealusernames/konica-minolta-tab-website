import { useState } from "react"


export function Editor(props: {
    value?: string
    onChange?: (value: string) => void
}) {
    const [input, setinput] = useState<string>("")

    const inputRef = React.createRef<HTMLTextAreaElement>()

    const onChange = props.onChange ? props.onChange : () => { }

    function TextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const element = e.target
        const current = element.value
        const lines = current.split("\n")

        lines.map((line, i) => {
            if (line.length > 20) {
                line = line.slice(0, 20)
                lines[i] = line
            }
        })

        const Out = lines.join("\n")
        setinput(Out)
        onChange(Out)
    }

    return <div style={{
        overflowY: "scroll",
    }}
    >
        <textarea
            ref={inputRef}
            value={input}
            onChange={TextChange}
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
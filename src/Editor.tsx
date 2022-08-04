import React, { useEffect, useState } from "react"


export function Editor(props: {
    value?: string
    onChange?: (value: string) => void
}) {
    const [input, setinput] = useState<string>("")
    const [SStart, setSStart] = useState(0)
    const [SEnd, setSEnd] = useState(0)

    const inputRef = React.createRef<HTMLTextAreaElement>()

    const onChange = props.onChange ? props.onChange : () => { }

    function TextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.preventDefault()
        const element = e.target
        const current = element.value
        const lines = current.split("\n")

        let newStart = element.selectionStart
        let newEnd = element.selectionEnd

        lines.map((line, i) => {
            if (line.length > 20) {
                line = line.slice(0, 20)
                lines[i] = line
            }
        })

        newStart = updatePos(current, newStart)
        newEnd = updatePos(current, newEnd)

        setSEnd(newEnd)
        setSStart(newStart)

        const Out = lines.join("\n")
        setinput(Out)
        onChange(Out)
    }

    function updatePos(text: string, i: number) {
        const lastLine = text.lastIndexOf("\n", i)
        if (i - lastLine > 20) {
            return 19 + lastLine
        } else if (lastLine === -1) {
            return i > 20 ? 20 : i
        }

        return i
    }

    useEffect(() => {
        const element = inputRef.current
        if (!element)
            return

        element.setSelectionRange(SStart, SEnd)
    })

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
import React, { useEffect, useState } from "react"


export function Editor(props: {
    value?: string
    onChange?: (value: string) => void
    lineLength?: number //TODO: if -1 remove limit
    style?: React.CSSProperties
    selectedLine?: number
}) {
    const [input, setinput] = useState<string>("")
    const [SStart, setSStart] = useState(0)
    const [SEnd, setSEnd] = useState(0)

    const inputRef = React.createRef<HTMLTextAreaElement>()

    const lineLength = props.lineLength ? props.lineLength : 20
    const onChange = props.onChange ? props.onChange : () => { }

    useEffect(() => { setinput(props.value ? props.value : "") }, [props.value])
    useEffect(() => { if (props.selectedLine !== undefined) SelectLine(props.selectedLine) }, [props.selectedLine])

    function SelectLine(lineIndex: number) {
        const lines = input.split("\n")

        if (lines.length == 1) {
            setSStart(0)
            setSEnd(input.length - 1)
            return
        }

        if (lineIndex > lines.length)
            lineIndex = lines.length - 1

        let Start = 0
        for (let i = 0; i < lineIndex; i++) {
            Start = input.indexOf("\n", Start + 1)
        }

        let End = input.indexOf("\n", Start + 1)
        if (End === -1)
            End = input.length

        if (Start === -1)
            Start = 0

        setSStart(Start)
        setSEnd(End)
    }

    function TextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.preventDefault()
        const element = e.target
        const current = element.value
        const lines = current.split("\n")

        let newStart = element.selectionStart
        let newEnd = element.selectionEnd

        lines.map((line, i) => {
            if (line.length > lineLength) {
                line = line.slice(0, lineLength)
                lines[i] = line
            }
        })

        const Out = lines.join("\n")

        newStart = updatePos(current, newStart)
        newEnd = updatePos(current, newEnd)

        setSEnd(newEnd)
        setSStart(newStart)

        setinput(Out)
        onChange(Out)
    }

    function updatePos(text: string, i: number) {
        const lastLine = text.lastIndexOf("\n", i - 1)

        if (lastLine === -1) {
            return i > lineLength ? lineLength : i
        } else if (i - lastLine >= lineLength + 1) {
            return lastLine + lineLength + 1
        }

        return i
    }

    useEffect(() => {
        const element = inputRef.current
        if (!element)
            return
        element.click()
        element.focus()

        element.setSelectionRange(SStart, SEnd)
    }, [SStart, SEnd])

    return <textarea
        ref={inputRef}
        value={input}
        onChange={TextChange}
        style={{
            display: "flex",
            border: "2px solid white",
            flexGrow: 1,
            backgroundColor: "black",
            color: "white",
            fontSize: "150%",
            padding: "4px",
            margin: "0px",
            ...props.style
        }}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
    />
}
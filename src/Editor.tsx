import React, { useEffect, useState } from "react"
import { RegexReplacer } from "./components/Regex"
import { PrintButton } from "./printing/PrintButton"


export function Editor(props: {
    value?: string
    onChange?: (value: string) => void
    style?: React.CSSProperties
    focusStyle?: React.CSSProperties
    selectedLine?: number
    placeholder?: string,
    printButton?: boolean
    printButtonStyle?: React.CSSProperties
    textAreaStyle?: React.CSSProperties
    replacer?: boolean
}) {
    const [input, setinput] = useState<string>("")
    const [Selected, setSelected] = useState<[number, number]>([0, 0])
    const [focus, setFocus] = useState(false)

    const inputRef = React.createRef<HTMLTextAreaElement>()

    const onChange = props.onChange ? props.onChange : () => { }

    const replacer = props.replacer ? props.replacer : false

    useEffect(() => { setinput(props.value ? props.value : "") }, [props.value])
    useEffect(() => { if (props.selectedLine !== undefined) SelectLine(props.selectedLine) }, [props.selectedLine])

    function SelectLine(lineIndex: number) {
        const lines = input.split("\n")

        if (lines.length === 1) {
            setSelected([0, input.length - 1])
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

        setSelected([Start, End])
    }

    useEffect(() => {
        const element = inputRef.current
        if (!element)
            return

        onChange(input)
    }, [input])

    useEffect(() => {
        const element = inputRef.current
        if (!element)
            return

        element.focus()

        element.setSelectionRange(Selected[0], Selected[1])
    }, [Selected])

    return <div style={{
        display: "flex",
        flexDirection: "column",
        border: "0.2rem solid white",
        flexGrow: 1,
        backgroundColor: "black",
        color: "white",
        fontSize: "150%",
        padding: "0.4rem",
        margin: "0",
        cursor: "text",
        ...props.style,
        ...(focus ? props.focusStyle : {}),
    }}
        data-shadowedit={true}
        onClick={(e) => {
            const target = e.target as HTMLDivElement
            if (target.getAttribute("data-shadowedit"))
                inputRef.current?.focus()
        }}
    >
        {props.printButton && <PrintButton
            text={input}
            style={{
                display: "flex",
                height: "1.0rem",
                color: "rgb(200,200,210)",
                backgroundColor: "rgb(20,20,20)",
                outline: "none",
                border: ".2rem solid rgb(75,75,85)",
                borderBottom: "",
                cursor: "pointer",
                padding: ".5rem",
                borderRadius: "",
                margin: "0",
                fontSize: "1.2rem"
            }} />
        }
        {replacer && <RegexReplacer
            input={input}
            style={{ maxHeight: "60px", marginBottom: ".7rem" }}
            onChange={setinput}
        />}
        <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => { e.preventDefault(); setinput(e.target.value) }}
            style={{
                display: "flex",
                flexGrow: "1",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                color: "inherit",
                fontSize: "inherit",
                textOverflow: "clip",
                whiteSpace: "pre",
                overflowY: "scroll",
                overflowX: "auto",
                resize: "none",
                ...props.textAreaStyle
            }}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={props.placeholder}
        />
    </div >
}
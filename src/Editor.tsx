import React, { useEffect, useState } from "react"
import { RegexReplacer } from "./components/Regex"
import { PrintButton } from "./printing/PrintButton"


export function Editor(props: {
    value: string
    onChange: (value: string) => void
    selectedLine?: number
    placeholder?: string,
    printButton?: boolean
    printButtonStyle?: React.CSSProperties
    textAreaStyle?: React.CSSProperties
    replacer?: boolean
}) {
    const [Selected, setSelected] = useState<[number, number]>([0, 0])
    const [focus, setFocus] = useState(false)

    const inputRef = React.createRef<HTMLTextAreaElement>()

    const onChange = props.onChange ? props.onChange : () => { }

    const replacer = props.replacer ? props.replacer : false

    useEffect(() => { if (props.selectedLine !== undefined) SelectLine(props.selectedLine) }, [props.selectedLine])

    function SelectLine(lineIndex: number) {
        const lines = props.value.split("\n")

        if (lines.length === 1) {
            setSelected([0, props.value.length - 1])
            return
        }

        if (lineIndex > lines.length)
            lineIndex = lines.length - 1

        let Start = 0
        for (let i = 0; i < lineIndex; i++) {
            Start = props.value.indexOf("\n", Start + 1)
        }

        let End = props.value.indexOf("\n", Start + 1)
        if (End === -1)
            End = props.value.length

        if (Start === -1)
            Start = 0

        setSelected([Start, End])
    }

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
        width: "45rem",
        margin: "2.5rem",
    }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            margin: "1.25rem",
            marginTop: "",
            backgroundColor: "#202123",
            borderRadius: "1.25rem",
        }}>
            {props.printButton && <PrintButton
                text={props.value}
                style={{
                    display: "flex",
                    height: "1.0rem",
                    color: "white",
                    backgroundColor: "inherit",
                    outline: "none",
                    cursor: "pointer",
                    padding: ".5rem",
                    margin: "0.3rem",
                    marginBottom: "0rem",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                }} />
            }
            {replacer && <RegexReplacer
                input={props.value}
                style={{
                    flexGrow: "0",
                    marginTop: "0rem",
                    margin: "0.2rem"
                }}
                inputStyle={{
                    margin: "0.15rem",
                    display: "flex",
                    flexGrow: 1,
                    color: "rgb(200,200,210)",
                    backgroundColor: "#494a4c",
                    outline: "none",
                    border: "none",
                    marginRight: "0.5rem",
                    marginLeft: "0.5rem",
                }}
                buttonStyle={{
                    margin: "0.15rem",
                    display: "flex",
                    flexGrow: 1,
                    backgroundColor: "inherit",
                    outline: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                }}
                onChange={onChange}
            />}
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black",
            cursor: "text",
            flexGrow: 1,
            padding: "1.0rem",
            transition: "border 50ms ease-in",
            background: "#202123",
            fontSize: "2rem",
            color: "white",
            borderRadius: "1.5rem",
            outline: "none",
        }}>
            <textarea
                ref={inputRef}
                value={props.value}
                data-shadowedit={true}
                onChange={(e) => { e.preventDefault(); onChange(e.target.value) }}
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
                    background: "#202123",
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
        </div>
    </div >
}
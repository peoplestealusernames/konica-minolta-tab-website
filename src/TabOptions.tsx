import { useEffect, useState } from "react"
import { MiddleTab } from "./components/MiddleTab"

export type Options = {
    Model: string
    FontSize: number
    Cut: 5 | 8 | 10 | 15
    Offset: number
    bold: boolean
}

const SelectionStyle: React.CSSProperties = {
    display: "inline",
    userSelect: "none",
    backgroundColor: "#494a4c",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    lineHeight: "100%",
    padding: "0.25rem",
    resize: "none",
    textAlign: "right"
}

const MiddleStyle: React.CSSProperties = {
    paddingRight: "0.3rem",
    paddingLeft: "0.1rem",
}

const TextStyle: React.CSSProperties = {
    display: "table-cell",
    textAlign: "left",
    verticalAlign: "middle",
    fontWeight: "normal",
    fontSize: "1.5rem",
    whiteSpace: "nowrap",
    height: "3.0rem"
}

const ButtonStyle: React.CSSProperties = {
    display: "table-row",
}


export function TabOption(props: {
    options: Options
    tabs: string[][]
    onChange?: (newOptions: Options) => void
}) {
    const [options, setoptions] = useState<Options>(props.options)

    function setModel(Model: string) {
        setoptions({ ...options, Model })
    }

    useEffect(() => {
        if (props.onChange)
            props.onChange({ ...options })
    }, [options])


    return <MiddleTab title="Settings">
        <table style={{ width: "100%", fontSize: "1.5rem" }}>
            <tbody>
                <tr style={ButtonStyle}>
                    <td style={TextStyle}>
                        Model
                    </td>
                    <td style={MiddleStyle}>:</td>
                    <td><input
                        value={options.Model}
                        type="text"
                        style={SelectionStyle}
                        onChange={(e) =>
                            setModel(e.target.value ? e.target.value : "")
                        }
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                    /></td>
                </tr>
                <tr style={ButtonStyle}>
                    <td style={TextStyle}>
                        Tab cut
                    </td>
                    <td style={MiddleStyle}>:</td>
                    <td><select
                        style={{ ...SelectionStyle, cursor: "pointer" }}
                        value={options.Cut} onChange={(Cut) =>
                            setoptions({ ...options, Cut: parseInt(Cut.target.value) as Options["Cut"] })
                        }
                    >
                        <option value="5">5</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select></td>
                </tr >
                <tr style={ButtonStyle}>
                    <td style={TextStyle}>
                        Font Size
                    </td>
                    <td style={MiddleStyle}>:</td>
                    <td><input
                        value={options.FontSize}
                        style={SelectionStyle}
                        onChange={(e) => {
                            let val = parseInt(e.target.value)
                            if (val > 999) {
                                val = 999
                            } else if (val < 1) {
                                val = 1
                            }
                            setoptions({ ...options, FontSize: val })
                        }}
                        type="number"
                    /></td>
                </tr>
                <tr style={ButtonStyle}>
                    <td style={TextStyle}>
                        VOffset
                    </td>
                    <td style={MiddleStyle}>:</td>
                    <td><input
                        value={options.Offset}
                        style={SelectionStyle}
                        onChange={(e) => {
                            let val = parseInt(e.target.value)
                            if (val > 10) {
                                val = 10
                            } else if (val < -10) {
                                val = -10
                            }
                            setoptions({ ...options, Offset: val })
                        }}
                        type="number"
                    /></td>
                </tr>
                <tr style={ButtonStyle}>
                    <td style={TextStyle}>
                        Bold
                    </td>
                    <td style={MiddleStyle}>:</td>
                    <td><input
                        checked={options.bold}
                        style={{ ...SelectionStyle, cursor: "pointer" }}
                        onChange={(e) => {
                            setoptions({ ...options, bold: e.target.checked })
                        }}
                        type="checkbox"
                    /></td>
                </tr>
            </tbody>
        </table>
    </MiddleTab >
}
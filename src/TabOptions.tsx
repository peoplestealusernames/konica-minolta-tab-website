import { useEffect, useState } from "react"
import { ContextButton } from "./components/ContextButton"
import { MiddleTab } from "./components/MiddleTab"

export type Options = {
    Model: string
    FontSize: number
    Cut: 5 | 10 | 8
}

const SelectionStyle: React.CSSProperties = {
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "150px",
    textAlign: "center",
    fontSize: "16px",
    padding: "0px",
    margin: "0px",
    borderRadius: "10px",
    transition: "box-shadow 250ms ease-out",
}

const TextStyle: React.CSSProperties = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
    width: "175px",
}

const ButtonStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "200px",
    margin: "4px",
    borderRadius: "5px",
    boxShadow: "0px 0px 1px 0px white",
    padding: "5px",
}

const HoverStyle: React.CSSProperties = {
    boxShadow: "0px 0px 1px 0px white, 0px 0px 1px 1px red",
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
        <div style={ButtonStyle}>
            <span style={TextStyle}>
                Font Size:
            </span>
            <input
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
            />
        </div>
        <div style={ButtonStyle}>
            <span style={TextStyle}>
                Tab cut:
            </span>
            <select
                style={SelectionStyle}
                value={options.Cut} onChange={(Cut) => {
                    setoptions({ ...options, Cut: parseInt(Cut.target.value) as Options["Cut"] })
                }}
            >
                <option value="5">5</option>
                <option value="8">8</option>
                <option value="10">10</option>
            </select>
        </div >
        <div style={ButtonStyle}>
            <span style={TextStyle}>
                Type Model:<br />(ex: C754 or C759)
            </span>
            <input
                value={options.Model}
                style={SelectionStyle}
                onChange={(e) => {
                    const val = e.target.value
                    setModel(val ? val : "")
                }}
                type="text"
            />
        </div>
    </MiddleTab >
}
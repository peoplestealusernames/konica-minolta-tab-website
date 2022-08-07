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
    width: "15rem",
    textAlign: "center",
    fontSize: "1.6rem",
    padding: "0",
    margin: "0",
    borderRadius: "1rem",
    transition: "box-shadow 250ms ease-out",
}

const TextStyle: React.CSSProperties = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2rem",
    width: "17.5rem",
}

const ButtonStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "20rem",
    margin: "0.4rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 0.2rem 0 white",
    padding: "0.5rem",
}

const HoverStyle: React.CSSProperties = {
    boxShadow: "0 0 0.1rem 0 white, 0 0 0.1rem 0.1rem red",
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
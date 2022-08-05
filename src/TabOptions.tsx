import { useEffect, useState } from "react"

export type Options = {
    Model: string
    FontSize: number
    Cut: 5 | 10 | 8
}

const SelectionStyle: React.CSSProperties = {
    display: "flex",
    padding: "1px",
    userSelect: "none",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "2px"
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


    return <div
        style={{
            display: "flex",
            flexDirection: "row",
            color: "white",
            backgroundColor: "black",
            border: "3px solid gold",
            height: "fit-content",
        }}
    >
        <span style={SelectionStyle}>
            Font Size:
        </span>
        <input
            value={options.FontSize}
            style={{
                width: "45px",
                textAlign: "right",
            }}
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
        <span style={SelectionStyle}>
            Type Model:<br />(ex: C754 or C759)
        </span>
        <input
            value={options.Model}
            style={{
                ...SelectionStyle,
                width: "45px",
            }}
            onChange={(e) => {
                const val = e.target.value
                setModel(val ? val : "")
            }}
            type="text"
        />
        <span style={SelectionStyle}>
            Tab cut:
        </span>
        <select
            value={options.Cut} onChange={(Cut) => {
                setoptions({ ...options, Cut: parseInt(Cut.target.value) as Options["Cut"] })
            }}
        >
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="10">10</option>
        </select>
    </div>
}
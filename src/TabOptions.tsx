import { useEffect, useState } from "react"
import { DownloadTabs } from "./DownloadTabs"


export type Options = {
    Model: string
    FontSize: number
    Cut: 5 | 10 | 8
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
            height: "fit-content"
        }}
    >
        <span style={{
            display: "flex",
            padding: "1px",
            userSelect: "none",
            justifyContent: "center",
            alignItems: "center"
        }}>
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
        <span style={{
            padding: "1px",
            userSelect: "none"
        }}>
            Type Model:<br />(ex: C754 or C759)
        </span>
        <input
            value={options.Model}
            style={{
                width: "45px",
                textAlign: "right",
            }}
            onChange={(e) => {
                const val = e.target.value
                setModel(val ? val : "")
            }}
            type="text"
        />
        <DownloadTabs
            Tabs={props.tabs}
            Options={options}
            style={{
                backgroundColor: "grey",
                color: "black",
                border: "3px solid white",
                flex: 1
            }}
            size={20}
        />
    </div>
}
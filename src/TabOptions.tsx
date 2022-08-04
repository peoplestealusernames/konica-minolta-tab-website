import { useState } from "react"
import { DownloadTabs } from "./DownloadTabs"


export type Options = {
    Model: string
    FontSize: number
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
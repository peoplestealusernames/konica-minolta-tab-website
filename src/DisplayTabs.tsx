import { useEffect, useState } from "react"
import { TabShow } from "./TabShow"


export function DisplayTabs(props: {
    tabs: string[][]
}) {
    const [pad, setpad] = useState<number>(0)

    useEffect(() => {
        const count = props.tabs.length
        setpad(count.toString().length)
    }, [props.tabs])

    return <div style={{
        display: "inline-flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "0px",
        margin: "0px",
        border: "1px soild white",
        color: "white",
        maxWidth: "50vw"
    }}>
        {props.tabs.map((tabSection, i) => {
            return <TabShow
                title={`Tab ${i + 1}/${props.tabs.length}`}
                key={i}
                tabs={tabSection}
            />
        })}
    </div>
}
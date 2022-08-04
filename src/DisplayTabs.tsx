import { useEffect, useState } from "react"
import { TabShow } from "./TabShow"


export function DisplayTabs(props: {
    tabs: string[][]
    Options: Options
}) {
    const [pad, setpad] = useState<number>(0)

    useEffect(() => {
        const count = props.tabs.length
        setpad(count.toString().length)
    }, [props.tabs])

    return <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "0px",
        margin: "0px",
        border: "1px soild white",
        color: "white",
        justifyContent: "start",
        alignContent: "start",
        flex: 1,
        overflowY: "scroll",
    }}>
        {props.tabs.map((tabSection, i) => {
            const TabNString = (i + 1).toString().padStart(pad, "0")
            return <TabShow
                title={`Tab ${TabNString}/${props.tabs.length}`}
                key={i}
                tabs={tabSection}
            />
        })}
    </div>
}
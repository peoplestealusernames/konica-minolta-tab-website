import { useEffect, useState } from "react"
import { TabShow } from "./TabShow"


export function DisplayTabs(props: {
    tabs: string[][]
}) {
    const [rows, setrows] = useState<string[][][]>([])
    const [pad, setpad] = useState<number>(0)

    const TabsPerRow = 8

    useEffect(() => {
        const newRows: string[][][] = []

        const count = props.tabs.length
        setpad(count.toString().length)

        props.tabs.map((tab, i) => {
            const n = i % TabsPerRow
            const t = (Math.floor(i / TabsPerRow))

            if (n === 0)
                newRows[t] = []

            newRows[t][n] = tab
        })

        setrows(newRows)
    }, [props.tabs])

    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        {rows.map((row, rowN) => {
            return <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                {row.map((tab, i) => {
                    const tabN = rowN * TabsPerRow + i
                    return <TabShow
                        title={
                            `${tabN + 1}`.padStart(pad, "0")
                            +
                            `/${props.tabs.length}`
                        }
                        tabs={tab}
                    />
                })}
            </div>
        })}
    </div>
}
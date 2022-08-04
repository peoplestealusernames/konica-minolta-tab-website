import React, { useEffect, useState } from "react"
import { Options } from "./TabOptions"


export function DisplayTabs(props: {
    tabs: string[][]
    Options: Options
}) {
    const [pad, setpad] = useState<number>(0)
    const [tabProp, settabProp] = useState<React.CSSProperties>({})

    useEffect(() => {
        const count = props.tabs.length
        setpad(count.toString().length)

        settabProp({
            width: `calc(${100 / props.Options.Cut}%)`,
        })
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
            {
                return tabSection.map((e, i) => {
                    return <div
                        key={i}
                        style={{
                            ...{
                                display: "flex",
                                fontSize: "11px",
                                backgroundColor: (i % 2) == 0 ? "grey" : "black",
                            }, ...tabProp
                        }}
                    >
                        {e}
                    </div>
                })
            }
        })}
    </div>
}
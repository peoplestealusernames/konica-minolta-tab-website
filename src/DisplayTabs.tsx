import React, { useEffect, useState } from "react"
import { Options } from "./TabOptions"


export function DisplayTabs(props: {
    tabs: string[][]
    Options: Options
    setSelectedLine?: (line: number) => void
}) {
    const [tabProp, settabProp] = useState<React.CSSProperties>({})

    useEffect(() => {
        settabProp({
            width: `calc(${100 / props.Options.Cut}% + 8px)`,
            fontSize: `${props.Options.FontSize * 2}px`,
        })
    }, [props.Options])

    return <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "4px",
        margin: "0px",
        border: "1px soild white",
        color: "white",
        justifyContent: "start",
        alignContent: "start",
        overflowY: "scroll",
        width: "1000px",
        zIndex: 1,
    }}>
        {props.tabs.map((tabSection, tabi) =>
            tabSection.map((e, i) => <div
                onClick={() => {
                    if (props.setSelectedLine)
                        props.setSelectedLine(tabi * 20 + i)
                }}
                key={i}
                style={{
                    ...{
                        zIndex: tabi * props.tabs[0].length + i,
                        backgroundColor: "white",
                        color: "black",
                        borderTopLeftRadius: "40px",
                        borderTopRightRadius: "40px",
                        paddingTop: "1px",
                        height: "60px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        marginRight: "-20px",
                        borderBottom: "none",
                        userSelect: "none",
                        boxShadow: "0px 0px 4px 4px grey",
                        marginBottom: "-12px"
                    }, ...tabProp
                }}
            >
                {e}
            </div>)
        )}
    </div >
}
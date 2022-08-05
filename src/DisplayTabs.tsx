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
        padding: "0px",
        margin: "0px",
        border: "1px soild white",
        color: "white",
        justifyContent: "start",
        alignContent: "start",
        overflowY: "scroll",
        width: "1250px"
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
                        zIndex: tabSection.length - i,
                        backgroundColor: "white",
                        color: "black",
                        borderTopLeftRadius: "40px",
                        borderTopRightRadius: "40px",
                        border: "4px solid grey",
                        paddingTop: "1px",
                        height: "50px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        marginRight: "-20px",
                        borderBottom: "none",
                        userSelect: "none",
                    }, ...tabProp
                }}
            >
                {e}
            </div>)
        )}
    </div >
}
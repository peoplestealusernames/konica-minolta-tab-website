import React, { useEffect, useState } from "react"
import { Options } from "./TabOptions"


export function DisplayTabs(props: {
    tabs: string[][]
    Options: Options
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
        flex: 1,
        overflowY: "scroll",
    }}>
        {props.tabs.map((tabSection, i) =>
            tabSection.map((e, i) => <div
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
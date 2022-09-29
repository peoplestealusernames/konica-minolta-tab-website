import React, { useEffect, useState } from "react"
import { Options } from "./TabOptions"


export function DisplayTabs(props: {
    tabs: string[]
    Options: Options
    setSelectedLine?: (line: number) => void
}) {
    const [tabProp, settabProp] = useState<React.CSSProperties>({})

    useEffect(() => {
        settabProp({
            width: `calc(${100 / props.Options.Cut}% + 1rem)`,
            fontSize: `${props.Options.FontSize / 8}rem`,
            borderTopLeftRadius: `${1 + (15 / props.Options.Cut) / 2}rem`,
            borderTopRightRadius: `${1 + (15 / props.Options.Cut) / 2}rem`,
        })
    }, [props.Options])

    if (props.tabs.length === 1 &&
        props.tabs[0].length === 1 &&
        props.tabs[0][0] === ""
    ) {
        props.tabs = ["Empty!", "Please", "Type", "Tabs"]
    }

    return <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "0rem",
        padding: "2rem",
        color: "white",
        justifyContent: "start",
        paddingTop: "3vh",
        alignContent: "start",
        overflowY: "scroll",
        width: "100rem",
        userSelect: "none",
    }}>{props.tabs.map((tab, tabi) =>
        <div
            onClick={() => {
                if (props.setSelectedLine)
                    props.setSelectedLine(tabi)
            }}
            style={{
                zIndex: tabi,
                backgroundColor: "white",
                color: "black",
                paddingTop: "0.1rem",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                marginLeft: "-1rem",
                height: "9.4rem",
                backgroundImage: "linear-gradient(to bottom, white 0%, white 2.4rem, grey 4rem, black 100%)",
                boxShadow: "0 0 0.2rem 0.2rem grey, 0 0 0.3rem 0.2rem black",
                marginBottom: "-5.7rem",
                cursor: "pointer",
                ...tabProp
            }}
        >
            {tab}
        </div>
    )}</div >
}
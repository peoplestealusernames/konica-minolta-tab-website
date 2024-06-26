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
        props.tabs[0] = ["Empty!", "Please", "Type", "Tabs"]
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
    }}>{props.tabs.map((tabSection, tabi) => <div
        key={tabi}
        style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingLeft: "1.4rem",
            color: "white",
            justifyContent: "start",
            alignContent: "start",
            width: "100%",
            paddingRight: ".4rem",
            marginBottom: "-.5rem",
            zIndex: tabi,
            overflow: "clip"
        }}>
        <span style={{
            display: "flex",
            width: "100%",
            height: "3rem",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            justifySelf: "center",
            background: "#202123",
            marginLeft: "-1.4rem",
            marginRight: "-.4rem",
            paddingRight: "1.8rem",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1.0rem",
        }}>
            Tab File:
            ({tabi + 1}/{props.tabs.length})
            Tabs: ({tabi * props.tabs[0].length + 1}
            -
            {tabi * props.tabs[0].length + props.tabs[tabi].length})
        </span>
        {
            tabSection.map((e, i) => <div
                onClick={() => {
                    if (props.setSelectedLine)
                        props.setSelectedLine(tabi * 20 + i)
                }}
                key={i}
                style={{
                    zIndex: i,
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
                {e}
            </div>)
        }</div >
    )}</div >
}
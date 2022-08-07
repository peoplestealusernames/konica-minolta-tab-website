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
            fontSize: `${props.Options.FontSize / 7}rem`,
        })
    }, [props.Options])

    return <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "1rem",
        color: "white",
        justifyContent: "start",
        alignContent: "start",
        overflowY: "scroll",
        width: "100rem",
        zIndex: 1,
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
            backgroundColor: "#282c34",
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
            backgroundColor: "rgb(40, 40, 45)",
            marginLeft: "-1.4rem",
            marginRight: "-.4rem",
            paddingRight: "1.3rem",
            border: "0.3rem solid white",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "0.4rem",
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
                    borderTopLeftRadius: "3rem",
                    borderTopRightRadius: "3rem",
                    paddingTop: "0.1rem",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    marginLeft: "-1rem",
                    height: "9.4rem",
                    backgroundImage: "linear-gradient(to bottom, white 0%, white 2.4rem, grey 4rem, black 100%)",
                    boxShadow: "0 0 0.2rem 0.2rem grey, 0 0 0.3rem 0.3rem black",
                    marginBottom: "-5.7rem",
                    ...tabProp
                }}
            >
                {e}
            </div>)
        }</div >
    )}</div >
}
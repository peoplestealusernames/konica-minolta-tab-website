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
            width: `calc(${100 / props.Options.Cut}% + 1.4rem)`,
            fontSize: `${props.Options.FontSize / 5}rem`,
        })
    }, [props.Options])

    return <div style={{
        position: "fixed",
        right: "0",
        display: "flex",
        flexGrow: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "0.4rem",
        margin: "0",
        color: "white",
        justifyContent: "start",
        alignContent: "start",
        overflowY: "scroll",
        width: "100rem",
        zIndex: 1,
        userSelect: "none",
    }}>
        {props.tabs.map((tabSection, tabi) =>
            <div
                key={tabi}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "0.6rem",
                    paddingTop: "0",
                    margin: "0",
                    color: "white",
                    justifyContent: "start",
                    alignContent: "start",
                    width: "100rem",
                    marginBottom: "-1rem",
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
                    backgroundColor: "black",
                    border: "0.2rem solid white",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginLeft: "-0.6rem",
                    marginRight: "-0.6rem",
                    marginBottom: "0.3rem",
                }}>
                    Tab File:
                    ({tabi + 1}/{props.tabs.length})
                    Tabs: ({tabi * props.tabs[0].length + 1}
                    -
                    {tabi * props.tabs[0].length + props.tabs[tabi].length})
                </span>
                {tabSection.map((e, i) => <div
                    onClick={() => {
                        if (props.setSelectedLine)
                            props.setSelectedLine(tabi * 20 + i)
                    }}
                    key={i}
                    style={{
                        ...{
                            zIndex: i,
                            backgroundColor: "white",
                            color: "black",
                            borderTopLeftRadius: "4rem",
                            borderTopRightRadius: "4rem",
                            paddingTop: "0.1rem",
                            fontWeight: "bold",
                            whiteSpace: "nowrap",
                            marginRight: "-2rem",
                            height: "9.4rem",
                            backgroundImage: "linear-gradient(to bottom, white 0%, white 3.2rem, grey 4.5rem, black 100%)",
                            boxShadow: "0 0 0.4rem 0.4rem grey",
                            marginBottom: "-5.2rem",
                        }, ...tabProp
                    }}
                >
                    {e}
                </div>)}
            </div >
        )}
    </div >
}
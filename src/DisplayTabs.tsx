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
            fontSize: `${props.Options.FontSize / 6}rem`,
        })
    }, [props.Options])

    return <div style={{
        position: "fixed",
        right: "0",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "0.4rem",
        paddingRight: "1rem",
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
                    paddingLeft: "0.5rem",
                    paddingRight: "1.3rem",
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
                    alignSelf: "center",
                    justifySelf: "center",
                    backgroundColor: "black",
                    border: "0.3rem solid white",
                    paddingRight: "1.3rem",
                    marginRight: "-1.3rem",
                    fontSize: "2rem",
                    borderRadius: "2rem",
                    fontWeight: "bold",
                    marginBottom: "0.3rem",
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
                            ...{
                                zIndex: i,
                                backgroundColor: "white",
                                color: "black",
                                borderTopLeftRadius: "3rem",
                                borderTopRightRadius: "3rem",
                                paddingTop: "0.1rem",
                                fontWeight: "bold",
                                whiteSpace: "nowrap",
                                marginRight: "-1rem",
                                height: "9.4rem",
                                backgroundImage: "linear-gradient(to bottom, white 0%, white 3.2rem, grey 4.5rem, black 100%)",
                                boxShadow: "0 0 0.3rem 0.3rem grey",
                                marginBottom: "-5.2rem",
                            }, ...tabProp
                        }}
                    >
                        {e}
                    </div>)
                }
            </div >
        )
        }
    </div >
}
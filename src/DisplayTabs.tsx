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
        flexGrow: 1,
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
        paddingTop: "16px",
        marginTop: "4px",
        zIndex: 1,
    }}>
        {props.tabs.map((tabSection, tabi) =>
            <div
                key={tabi}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "6px",
                    paddingTop: "0px",
                    margin: "0px",
                    border: "1px soild white",
                    color: "white",
                    justifyContent: "start",
                    alignContent: "start",
                    width: "1000px",
                    marginTop: "-15px",
                    backgroundColor: "#282c34",
                    zIndex: tabi,
                    overflow: "clip"
                }}>
                <span style={{
                    display: "flex",
                    width: "100%",
                    height: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "black",
                    border: "2px solid white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    marginBottom: "4px",
                    marginLeft: "-6px",
                    marginRight: "-6px",
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
                            borderTopLeftRadius: "40px",
                            borderTopRightRadius: "40px",
                            paddingTop: "1px",
                            height: "80px",
                            fontWeight: "bold",
                            whiteSpace: "nowrap",
                            marginRight: "-20px",
                            borderBottom: "none",
                            userSelect: "none",
                            boxShadow: "0px 0px 4px 4px grey",
                            marginBottom: "-34px"
                        }, ...tabProp
                    }}
                >
                    {e}
                </div>)}
            </div >
        )}
    </div >
}
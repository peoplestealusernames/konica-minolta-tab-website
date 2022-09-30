import React from "react";
import { Options } from "../TabOptions";


export function TabPage(props: { tabs: string[], options: Options }) {
    const Dist = (10.8) / props.options.Cut

    return <div style={{
        display: "flex",
        position: "relative",
        backgroundColor: "black",
        padding: "0px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontSize: `${props.options.FontSize}pt`,
        flexDirection: "column",
    }}
    >
        {props.tabs.map((tab, i) =>
            <Page>
                <div style={{
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    rotate: "",
                    height: `${Dist}in`,
                    top: `${Dist * (i % props.options.Cut) + .1}in`,
                    right: `${props.options.Offset}mm`, //TODO: impliment offset
                    textAlign: "center",
                    writingMode: "vertical-lr",
                }}>
                    {tab}
                </div>
            </Page >
        )}
    </div >
}

function Page(props: {
    children: React.ReactNode,
    style?: React.CSSProperties
}) {
    return <div style={{
        display: "flex",
        position: "relative",
        margin: "0in",
        padding: "0px",
        width: "9in",
        height: "11in",
        backgroundColor: "white",
        ...props.style
    }}>
        {props.children}
    </div>
}
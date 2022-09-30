import React from "react";
import { Options } from "../TabOptions";


export function TabPage(props: { tabs: string[], options: Options }) {
    const Dist = (10.8) / 10

    return <div style={{
        display: "flex",
        position: "relative",
        backgroundColor: "black",
        padding: "0px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontSize: "60px",
        flexDirection: "column",
    }}
    >
        {props.tabs.map((tab, i) =>
            <Page>
                <div style={{
                    display: "flex",
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    rotate: "",
                    height: `${Dist}in`,
                    top: `${Dist * i + .1}in`,
                    right: ".1in",
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    justifyItems: "center",
                    writingMode: "vertical-lr",
                    backgroundColor: (i % 2) === 0 ? "gold" : "gray"
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
        width: "8.5in",//TODO: change back
        height: "11in",
        backgroundColor: "white",
        ...props.style
    }}>
        {props.children}
    </div>
}
import React from "react";
import { GrDownload } from "react-icons/gr";
import { MakeTabs, fileReturn } from "./MakeTabs";
import { Options } from "./TabOptions";


export function DownloadTabs(props: {
    Tabs: string[][]//[group][1-20][tab]
    Options: Options,
    size?: number
    style?: React.CSSProperties
}) {
    function DownloadClick() {
        const TabFiles = MakeTabs(props.Tabs, props.Options)
        TabFiles.forEach((tabString, i) => {
            downloadKSF(tabString)
        })
    }

    function downloadKSF(tabString: fileReturn) {
        const element = document.createElement("a");
        const file = new Blob(["\ufeff" + tabString.write], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = tabString.name;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        setTimeout(() => {
            document.body.removeChild(element)
        }, 10000);
    }

    return (
        <div style={{
            ...{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyItems: "center",
                justifyContent: "center",
                userSelect: "none"
            }, ...props.style
        }}
            onClick={DownloadClick}
        >
            <GrDownload size={props.size} />
        </div>
    )
}
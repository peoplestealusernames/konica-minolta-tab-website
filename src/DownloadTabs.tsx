import React from "react";
import { GrDownload } from "react-icons/gr";
import { MakeTabs, fileReturn } from "./MakeTabs";


export function DownloadTabs(props: {
    Tabs: string[][]//[group][1-20][tab]
    Model: string,
    size?: number
    style?: React.CSSProperties
}) {
    function DownloadClick() {
        const TabFiles = MakeTabs(props.Tabs, props.Model)
        TabFiles.forEach(downloadKSF)
    }

    function downloadKSF(tabString: fileReturn) {
        const element = document.createElement("a");
        const file = new Blob(["\ufeff" + tabString.write], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = tabString.name;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        document.body.removeChild(element)
    }

    return (
        <div style={{
            ...{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyItems: "center",
                justifyContent: "center",
            }, ...props.style
        }}
            onClick={DownloadClick}
        >
            <GrDownload size={props.size} />
        </div>
    )
}
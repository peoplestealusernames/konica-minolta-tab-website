import { useState } from "react";
import { Buttons } from "./Buttons";
import { Editor } from "./Editor";
import { Tabs } from "./Tabs";

export function Main() {

    const [text, settext] = useState<string>("")

    return <div style={{
        display: "flex",
        flexDirection: "row",
    }}>
        <Editor text={text} settext={settext} />
        <Buttons text={text} settext={settext} />
        <Tabs text={text} />
    </div>
}
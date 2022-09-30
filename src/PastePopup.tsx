import { useEffect, useState } from "react";
import { ContextButton } from "./components/ContextButton";
import { StyledTab } from "./components/popup/StyledTab";
import { sortWithNumber } from "./components/sortWithNumber";
import { StyledPopup } from "./components/StyledPopup";
import { Editor } from "./Editor";

export function PastePopup(props: {
    active: boolean
    onClose: () => void
    setInput: (input: string) => void
}) {
    const [paths, setpaths] = useState<string>("")

    function GeneratePaths() {
        const out = paths.split("\n").map((e, i) => {
            let file = e.split(/(\\|\/)/).pop()
            if (!file)
                return ""

            const prefixi = file.lastIndexOf(".")
            if (prefixi !== -1)
                file = file.slice(0, prefixi)

            return file
        })

        props.setInput(out.sort(sortWithNumber).join("\n"))
        props.onClose()
    }

    useEffect(() => {
        setpaths("")
    }, [props.active])

    return <StyledPopup
        onClose={props.onClose}
        active={props.active}
        title={
            <ContextButton style={{
                display: "flex",
                color: "white",
                margin: "0.2rem",
                marginBottom: "-.1rem",
                border: "0.1rem solid white",
                borderRadius: "0",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                fontSize: "4rem",
                transition: "background-color 100ms linear",
                backgroundColor: "rgb(20,20,30)",
            }}
                hoverStyle={{
                    backgroundColor: "rgb(60,60,75)"
                }}
                onMouseDown={() => GeneratePaths()}
            >
                Generate Tabs
            </ContextButton>
        }
    >
        <Editor
            value={paths}
            onChange={setpaths}
            style={{
                fontSize: "1.8rem",
                overflow: "auto",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                whiteSpace: "pre",
                width: "60vw",
                height: "50vh",
                borderRadius: "2rem",
                outline: "none",
                border: "none",
                transition: "box-shadow 200ms linear",
                boxShadow: `0 0 0.1rem 0.1rem lightgrey`,
            }}
            focusStyle={{
                boxShadow: `0 0 0.2rem 0.2rem red`,
            }}
            placeholder={"Paste file paths here\n" +
                "ex: C:\\\\b\\a\\c.txt or /a/b/c.pdf\n" +
                "On windows file explorer\n" +
                "select files -> shift right click -> copy all paths -> paste here"}
        />
    </StyledPopup>
}
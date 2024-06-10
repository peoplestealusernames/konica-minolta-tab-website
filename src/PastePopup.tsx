import { useEffect, useState } from "react";
import { ContextButton } from "./components/ContextButton";
import { StyledTab } from "./components/popup/StyledTab";
import { StyledPopup } from "./components/StyledPopup";
import { Editor } from "./Editor";

export function PastePopup(props: {
    active: boolean
    onClose: () => void
    setInput: (input: string) => void
}) {
    const [paths, setpaths] = useState<string>("")

    const [focus, setFocus] = useState(false)

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

        props.setInput(out.join("\n"))
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
                margin: "1rem",
                marginBottom: "1.5rem",
                borderRadius: "1rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                fontSize: "3rem",
                backgroundColor: "#2b2b2e",
            }}
                onMouseDown={() => GeneratePaths()}
            >
                Generate Tabs
            </ContextButton>
        }
    >
        <textarea
            value={paths}
            onChange={(e) => { e.preventDefault(); setpaths(e.target.value) }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            style={{
                fontSize: "1.8rem",
                overflow: "auto",
                padding: "1.0rem",
                whiteSpace: "pre",
                width: "60vw",
                height: "50vh",
                borderRadius: "1.5rem",
                outline: "none",
                border: "none",
                overflowY: "scroll",
                overflowX: "auto",
                resize: "none",
                background: "#2b2b2e",
            }}
            placeholder={"Paste file paths here\n" +
                "ex: C:\\\\b\\a\\c.txt or /a/b/c.pdf\n" +
                "On windows file explorer\n" +
                "select files -> shift right click -> copy all paths -> paste here"}
        />
    </StyledPopup>
}
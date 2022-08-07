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
                margin: "0.2rem",
                border: "0.4rem solid white",
                borderRadius: "1rem",
                padding: "1rem",
                fontSize: "4rem",
                backgroundColor: "black",
                transition: "color 100ms linear"
            }}
                hoverStyle={{
                    color: "green"
                }}
                onMouseDown={() => GeneratePaths()}
            >
                Generate Names
            </ContextButton>
        }
    >
        <Editor
            lineLength={1000}
            value={paths}
            onChange={setpaths}
            style={{
                fontSize: "2.2rem",
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
                boxShadow: `0 0 0.2rem 0.3rem lightgrey`,
            }}
            focusStyle={{
                boxShadow: `0 0 0.2rem 0.3rem red`,
            }}
            placeholder={"Paste file paths here\n" +
                "ex: C:\\\\b\\a\\c.txt or /a/b/c.pdf\n" +
                "On windows file explorer\n" +
                "select files -> shift right click -> copy all paths -> paste here"}
        />
    </StyledPopup>
}
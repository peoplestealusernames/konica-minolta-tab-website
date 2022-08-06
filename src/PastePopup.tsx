import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ContextButton } from "./components/ContextButton";
import { Popup } from "./components/popup/Popup";
import { StyledTab } from "./components/popup/StyledTab";
import { Editor } from "./Editor";

export function PastePopup(props: {
    active: boolean
    onClose?: () => void
    setInput: (input: string) => void
}) {
    const [paths, setpaths] = useState<string>("")

    const onClose = props.onClose ? props.onClose : () => { }

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
        onClose()
    }

    useEffect(() => {
        setpaths("")
    }, [props.active])

    return <Popup
        active={props.active}
        onClose={() => onClose()}
        closeStyle={{ right: "2rem", top: "2rem", width: "3rem", height: "3rem" }}
    >
        <StyledTab style={{
            flexDirection: "column",
            alignItems: "center",
        }}
            masterStyle={{
                borderRadius: "5rem",
                padding: "1.5rem",
                backgroundColor: "#282c34",
                border: "none",
                boxShadow: `0 0 0.2rem 0.5rem lightgrey, 0 0 0.6rem 0.7rem black`,
            }}
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
                    overflow: "auto",
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    whiteSpace: "pre",
                    width: "75vw",
                    height: "60vh",
                    borderRadius: "2.5rem",
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
        </StyledTab>
    </Popup>
}
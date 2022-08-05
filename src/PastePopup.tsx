import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ContextButton } from "./components/ContextButton";
import { Popup } from "./components/popup/Popup";
import { StyledTab } from "./components/popup/StyledTab";
import { Editor } from "./Editor";

export function PastePopup(props: {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>,
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
        props.setActive(false)
    }

    useEffect(() => {
        setpaths("")
    }, [props.active])

    return <Popup
        active={props.active}
        setActive={props.setActive}
        closeStyle={{ right: "20px", top: "20px", width: "30px", height: "30px" }}
    >
        <StyledTab style={{
            flexDirection: "column",
            alignItems: "center",
        }}
            masterStyle={{
                borderRadius: "50px",
                padding: "15px",
                backgroundColor: "#282c34",
                border: "none",
                boxShadow: `0px 0px 2px 5px lightgrey, 0px 0px 6px 7px black`,
            }}
            title={
                <ContextButton style={{
                    display: "flex",
                    color: "white",
                    margin: "2px",
                    border: "4px solid white",
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "40px",
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
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    whiteSpace: "pre",
                    width: "75vw",
                    height: "60vh",
                    borderRadius: "25px",
                    outline: "none",
                    border: "none",
                    transition: "box-shadow 200ms linear",
                    boxShadow: `0px 0px 2px 3px lightgrey`,
                }}
                focusStyle={{
                    boxShadow: `0px 0px 2px 3px red`,
                }}
                placeholder={"Paste file paths here\n" +
                    "ex: C:\\\\b\\a\\c.txt or /a/b/c.pdf\n" +
                    "On windows file explorer\n" +
                    "select files -> shift right click -> copy all paths -> paste here"}
            />
        </StyledTab>
    </Popup>
}
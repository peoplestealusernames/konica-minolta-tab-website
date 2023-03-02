import { Dialog, Tooltip, Typography, DialogTitle, TextField, FormControlLabel, Checkbox, Button } from "@mui/material"
import { MutableRefObject, useRef, useState } from "react"
import { extractFileNames } from "./extractFileNames"


export function PathsPopup(props: {
    text: string,
    settext: React.Dispatch<React.SetStateAction<string>>
    pathPopup: boolean
    setpathPopup: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [replace, setreplace] = useState(true)
    const TextRef = useRef<HTMLTextAreaElement>()

    function ImportPaths() {
        const current = TextRef.current
        if (!current)
            throw new Error("TextRef.current is not valid")

        const paths = extractFileNames(current.value.split("\n"))
        if (replace)
            props.settext(paths.join("\n"))
        else
            props.settext(props.text + "\n" + paths.join("\n"))

    }

    return <Dialog
        open={props.pathPopup}
        onClose={() => props.setpathPopup(false)}
    >
        <Tooltip
            arrow
            title={<div>
                <Typography>
                    Converts list of files or files into tab names.
                </Typography>
                <Typography>
                    From file explorer:
                </Typography>
                <Typography>
                    In file explorer select all the files you want to import.
                    Press shift right click, copy as path.
                    Paste in here and click import.
                </Typography>
                <Typography>
                    From list:
                </Typography>
                <Typography>
                    Paste in the list each file can contain an extention.
                    Seperate each file by line.
                </Typography>
            </div>}
        >
            <DialogTitle>
                Import file names (?)
            </DialogTitle>
        </Tooltip>
        <TextField
            inputRef={TextRef}
            style={{ width: "40vw", margin: "1rem", marginTop: "0rem" }}
            inputProps={{ height: "20vw" }}
            id="outlined-multiline-static"
            label="Paths"
            multiline
            rows={15}
            defaultValue=""
            fullWidth
        />

        <FormControlLabel
            style={{ marginLeft: "1rem" }}
            control={
                <Checkbox
                    checked={replace}
                    onChange={(e => setreplace(e.target.checked))}
                />}
            label="Replace text"
        />
        <Button variant="contained"
            onClick={ImportPaths}
        >
            Import
        </Button>
    </Dialog >
}
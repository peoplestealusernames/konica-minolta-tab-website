import { Dialog, Tooltip, Typography, DialogTitle, TextField, FormControlLabel, Checkbox, Button } from "@mui/material"
import { MutableRefObject, useRef, useState } from "react"
import { extractFileNames } from "./extractFileNames"


export function SettingPopup(props: {
    settingPopup: boolean
    setsettingPopup: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const TextRef = useRef<HTMLTextAreaElement>()

    function ImportPaths() {
        const current = TextRef.current
        if (!current)
            throw new Error("TextRef.current is not valid")

    }

    return <Dialog
        open={props.settingPopup}
        onClose={() => props.setsettingPopup(false)}
    >
        <Tooltip
            arrow
            title={<div>
                <Typography>
                    Takes an exported ksf and sets all settings to be compatible
                </Typography>
            </div>}
        >
            <DialogTitle>
                Import setting (?)
            </DialogTitle>
        </Tooltip>
        <TextField
            inputRef={TextRef}
            style={{ width: "40vw", margin: "1rem", marginTop: "0rem" }}
            inputProps={{ height: "20vw" }}
            id="outlined-multiline-static"
            label="Exported KSF"
            multiline
            rows={15}
            defaultValue=""
            fullWidth
        />

        <Button variant="contained"
            onClick={ImportPaths}
        >
            Import
        </Button>
    </Dialog >
}
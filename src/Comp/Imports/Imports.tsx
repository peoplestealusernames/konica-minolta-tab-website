import { QuestionMark } from "@mui/icons-material";
import { Button, ButtonGroup, Card, CardContent, CardHeader, Checkbox, Dialog, DialogTitle, FormControlLabel, Grid, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { text } from "stream/consumers";
import { extractFileNames } from "./extractFileNames";
import { PathsPopup } from "./PathsPopup";
import { SettingPopup } from "./SettingPopup";


export function Imports(props: {
    text: string,
    settext: React.Dispatch<React.SetStateAction<string>>
}) {
    const [pathPopup, setpathPopup] = useState<boolean>(false)
    const [settingPopup, setsettingPopup] = useState<boolean>(true)

    return <Card>
        <CardHeader
            style={{ fontWeight: "bold", paddingBottom: "0rem" }}
            title="Import"
        />
        <CardContent>
            <Tooltip
                style={{ marginRight: ".75rem" }}
                title={<Typography>
                    Makes tab names based on file names
                </Typography>}
                arrow
            >
                <Button variant="outlined" onClick={() => setpathPopup(!pathPopup)}>
                    File Names
                </Button>
            </Tooltip>
            <Tooltip
                style={{ marginRight: ".75rem" }}
                title={<Typography>
                    Using a setting file autofill settings
                </Typography>}
                arrow
            >
                <Button variant="outlined">
                    Settings
                </Button>
            </Tooltip>
        </CardContent>
        <PathsPopup pathPopup={pathPopup} setpathPopup={setpathPopup} text={props.text} settext={props.settext} />
        <SettingPopup settingPopup={settingPopup} setsettingPopup={setsettingPopup} />
    </Card >
}
import { Grid } from "@mui/material";
import { Imports } from "./Imports/Imports";
import { Settings } from "./Settings";
import { Tools } from "./Tools";


export function Buttons(props: {
    text: string,
    settext: React.Dispatch<React.SetStateAction<string>>
}) {
    return <Grid container spacing={3} style={{ alignItems: "left", margin: "2rem" }}>
        <Grid item>
            <Imports text={props.text} settext={props.settext} />
        </Grid>
        <Grid item>
            <Tools text={props.text} settext={props.settext} />
        </Grid>
        <Grid item>
            <Settings />
        </Grid>
    </Grid>
}
import { Grid, TextField } from "@mui/material";


export function Editor(props: {
    text: string,
    settext: React.Dispatch<React.SetStateAction<string>>
}) {

    return <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        flexDirection: "row",
        margin: "2rem",
    }}>
        <TextField
            style={{ width: "22vw", minHeight: "20vh" }}
            inputProps={{ height: "20vw" }}
            id="outlined-multiline-static"
            label="Tabs"
            multiline
            rows={20}
            value={props.text}
            onChange={e => {
                const text = e.target.value
                if (text)
                    props.settext(text)
            }}
            fullWidth
        />
    </div>
}
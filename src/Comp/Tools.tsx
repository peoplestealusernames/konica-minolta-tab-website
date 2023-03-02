import { Card, CardHeader, CardContent, Tooltip, Button, Typography } from "@mui/material";


export function Tools(props: {
    style?: React.CSSProperties
    text: string,
    settext: React.Dispatch<React.SetStateAction<string>>
}) {


    return <Card
        style={props.style}
    >
        <CardHeader
            style={{ fontWeight: "bold", paddingBottom: "0rem" }}
            title="Tools"
        />
        <CardContent>
            <Tooltip style={{ marginRight: ".75rem" }}
                title={<Typography>
                    Sorts in alphabetical order
                    click twice for reverse
                </Typography>}
                arrow
            >
                <Button variant="outlined"
                    onClick={() =>
                        props.settext(orderString(props.text))
                    }
                >
                    Sort
                </Button>
            </Tooltip>
            <Tooltip style={{ marginRight: ".75rem" }}
                title={<Typography>
                    Using a setting file autofill settings
                </Typography>}
                arrow
            >
                <Button variant="outlined">
                    Settings
                </Button>
            </Tooltip>
        </CardContent >
    </Card >
}

function orderString(text: string): string {
    return text.split("\n").sort(sortWithNumber).join("\n")
}

function sortWithNumber(a: string, b: string) {
    return a.localeCompare(b, undefined, { numeric: true })
}
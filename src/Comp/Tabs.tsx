import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { text } from "stream/consumers";

function createGrid(tabs: string[], cut: number) {
    const grid = [];
    for (let i = 0; i < tabs.length; i += cut) {
        const row = [];
        for (let j = i; j < i + cut && j < tabs.length; j++) {
            row.push(tabs[j]);
        }
        grid.push(row);
    }
    return grid;
}

export function Tabs(props: {
    text: string
}) {
    const cut = 5
    const grid = createGrid(props.text.split("\n"), cut);

    return (
        <div
            style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
            {grid.map((row, index) => (
                <div key={index}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%"
                    }}
                >
                    {row.map((item, index) => (
                        <div key={index} style={{
                            width: `${100 / cut}%`
                        }}>
                            {item}
                        </div>
                    ))}
                </div>
            ))
            }
        </div >
    );
}
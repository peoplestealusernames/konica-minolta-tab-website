


export function TabShow(props: {
    title: string,
    tabs: string[]
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            padding: "0px",
            margin: "0px",
            border: '3px solid white',
            color: "white",
            height: "fit-content"
        }}>
            <div style={{
                padding: "1px",
                borderBottom: '4px solid white',
                backgroundColor: "black",
                fontSize: "20px",
            }}>
                {props.title}
            </div>
            {props.tabs.map((e, i) => {
                return <div
                    key={i}
                    style={{
                        fontSize: "11px",
                        backgroundColor: (i % 2) == 0 ? "grey" : "black"
                    }}
                >
                    <span style={{ float: "left" }}>
                        {i}:
                    </span>
                    <span >
                        {e}
                    </span>
                </div>
            })}
        </div>
    )
}
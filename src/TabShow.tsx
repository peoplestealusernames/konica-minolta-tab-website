

export function TabShow(props: {
    title: string,
    tabs: string[],
    style?: React.CSSProperties
}) {
    return (
        <div style={{
            ...{
                display: "flex",
                flexDirection: "column",
                padding: "0px",
                margin: "0px",
                border: '3px solid white',
                color: "white",
                backgroundColor: "black",
                height: "fit-content"
            }, ...props.style
        }}>
            <div style={{
                padding: "1px",
                borderBottom: '4px solid white',
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
                    <span style={{
                        float: "left",
                        marginLeft: "2px",
                        marginRight: "5px"
                    }}>
                        {(i + 1).toString().padStart(2, "0")}:
                    </span>
                    <span >
                        {e}
                    </span>
                </div>
            })}
        </div>
    )
}
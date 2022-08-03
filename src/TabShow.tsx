


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
        }}>
            <div style={{
                padding: "1px",
                backgroundColor: "black",
                fontSize: "20px",
            }}>
                {props.title}
            </div>
            {props.tabs.map((e, i) => {
                return <div
                    key={i}
                    style={{
                        fontSize: "12px",
                        backgroundColor: (i % 2) == 0 ? "grey" : "black"
                    }}
                >{e}</div>
            })}
        </div>
    )
}
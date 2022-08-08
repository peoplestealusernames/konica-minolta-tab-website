import React, { useRef, useState } from "react";

export function RegexReplacer(props: {
    input: string,
    onChange: (output: string) => void
    style?: React.CSSProperties
    inputStyle?: React.CSSProperties
}) {
    const matcher = React.createRef<HTMLInputElement>()
    const replacer = React.createRef<HTMLInputElement>()

    const inputStyle: React.CSSProperties = {
        display: "flex",
        flexGrow: 1,
        flexBasis: 0,
        color: "rgb(200,200,210)",
        backgroundColor: "rgb(20,20,20)",
        outline: "none",
        border: ".1rem solid rgb(75,75,85)",
        ...props.inputStyle
    }

    function runReplacer(global = false) {
        if (!matcher.current?.value || !replacer.current?.value)
            throw new Error("Could not get matcher or replacer value")

        const match = RegExp(matcher.current.value, global ? "g" : "")
        props.onChange(props.input.replace(match, replacer.current.value))
    }

    return <div style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black",
        border: inputStyle.border,
        ...props.style
    }}>
        <input ref={matcher}
            style={inputStyle}
            placeholder={"Search for"}
        />
        <input ref={replacer}
            style={inputStyle}
            placeholder={"Replace with"}
        />
        <span style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <button
                style={{ cursor: "pointer", ...inputStyle }}
                onClick={() => runReplacer()}
            >
                Replace Next
            </button>
            <button
                style={{ cursor: "pointer", ...inputStyle }}
                onClick={() => runReplacer(true)}
            >
                Replace All
            </button>
        </span>
    </div>
}
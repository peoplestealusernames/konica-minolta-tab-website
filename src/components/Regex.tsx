import React from "react";
import { ContextButton } from "./ContextButton";

export function RegexReplacer(props: {
    input: string,
    onChange: (output: string) => void
    style?: React.CSSProperties
    inputStyle?: React.CSSProperties
    buttonStyle?: React.CSSProperties
}) {
    const matcher = React.createRef<HTMLInputElement>()
    const replacer = React.createRef<HTMLInputElement>()

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
        ...props.style
    }}>
        <input ref={matcher}
            style={props.inputStyle}
            placeholder={"Search for"}
        />
        <input ref={replacer}
            style={props.inputStyle}
            placeholder={"Replace with"}
        />
        <span style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <ContextButton
                style={props.buttonStyle}
                onMouseDown={() => runReplacer()}
            >
                Replace Next
            </ContextButton>
            <ContextButton
                style={props.buttonStyle}
                onMouseDown={() => runReplacer(true)}
            >
                Replace All
            </ContextButton>
        </span>
    </div>
}
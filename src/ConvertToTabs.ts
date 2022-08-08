import { Options } from "./TabOptions"

export function ConvertToTabs(text: string, options: Options) {
    const lines = text.split("\n")
    const newTab: string[][] = []
    const TabPerFile = Math.floor(20 / options.Cut) * options.Cut

    lines.forEach((line, i) => {
        const n = i % TabPerFile
        const t = (Math.floor(i / TabPerFile))

        if (n === 0)
            newTab[t] = []

        newTab[t][n] = line
    })

    return newTab
}
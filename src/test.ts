import { appendFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync, } from "fs";

const data = readFileSync('names.txt', { encoding: 'utf8' })

let output: [string[]] = [[]]

const lines = data.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (!output[Math.floor((i) / 20)])
        output[Math.floor((i) / 20)] = []

    output[Math.floor((i) / 20)][i % 20] = lines[i]
}

if (existsSync('./Out'))
    rmSync('./Out', { 'recursive': true })

mkdirSync('./Out')

for (let k = 0; k < output.length; k++) {
    let stri = readFileSync("TabExport.KSF", { encoding: 'utf-8' })
    stri = stri.replace("{Name}", `Tabs_${k + 1}/${output.length}`)
    stri = stri.replace("{Name}", `Tabs_${k + 1}/${output.length}`)
    stri = stri.replace("{Name}", `Tabs_${k + 1}/${output.length}`)
    stri = stri.replace("{Count}", output[k].length.toString())

    for (let i = 0; i < output[k].length; i++) {
        stri = stri.replace(`{${i + 1}}`, output[k][i])
    }

    writeFileSync(`./Out/Tabs_${k + 1}_of_${output.length}.KSF`, stri)
}

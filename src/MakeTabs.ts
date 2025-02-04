import TabString from "./TabExport"
import { Options } from "./TabOptions"

export type fileReturn = { name: string, write: string }

export function DownloadTabs(Tabs: string[][], Option: Options) {
    const TabFiles = MakeTabs(Tabs, Option)
    TabFiles.forEach((tabString, i) => {
        DownloadKSF(tabString)
    })
}

export function DownloadKSF(tabString: fileReturn) {
    const element = document.createElement("a");
    const file = new Blob(["\ufeff" + tabString.write], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = tabString.name;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    setTimeout(() => {
        document.body.removeChild(element)
    }, 10000);
}

export function MakeTabs(tabNames: string[][], options: Options): fileReturn[] {
    const files: fileReturn[] = []

    for (let k = 0; k < tabNames.length; k++) {
        let stri = TabString
        stri = stri.replaceAll("{Name}", `Tabs_${k + 1}/${tabNames.length}`)
        stri = stri.replaceAll("{Count}", tabNames[k].length.toString())

        console.log(options);

        stri = stri.replaceAll("{Model}", options.Model)
        stri = stri.replaceAll("{Version}", options.Version)
        stri = stri.replaceAll("{FontSize}", options.FontSize.toString())
        stri = stri.replaceAll("{TabCut}", options.Cut.toString())
        stri = stri.replaceAll("{VerticalOffset}", options.Offset.toString())
        stri = stri.replaceAll("{FontName}", options.Font.toString())
        stri = stri.replaceAll("{BOLD}", (+options.bold).toString())

        for (let i = 0; i < tabNames[k].length; i++) {
            stri = stri.replace(`{${i + 1}}`, tabNames[k][i])
        }

        files.push({
            name: `Tabs_${k + 1}_of_${tabNames.length}.KSF`,
            write: stri
        })
    }

    return files
}
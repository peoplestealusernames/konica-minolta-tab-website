
export function sortWithNumber(a: string, b: string) {
    return a.localeCompare(b, undefined, { numeric: true })
}
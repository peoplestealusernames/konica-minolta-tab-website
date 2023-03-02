const regex = /["']?([^\\/]+?)(?:\.[^.]+)?["']?$/;

export function extractFileNames(paths: string[]): string[] {
    const fileNames = paths.map(path => path.match(regex)?.[1] ?? '');
    return fileNames;
}
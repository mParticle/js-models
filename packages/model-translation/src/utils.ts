export function matchMap(
    element: string,
    map: Record<string, string>
): string | undefined {
    if (element in map) {
        return map[element];
    }
    return undefined;
}

export function matchMapReverse(
    element: string,
    map: Record<string, string>
): string | undefined {
    if (Object.values(map).includes(element)) {
        return Object.keys(map).find(selector => element === map[selector]);
    }
    return undefined;
}

export function pascalCaseToUnderscore(str: string): string {
    return str
        .replace(/\.?([A-Z]+)/g, (x, y) => {
            return '_' + y.toLowerCase();
        })
        .replace(/^_/, '');
}

export function underscoreToPascalCase(str: string): string {
    return str
        .replace(/_./g, x => x.toUpperCase())
        .replace(/_/g, '')
        .replace(/^./, x => x.toUpperCase());
}

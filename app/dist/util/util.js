export function defaultEquals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
export function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    }
    else if (item === undefined) {
        return 'UNDEFINED';
    }
    else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

export function partitionArray(array : any[], isValid : (...args: any) => boolean) {
    return array.reduce(([pass, fail], element) => {
        return isValid(element) ? [[...pass, element], fail] : [pass, [...fail, element]];
    }, [[], []])
}
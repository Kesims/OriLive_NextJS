export function dynamicSort<T>(property: string, sortOrder: number) {
    return function (a: T, b: T) {
        const result =
            a[property as keyof T] < b[property as keyof T]
                ? -1
                : a[property as keyof T] > b[property as keyof T]
                ? 1
                : 0;
        return result * sortOrder;
    };
}

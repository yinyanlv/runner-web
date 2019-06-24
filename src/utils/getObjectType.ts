export function getObjectType(obj: any): string {
    const toString = Object.prototype.toString;
    const map = {
        '[object Array]': 'array',
        '[object Object]': 'object',
        '[object Function]': 'function',
        '[object RegExp]': 'regexp',
        '[object Date]': 'date',
        '[object Number]': 'number',
        '[object Boolean]': 'boolean',
        '[object String]': 'string',
        '[object Null]': 'null',
        '[object Undefined]': 'undefined'
    };
    return map[toString.call(obj)];
}
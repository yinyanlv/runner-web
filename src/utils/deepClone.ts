import {getObjectType} from './getObjectType';

export function deepClone(obj: any): any {
    const type = getObjectType(obj);

    if (type !== 'array' && type !== 'object') {
        return obj;
    }

    if (type === 'array') {
        let result: any = [];

        for (let item of obj) {
            result.push(deepClone(item));
        }

        return result;
    }

    if (type === 'object') {
        let result = {};

        Object.keys(obj).forEach((key) => {

            result[key] = deepClone(obj[key]);
        });

        return result;
    }
}
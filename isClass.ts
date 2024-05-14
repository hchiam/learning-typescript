/** or just instanceof */
export function isClass(instance: object, classObject: any): boolean {
    return instance.constructor.name === classObject.name;
}

export const convertObjectToCssNotation = (styleObj: { [key: string]: string }, propertyPrefix?: string) => {
    const prefix = propertyPrefix === undefined ? '' : propertyPrefix;

    let cssNotation = '';
    Object.entries<string>(styleObj).forEach(([key, value]) => {
        cssNotation += `${prefix}${key}: ${value};`;
    });
    return cssNotation;
};

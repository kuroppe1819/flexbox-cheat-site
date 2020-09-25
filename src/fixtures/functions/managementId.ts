export const createFlexboxPropertyId = (name: string, value: string) => `${name}_${value}`;

export const parseFlexboxPropertyId = (flexboxPropertyId: string) => {
    const splitted = flexboxPropertyId.split('_');
    return { propertyName: splitted[0], propertyValue: splitted[1] };
};

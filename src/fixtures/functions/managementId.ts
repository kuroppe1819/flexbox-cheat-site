export const createFlexboxPropertyId = (name: string, value: string) => `${name}_${value}`;

export const pickUpFlexboxPropertyName = (flexboxPropertyId: string) => flexboxPropertyId.split('_')[0];

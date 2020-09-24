import { flexboxProperties, FlexboxProperty, FlexboxPropertyInfo } from '../../data/flexboxProperties';

export const getFlexboxProperties = (): FlexboxProperty[] => flexboxProperties;

export const getFlexboxProperty = (propertyName: string): FlexboxProperty =>
    getFlexboxProperties().filter((property: FlexboxProperty) => property.name === propertyName)[0];

export const getFlexboxPropertyInfo = (propertyName: string, propertyValue: string): FlexboxPropertyInfo =>
    getFlexboxProperty(propertyName).infoList.filter((info: FlexboxPropertyInfo) => info.value === propertyValue)[0];

import { flexboxProperties, FlexboxProperty, FlexboxPropertyInfo } from '../../data/flexboxProperties';
import { parseFlexboxPropertyId } from './managementId';

export const getFlexboxProperties = (): FlexboxProperty[] => flexboxProperties;

export const getFlexboxProperty = (propertyName: string): FlexboxProperty =>
    getFlexboxProperties().filter((property: FlexboxProperty) => property.name === propertyName)[0];

const getFlexboxPropertyInfo = (propertyName: string, propertyValue: string): FlexboxPropertyInfo =>
    getFlexboxProperty(propertyName).infoList.filter((info: FlexboxPropertyInfo) => info.value === propertyValue)[0];

export const getFlexboxPropertyInfoById = (flexboxPropertyId: string): FlexboxPropertyInfo => {
    const { propertyName, propertyValue } = parseFlexboxPropertyId(flexboxPropertyId);
    return getFlexboxPropertyInfo(propertyName, propertyValue);
};

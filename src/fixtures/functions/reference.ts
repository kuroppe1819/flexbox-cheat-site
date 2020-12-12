import { Language } from '../../components/providers/CustomIntlProvider';
import { flexboxProperties, FlexboxProperty } from '../../data/flexboxProperties';
import { parseFlexboxPropertyId } from './managementId';

const createUrlForMDN = (language: string, propertyName: string) =>
    `https://developer.mozilla.org/${language}/docs/Web/CSS/${propertyName}`;

export const createReferenceUrl = (flexboxPropertyId: string, language: Language) => {
    const { propertyName } = parseFlexboxPropertyId(flexboxPropertyId);
    const property = flexboxProperties.filter((property: FlexboxProperty) => property.name === propertyName)[0];

    if (property.hasReference) {
        if (language === 'ja') {
            return createUrlForMDN('ja', propertyName);
        } else if (language === 'en') {
            return createUrlForMDN('en-US', propertyName);
        } else {
            throw new Error('You specified language is not supported.');
        }
    } else {
        return null;
    }
};

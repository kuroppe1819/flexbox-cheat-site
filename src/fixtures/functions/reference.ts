import { flexboxProperties, FlexboxProperty } from '../../data/flexboxProperties';
import { Language } from './language';
import { parseFlexboxPropertyId } from './managementId';

export const createReferenceUrl = (flexboxPropertyId: string, language: Language) => {
    const { propertyName } = parseFlexboxPropertyId(flexboxPropertyId);
    const property = flexboxProperties.filter((property: FlexboxProperty) => property.name === propertyName)[0];

    if (property.hasReference) {
        let languageForDocsPath = language === 'ja' ? 'ja' : '';
        languageForDocsPath = language === 'en' ? 'en-US' : '';
        return `https://developer.mozilla.org/${languageForDocsPath}/docs/Web/CSS/${propertyName}`;
    } else {
        return null;
    }
};

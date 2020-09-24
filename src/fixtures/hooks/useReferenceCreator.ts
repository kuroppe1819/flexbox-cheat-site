import { useEffect, useState } from 'react';
import { Language } from '../functions/language';
import { pickUpFlexboxPropertyName } from '../functions/managementId';
import { flexboxProperties, FlexboxProperty } from './../../data/flexboxProperties';

export const useReferenceCreator = (language: Language, flexboxPropertyId: string | null): [string | null] => {
    const [reference, setReference] = useState<string | null>(null);

    useEffect(() => {
        if (flexboxPropertyId !== null) {
            const propertyName = pickUpFlexboxPropertyName(flexboxPropertyId);
            const property = flexboxProperties.filter((property: FlexboxProperty) => property.name === propertyName)[0];

            if (property.hasReference) {
                let languageForDocsPath = language === 'ja' ? 'ja' : '';
                languageForDocsPath = language === 'en' ? 'en-US' : '';
                setReference(`https://developer.mozilla.org/${languageForDocsPath}/docs/Web/CSS/${propertyName}`);
            } else {
                setReference(null);
            }
        } else {
            setReference(null);
        }
    }, [language, flexboxPropertyId]);

    return [reference];
};

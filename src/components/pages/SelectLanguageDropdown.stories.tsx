import React from 'react';
import { SelectLanguageDropdown } from './SelectLanguageDropdown';

export default {
    title: 'components/page/SelectLanguageDropdown',
    argTypes: {
        assistiveText: { control: 'text' },
        onClick: { action: 'clicked' },
    },
};

export const Normal = () => <SelectLanguageDropdown />;

import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { TopContext } from '../../../pages/Top/TopContainer';
import { CodeViewer } from '../../components/CodeViewer';
import { useClipboard } from '../../util/useClipboard';
import { createHtmlCode } from '../../createCode/CreateHtmlCode';

export const Language = {
    CSS: 'css',
    HTML: 'html',
} as const;

export type Language = typeof Language[keyof typeof Language];

export const CodeViewerContainer = (): ReactElement => {
    const { selectedCssCode, showReference } = useContext(TopContext);

    const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.CSS);
    const [showCode, setShowCode] = useState('');
    const [copied, onCopy] = useClipboard(showCode);

    useEffect(() => {
        setSelectedLanguage(Language.CSS);
    }, [selectedCssCode]);

    useEffect(() => {
        if (selectedLanguage === Language.HTML) {
            setShowCode(createHtmlCode);
        } else {
            setShowCode(selectedCssCode);
        }
    }, [selectedCssCode, selectedLanguage]);

    return (
        <CodeViewer
            language={selectedLanguage}
            reference={showReference}
            code={showCode}
            copied={copied}
            setSelectedLanguage={setSelectedLanguage}
            onClickCopiedHandler={onCopy}
        />
    );
};

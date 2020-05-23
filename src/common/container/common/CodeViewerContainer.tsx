import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { MainContentsContext } from '../../../pages/MainContents/MainContentsContainer';
import { CodeViewer } from '../../components/CodeViewer';
import { useClipboard } from '../../util/useClipboard';

export const Language = {
    CSS: 'css',
    HTML: 'HTML',
} as const;

export type Language = typeof Language[keyof typeof Language];

export const CodeViewerContainer = (): ReactElement => {
    const { selectedCssCode, showReference } = useContext(MainContentsContext);

    const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.CSS);
    const [showCode, setShowCode] = useState('');
    const [copied, onCopy] = useClipboard(showCode);

    useEffect(() => {
        setSelectedLanguage(Language.CSS);
    }, [selectedCssCode]);

    useEffect(() => {
        if (selectedLanguage === Language.HTML) {
            setShowCode('HTMLを表示するよ');
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

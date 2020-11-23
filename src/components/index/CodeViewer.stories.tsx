import React, { useEffect, useState } from 'react';
import { constructCss } from '../../fixtures/functions/constructSourceCode';
import { getFlexboxPropertyInfoById } from '../../fixtures/functions/dataProvider';
import { Language } from '../../fixtures/functions/language';
import { createReferenceUrl } from '../../fixtures/functions/reference';
import { useClipboard } from '../../fixtures/hooks/useClipboard';
import {
    FilenameExtension,
    FILENAME_EXTENSION,
    getSourceCodeOfDisplay,
    StyledComponent as CodeViewer,
} from './CodeViewer';
export default {
    title: 'components/pages/index/CodeViewer',
};

export const Normal = () => {
    const id = 'display_flex';
    const language: Language = 'ja';
    const [open, setOpen] = useState(false);
    const [filenameExtension, setFilenameExtension] = useState<FilenameExtension>(FILENAME_EXTENSION.CSS);
    const [copied, setCopy] = useClipboard('');
    const [sourceCode, setSourceCode] = useState(constructCss(getFlexboxPropertyInfoById(id).style));

    useEffect(() => {
        setSourceCode(getSourceCodeOfDisplay(id, filenameExtension));
    }, [filenameExtension]);

    return (
        <CodeViewer
            id={id}
            language={language}
            reference={createReferenceUrl(id, language)}
            open={open}
            filenameExtension={filenameExtension}
            sourceCode={sourceCode}
            copySuccess={copied}
            onClickToggleViewerButton={() => setOpen(!open)}
            onClickCssViewButton={() => setFilenameExtension(FILENAME_EXTENSION.CSS)}
            onClickHtmlViewButton={() => setFilenameExtension(FILENAME_EXTENSION.MARKDOWN)}
            onClickCopyButton={setCopy}
        />
    );
};

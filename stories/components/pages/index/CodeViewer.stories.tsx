import React, { useEffect, useState } from 'react';
import {
    StyledComponent as CodeViewer,
    VisibleForTesting,
    FilenameExtension,
} from '../../../../src/components/index/CodeViewer';
import { constructCss } from '../../../../src/fixtures/functions/constructSourceCode';
import { getFlexboxPropertyInfoById } from '../../../../src/fixtures/functions/dataProvider';
import { Language } from '../../../../src/fixtures/functions/language';
import { createReferenceUrl } from '../../../../src/fixtures/functions/reference';
import { useClipboard } from '../../../../src/fixtures/hooks/useClipboard';
export default {
    title: 'components/pages/index/CodeViewer',
};

const getSourceCodeOfDisplay = VisibleForTesting.getSourceCodeOfDisplay;

export const Normal = () => {
    const id = 'display_flex';
    const language: Language = 'ja';
    const [open, setOpen] = useState(false);
    const [filenameExtension, setFilenameExtension] = useState<FilenameExtension>(
        VisibleForTesting.FilenameExtension.CSS
    );
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
            onClickCssViewButton={() => setFilenameExtension(VisibleForTesting.FilenameExtension.CSS)}
            onClickHtmlViewButton={() => setFilenameExtension(VisibleForTesting.FilenameExtension.MARKDOWN)}
            onClickCopyButton={setCopy}
        />
    );
};

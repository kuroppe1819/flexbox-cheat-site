import React, { useState } from 'react';
import { SourceCodeType, SourceCodeViewer } from '../../src/components/SourceCodeViewer';
import { useClipboard } from '../../src/fixtures/hooks/useClipboard';

export default {
    title: 'components/SourceCodeViewer',
};

export const Normal = () => {
    const [open, setOpen] = useState(false);
    const [sourceCodeType, setSourceCodeType] = useState<SourceCodeType>(SourceCodeType.CSS);
    const [copied, setCopy] = useClipboard('');

    return (
        <SourceCodeViewer
            open={open}
            sourceCode="flex: 1"
            sourceCodeType={sourceCodeType}
            reference={'https://developer.mozilla.org/ja/docs/Web/CSS/flex'}
            copySuccess={copied}
            onClickToggleViewerButton={() => setOpen(!open)}
            onClickCssViewButton={() => setSourceCodeType(SourceCodeType.CSS)}
            onClickHtmlViewButton={() => setSourceCodeType(SourceCodeType.HTML)}
            onClickCopyButton={setCopy}
        />
    );
};

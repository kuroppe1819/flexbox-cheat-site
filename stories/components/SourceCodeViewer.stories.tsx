import React, { useState } from 'react';
import { SourceCodeType, SourceCodeViewer } from '../../src/components/SourceCodeViewer';

export default {
    title: 'components/SourceCodeViewer',
};

export const Normal = () => {
    const [open, setOpen] = useState(false);
    return (
        <SourceCodeViewer
            open={open}
            sourceCode="flex: 1"
            sourceCodeType={SourceCodeType.CSS}
            onClickToggleViewerButton={() => setOpen(!open)}
        />
    );
};

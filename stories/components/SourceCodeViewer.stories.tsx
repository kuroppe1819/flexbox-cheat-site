import React, { useState } from 'react';
import { SourceCodeViewer } from '../../src/components/SourceCodeViewer';

export default {
    title: 'components/SourceCodeViewer',
};

export const Normal = () => {
    const [open, setOpen] = useState(false);
    return <SourceCodeViewer open={open} onClickToggleViewerButton={() => setOpen(!open)} />;
};

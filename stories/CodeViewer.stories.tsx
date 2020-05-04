import React, { ReactElement } from 'react';
import { CodeViewer } from '../src/common/components/CodeViewer';

export default {
    title: 'CodeViewer',
    component: CodeViewer,
};

export const CSSViewer = (): ReactElement => <CodeViewer headerTitle="CSS" code="Example CSS Code" />;

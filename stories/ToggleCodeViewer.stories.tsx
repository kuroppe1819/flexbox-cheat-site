import React, { ReactElement } from 'react';
import { ToggleCodeViewer } from '../src/common/components/ToggleCodeViewer';

export default {
    title: 'ToggleCodeViewer',
    component: ToggleCodeViewer,
};

export const Opened = (): ReactElement => <ToggleCodeViewer opened />;

export const Closed = (): ReactElement => <ToggleCodeViewer opened={false} />;

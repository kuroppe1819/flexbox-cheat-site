import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined';
import React from 'react';
import { IconButton, IconButtonProps } from './IconButton';

export default {
    title: 'components/common/button/IconButton',
    argTypes: {
        assistiveText: { control: 'text' },
        onClick: { action: 'clicked' },
    },
};

export const Normal = (args: IconButtonProps) => (
    <IconButton {...args}>
        <FileCopyOutlined />
    </IconButton>
);
Normal.args = {
    assistiveText: 'Normal',
};

export const Disabled = (args: IconButtonProps) => (
    <IconButton disabled {...args}>
        <FileCopyOutlined />
    </IconButton>
);
Disabled.args = {
    assistiveText: 'Disabled',
};

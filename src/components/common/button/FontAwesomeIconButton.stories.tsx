import { faCopy } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { FontAwesomeIconButton, FontAwesomeIconButtonProps } from './FontAwesomeIconButton';

export default {
    title: 'components/common/button/IconButton',
    argTypes: {
        assistiveText: { control: 'text' },
        iconSize: {
            control: {
                type: 'inline-radio',
                options: ['xs', 'lg', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
            },
        },
        onClick: { action: 'clicked' },
    },
};

export const Normal = (args: FontAwesomeIconButtonProps) => <FontAwesomeIconButton {...args} />;
Normal.args = {
    assistiveText: 'Normal',
    icon: faCopy,
    iconSize: '2x',
};

export const Disabled = (args: FontAwesomeIconButtonProps) => <FontAwesomeIconButton disabled {...args} />;
Disabled.args = {
    assistiveText: 'Disabled',
    icon: faCopy,
    iconSize: '2x',
};

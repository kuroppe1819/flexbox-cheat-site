import React from 'react';
import { TextButton, TextButtonProps, TEXT_BUTTON_COLOR } from './TextButton';

export default {
    title: 'components/common/link/TextButton',
    argTypes: {
        text: { control: 'text' },
        color: { control: { type: 'inline-radio', options: [TEXT_BUTTON_COLOR.PRIMARY, TEXT_BUTTON_COLOR.SECONDARY] } },
        fontSize: { control: { type: 'inline-radio', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'] } },
        onClick: { action: 'clicked' },
    },
};

export const Primary = (args: TextButtonProps) => <TextButton {...args} />;
Primary.args = {
    text: 'Primary',
    color: TEXT_BUTTON_COLOR.PRIMARY,
    fontSize: 'base',
};

export const Secondary = (args: TextButtonProps) => <TextButton {...args} />;
Secondary.args = {
    text: 'Secondary',
    color: TEXT_BUTTON_COLOR.SECONDARY,
    fontSize: 'base',
};

export const Disabled = (args: TextButtonProps) => <TextButton disabled {...args} />;
Disabled.args = {
    text: 'Disabled',
    color: TEXT_BUTTON_COLOR.PRIMARY,
    fontSize: 'base',
};

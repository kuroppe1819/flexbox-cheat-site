import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { FontAwesomeIconLink, FontAwesomeIconLinkProps } from './FontAwesomeIconLink';

export default {
    title: 'components/common/link/IconLink',
    argTypes: {
        assistiveText: { control: 'text' },
        iconSize: {
            control: {
                type: 'inline-radio',
                options: ['xs', 'lg', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
            },
        },
        url: { control: 'text' },
        external: { control: 'boolean' },
    },
};

export const Normal = (args: FontAwesomeIconLinkProps) => <FontAwesomeIconLink {...args} />;
Normal.args = {
    assistiveText: 'Twitter',
    icon: faTwitter,
    iconSize: '2x',
    url: 'https://google.com',
    external: true,
};

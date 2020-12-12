import React from 'react';
import { TextLink, TextLinkProps } from './TextLink';

export default {
    title: 'components/common/link/TextLink',
    argTypes: {
        text: { control: 'text' },
        fontSize: { control: { type: 'inline-radio', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'] } },
        url: { control: 'text' },
        external: { control: 'boolean' },
    },
};

export const Normal = (args: TextLinkProps) => <TextLink {...args} />;
Normal.args = {
    text: 'Normal',
    fontSize: 'base',
    url: 'https://google.com',
    external: true,
};

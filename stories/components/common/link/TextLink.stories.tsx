import React from 'react';
import { TextLink, TextLinkProps, TEXT_LINK_VARIANT } from '../../../../src/components/common/link/TextLink';

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
    variant: TEXT_LINK_VARIANT.NORMAL,
    url: 'https://google.com',
    external: true,
};

export const Square = (args: TextLinkProps) => <TextLink {...args} />;
Square.args = {
    text: 'Square',
    fontSize: 'base',
    variant: TEXT_LINK_VARIANT.SQUARE,
    url: 'https://google.com',
    external: true,
};

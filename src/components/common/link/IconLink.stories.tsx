import GitHub from '@material-ui/icons/GitHub';
import React from 'react';
import { IconLink, IconLinkProps } from './IconLink';

export default {
    title: 'components/common/link/IconLink',
    argTypes: {
        assistiveText: { control: 'text' },
        url: { control: 'text' },
        external: { control: 'boolean' },
    },
};

export const Normal = (args: IconLinkProps) => (
    <IconLink {...args}>
        <GitHub />
    </IconLink>
);
Normal.args = {
    url: 'https://google.com',
    external: true,
};

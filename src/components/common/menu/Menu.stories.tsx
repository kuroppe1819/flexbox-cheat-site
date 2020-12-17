import React from 'react';
import { TextLink } from '../link/TextLink';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

export default {
    title: 'components/common/Menu',
};

export const TextMenu = () => (
    <Menu>
        <MenuItem>Menu1</MenuItem>
        <MenuItem>Menu2</MenuItem>
        <MenuItem>Menu3</MenuItem>
        <MenuItem>Menu4</MenuItem>
    </Menu>
);

const URL = 'https://google.com';

export const LinkMenu = () => (
    <Menu>
        <MenuItem>
            <TextLink text={'Menu1'} url={URL} external />
        </MenuItem>
        <MenuItem>
            <TextLink text={'Menu2'} url={URL} external />
        </MenuItem>
        <MenuItem>
            <TextLink text={'Menu3'} url={URL} external />
        </MenuItem>
        <MenuItem>
            <TextLink text={'Menu4'} url={URL} external />
        </MenuItem>
    </Menu>
);

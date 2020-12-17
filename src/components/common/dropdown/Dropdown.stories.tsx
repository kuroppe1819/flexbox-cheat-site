import Translate from '@material-ui/icons/Translate';
import React from 'react';
import styled from 'styled-components';
import { TextLink } from '../link/TextLink';
import { Menu } from '../menu/Menu';
import { MenuItem } from '../menu/MenuItem';
import { Dropdown } from './Dropdown';

export default {
    title: 'components/common/dropdown/Dropdown',
    argTypes: {
        assistiveText: { control: 'text' },
        onClick: { action: 'clicked' },
    },
};

type Props = {
    text: string;
};

const MenuItemComponent: React.VFC<Props & StyledProps> = ({ className, text }) => (
    <MenuItem appendClassName={className}>
        <TextLink appendClassName={`${className}__link`} text={text} url={'https://google.com'} external />
    </MenuItem>
);

const MenuItemStyled: React.VFC<Props> = styled(MenuItemComponent)`
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.color.blue400};
    }

    &__link {
        display: inline-block;
        width: 100%;
        padding: 0.5rem 0.75rem;

        &:hover {
            color: ${({ theme }) => theme.color.white};
        }
    }
`;

const menu = (
    <Menu>
        <MenuItemStyled text="link1" />
        <MenuItemStyled text="link2" />
    </Menu>
);

export const Normal = () => <Dropdown buttonText={'日本語'} assistiveText={'言語の選択'} menu={menu} />;

export const WithIcon = () => (
    <Dropdown
        buttonText={'日本語'}
        assistiveText={'言語の選択'}
        menu={menu}
        icon={<Translate style={{ fontSize: '1.5rem' }} />}
    />
);

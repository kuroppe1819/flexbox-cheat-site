import Translate from '@material-ui/icons/Translate';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { useCustomIntl } from '../../fixtures/hooks/useCustomIntl';
import { Dropdown } from '../common/dropdown/Dropdown';
import { TextLink } from '../common/link/TextLink';
import { Menu } from '../common/menu/Menu';
import { MenuItem } from '../common/menu/MenuItem';

type Props = AppendClassName;

const Component: React.VFC<Props & StyledProps> = ({ className, appendClassName }) => {
    const theme = useTheme();
    const { formatMessage } = useCustomIntl();

    const menu = (
        <Menu>
            <MenuItem appendClassName={`${className}__menu-item`}>
                <TextLink appendClassName={`${className}__menu-item-link`} text={'English'} url={'./en'} />
            </MenuItem>
            <MenuItem appendClassName={`${className}__menu-item`}>
                <TextLink appendClassName={`${className}__menu-item-link`} text={'日本語'} url={'./'} />
            </MenuItem>
        </Menu>
    );

    return (
        <Dropdown
            appendClassName={appendClassName}
            buttonText={formatMessage({ id: 'dropdown.language.button' })}
            assistiveText={formatMessage({ id: 'dropdown.assistive.language.button' })}
            menu={menu}
            icon={<Translate style={{ fontSize: theme.fontSize['2xl'] }} />}
        />
    );
};

const StyledComponent: React.VFC<Props> = styled(Component)`
    &__menu {
        &-item {
            background-color: ${({ theme }) => theme.color.white};
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.color.blue400};
            }

            &-link {
                display: inline-block;
                width: 100%;
                padding: 0.5rem 0.75rem;

                &:hover {
                    color: ${({ theme }) => theme.color.white};
                }
            }
        }
    }
`;

export const SelectLanguageDropdown = StyledComponent;

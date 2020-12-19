import Translate from '@material-ui/icons/Translate';
import React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';
import { Dropdown } from '../common/dropdown/Dropdown';
import { TextLink } from '../common/link/TextLink';
import { Menu } from '../common/menu/Menu';
import { MenuItem } from '../common/menu/MenuItem';

const Component: React.VFC<StyledProps> = ({ className }) => {
    const intl = useIntl();

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
            buttonText={intl.formatMessage({ id: 'dropdown.language.button' })}
            assistiveText={intl.formatMessage({ id: 'dropdown.assistive.language.button' })}
            menu={menu}
            icon={<Translate style={{ fontSize: '1.5rem' }} />}
        />
    );
};

const StyledComponent: React.VFC = styled(Component)`
    &__menu {
        &-item {
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

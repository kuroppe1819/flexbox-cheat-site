import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { deviceMaxWidth } from '../../../data/deviceSize';
import { useCustomIntl } from '../../../fixtures/hooks/useCustomIntl';
import { IconLink } from '../../common/link/IconLink';
import { SelectLanguageDropdown } from '../SelectLanguageDropdown';

const Component: React.VFC<StyledProps> = ({ className }) => {
    const theme = useTheme();
    const { formatMessage } = useCustomIntl();

    return (
        <header className={`${className}`}>
            <h1 className={`${className}__title`}>Flexbox Cheat Site</h1>
            <div className={`${className}__iconLinks`} role="group">
                <SelectLanguageDropdown />
                <IconLink
                    appendClassName={`${className}__iconLink`}
                    assistiveText={formatMessage({ id: 'header.assistive.twitter.link' })}
                    url={'https://twitter.com/mys_x101'}
                    external
                >
                    <Twitter style={{ fontSize: theme.fontSize['2xl'] }} />
                </IconLink>
                <IconLink
                    appendClassName={`${className}__iconLink`}
                    assistiveText={formatMessage({ id: 'header.assistive.github.link' })}
                    url={'https://github.com/kuroppe1819/flexbox-cheat-site'}
                    external
                >
                    <GitHub style={{ fontSize: theme.fontSize['2xl'] }} />
                </IconLink>
            </div>
        </header>
    );
};

const StyledComponent: React.VFC = styled(Component)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    box-shadow: ${({ theme }) => theme.shadow.md};
    padding: 0 0.5rem;

    &__title {
        margin: 0;
        color: ${({ theme }) => theme.color.blue900};
        background-color: ${({ theme }) => theme.color.white};
        font-size: ${({ theme }) => theme.fontSize['2xl']};

        @media ${deviceMaxWidth.tablet} {
            display: none;
        }
    }

    &__iconLinks {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        margin: 0 0.75rem;
    }

    &__iconLink {
        padding: 0.5rem;
        color: ${({ theme }) => theme.color.blue900};

        &:hover {
            color: ${({ theme }) => theme.color.blue400};
        }
    }
`;

export const Header = StyledComponent;

import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { deviceMaxWidth } from '../../../data/deviceSize';
import { IconLink } from '../link/IconLink';

const Component: React.VFC<StyledProps> = ({ className }) => {
    const theme = useTheme();

    return (
        <header className={`${className}`}>
            <h1 className={`${className}__title`}>Flexbox Cheat Site</h1>
            <div className={`${className}__iconLinks`} role="group">
                <IconLink
                    appendClassName={`${className}__iconLink`}
                    assistiveText={'Twitterへのリンク'}
                    url={'https://twitter.com/mys_x101'}
                    external
                >
                    <Twitter style={{ fontSize: theme.fontSize['3xl'] }} />
                </IconLink>
                <IconLink
                    appendClassName={`${className}__iconLink`}
                    assistiveText={'GitHubへのリンク'}
                    url={'https://github.com/kuroppe1819/flexbox-cheat-site'}
                    external
                >
                    <GitHub style={{ fontSize: theme.fontSize['3xl'] }} />
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
    font-size: 0.8rem;

    &__title {
        margin: 0;
        color: ${({ theme }) => theme.color.blue900};
        background-color: ${({ theme }) => theme.color.white};
        font-size: 1.5rem;
    }

    &__iconLinks {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
    }

    &__iconLink {
        margin-right: 1.125rem;
        color: ${({ theme }) => theme.color.blue900};

        &:hover {
            color: ${({ theme }) => theme.color.blue400};
        }

        @media ${deviceMaxWidth.mobileL} {
            margin-right: 0.75rem;
        }

        @media ${deviceMaxWidth.mobileM} {
            display: none;
        }
    }
`;

export const Header = StyledComponent;

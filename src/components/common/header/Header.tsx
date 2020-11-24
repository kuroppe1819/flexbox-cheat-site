import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { useContext } from 'react';
import styled, { css, DefaultTheme, ThemeContext } from 'styled-components';
import { deviceMaxWidth } from '../../../data/deviceSize';
import { IconLink } from '../link/IconLink';

const Component: React.FC<StyledProps> = ({ className }) => {
    const theme = useContext(ThemeContext);

    return (
        <header className={`${className}`}>
            <h1 className={`${className}__title`}>Flexbox Cheat Site</h1>
            <div className={`${className}__linkIcons`} role="group">
                <IconLink
                    assistiveText={'Twitterへのリンク'}
                    url={'https://twitter.com/mys_x101'}
                    icon={faTwitter}
                    iconSize={'2x'}
                    external
                    styled={makeIconLinkBaseStyle(theme)}
                />
                <IconLink
                    assistiveText={'GitHubへのリンク'}
                    url={'https://github.com/kuroppe1819/flexbox-cheat-site'}
                    icon={faGithub}
                    iconSize={'2x'}
                    external
                    styled={makeIconLinkBaseStyle(theme)}
                />
            </div>
        </header>
    );
};

const makeIconLinkBaseStyle = (theme: DefaultTheme) =>
    css`
        margin-right: 1.25rem;
        color: ${theme.color.blue900};

        &:hover {
            color: ${theme.color.blue400};
        }

        @media ${deviceMaxWidth.mobileL} {
            margin-right: 0.75rem;
        }

        @media ${deviceMaxWidth.mobileM} {
            display: none;
        }
    `;

const StyledComponent: React.FC = styled(Component)`
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

    &__linkIcons {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
    }
`;

export const Header = StyledComponent;

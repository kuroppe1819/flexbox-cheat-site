import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { deviceMaxWidth } from '../fixtures/device';

const Component: React.FC<StyledProps> = (props: StyledProps) => {
    const { className } = props;

    return (
        <header className={`${className}`}>
            <h1 className={`${className}__title`}>Flexbox Cheat Site</h1>
            <div className={`${className}__linkIcons`} role="group">
                <a
                    className={`${className}__twitterLink`}
                    href="https://twitter.com/mys_x101"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                    className={`${className}__githubLink`}
                    href="https://github.com/kuroppe1819/flexbox-cheat-site"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </header>
    );
};

const StyledComponent: React.FC = styled(Component)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    box-shadow: ${({ theme }) => theme.shadow.md};
    font-size: 0.85rem;

    &__title {
        margin: 0;
        color: ${({ theme }) => theme.color.blue900};
        background-color: ${({ theme }) => theme.color.white};
        font-size: 1.5rem;
        font-weight: 700;
    }

    &__linkIcons {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        height: 4rem;
    }

    &__twitterLink,
    &__githubLink {
        display: inline-block;
        height: 2rem;
        margin-right: 1.25rem;
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

import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { deviceMaxWidth } from '../../../data/deviceSize';
import { FontAwesomeIconLink } from '../link/FontAwesomeIconLink';

const Component: React.FC<StyledProps> = ({ className }) => (
    <header className={`${className}`}>
        <h1 className={`${className}__title`}>Flexbox Cheat Site</h1>
        <div className={`${className}__iconLinks`} role="group">
            <FontAwesomeIconLink
                appendClassName={`${className}__iconLink`}
                assistiveText={'Twitterへのリンク'}
                url={'https://twitter.com/mys_x101'}
                icon={faTwitter}
                iconSize={'2x'}
                external
            />
            <FontAwesomeIconLink
                appendClassName={`${className}__iconLink`}
                assistiveText={'GitHubへのリンク'}
                url={'https://github.com/kuroppe1819/flexbox-cheat-site'}
                icon={faGithub}
                iconSize={'2x'}
                external
            />
        </div>
    </header>
);

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

    &__iconLinks {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
    }

    &__iconLink {
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

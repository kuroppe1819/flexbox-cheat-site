import React from 'react';
import styled, { css } from 'styled-components';
import { TextLink } from '../link/TextLink';

const Component: React.FC<StyledProps> = (props: StyledProps) => {
    const { className } = props;

    return (
        <footer className={`${className}`}>
            <nav className={`${className}__navigation`}>
                {/* TODO 英語文言に切り替えられるような仕組みを入れる */}
                <TextLink text={'利用規約'} url="./terms.html" fontSize={'xs'} styled={textLinkStyle} />
                <TextLink text={'プライバシーポリシー'} url="./privacy.html" fontSize={'xs'} styled={textLinkStyle} />
                <TextLink text={'お問い合わせ'} url="./contact.html" fontSize={'xs'} styled={textLinkStyle} />
            </nav>
            <p className={`${className}__copyright`}>
                <small>&copy;2020 Flexbox Cheat Site</small>
            </p>
        </footer>
    );
};

const textLinkStyle = css`
    margin: 0 1rem;
`;

const StyledComponent: React.FC = styled(Component)`
    &__navigation {
        display: flex;
        justify-content: center;
    }

    &__terms,
    &__privacy,
    &__contact {
        margin: 0 1rem;
        font-size: 0.75rem;
        text-decoration: none;
        color: ${({ theme }) => theme.color.blue900};
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.color.blue400};
        }
    }

    &__copyright {
        text-align: center;
    }
`;

export const Footer = StyledComponent;

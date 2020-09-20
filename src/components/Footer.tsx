import React from 'react';
import styled from 'styled-components';

const Component: React.FC<StyledProps> = (props: StyledProps) => {
    const { className } = props;

    return (
        <footer className={`${className}`}>
            <nav className={`${className}__navigation`}>
                {/* TODO 英語文言に切り替えられるような仕組みを入れる */}
                <a className={`${className}__terms`} href="./terms.html">
                    利用規約
                </a>
                <a className={`${className}__privacy`} href="./privacy.html">
                    プライバシーポリシー
                </a>
                <a className={`${className}__contact`}>お問い合わせ</a>
            </nav>
            <p className={`${className}__copyright`}>
                <small>&copy;2020 Flexbox Cheat Site</small>
            </p>
        </footer>
    );
};

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

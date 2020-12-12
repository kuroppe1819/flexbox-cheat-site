import React from 'react';
import styled from 'styled-components';
import { TextLink } from '../link/TextLink';

const Component: React.FC<StyledProps> = (props: StyledProps) => {
    const { className } = props;

    return (
        <footer className={`${className}`}>
            <nav className={`${className}__navigation`}>
                {/* TODO 英語文言に切り替えられるような仕組みを入れる */}
                <TextLink appendClassName={`${className}__link`} text={'利用規約'} url="./terms.html" fontSize={'xs'} />
                <TextLink
                    appendClassName={`${className}__link`}
                    text={'プライバシーポリシー'}
                    url="./privacy.html"
                    fontSize={'xs'}
                />
                <TextLink
                    appendClassName={`${className}__link`}
                    text={'お問い合わせ'}
                    url="./contact.html"
                    fontSize={'xs'}
                />
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

    &__link {
        margin: 0 1rem;
    }

    &__copyright {
        text-align: center;
    }
`;

export const Footer = StyledComponent;

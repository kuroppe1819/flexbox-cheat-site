import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';

export const Footer = (): ReactElement => {
    return (
        <footer>
            <Navigation>
                <InternalLink to="/terms">利用規約</InternalLink>
                <InternalLink to="/privacy">プライバシーポリシー</InternalLink>
                <InternalLink to="/contact">お問い合わせ</InternalLink>
            </Navigation>
            <Copyright>
                <small>&copy;2020 Flexbox Cheat Site</small>
            </Copyright>
        </footer>
    );
};

const Navigation = styled.nav`
    ${tw`flex justify-center`}
`;

const InternalLink = styled(Link)`
    ${tw`text-blue-900 hover:text-blue-400 text-xs mx-4 no-underline`}
`;

const Copyright = styled.p`
    ${tw`text-center`}
`;

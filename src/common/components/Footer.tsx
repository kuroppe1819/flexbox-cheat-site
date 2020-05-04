import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = (): ReactElement => {
    return (
        <footer>
            <Navigation>
                <NavLink>利用規約</NavLink>
                <NavLink>更新情報</NavLink>
                <NavLink>お問い合わせ</NavLink>
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

const NavLink = styled.a`
    ${tw`text-blue-900 text-base mx-4`}
`;

const Copyright = styled.p`
    ${tw`text-center`}
`;

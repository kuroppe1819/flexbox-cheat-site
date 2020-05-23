import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = (): ReactElement => {
    return (
        <footer>
            <Navigation>
                <NavLink>利用規約</NavLink>
                <NavLink>プライバシーポリシー</NavLink>
                <NavLink
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfAs_U4Oe_Pj-rF3GJkiGlEkla6Bt2MIAuDFOyftdSBACpHqA/viewform?usp=sf_link"
                    rel="noopener noreferrer"
                >
                    お問い合わせ
                </NavLink>
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
    ${tw`text-blue-900 text-sm mx-4`}
`;

const Copyright = styled.p`
    ${tw`text-center`}
`;

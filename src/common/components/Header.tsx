import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'tailwind.macro';
import { deviceMaxWidth } from '../util/DefineProperty';

export const Header = (): ReactElement => {
    return (
        <HeaderMain>
            <HeaderTitle>Flexbox Cheat Site</HeaderTitle>
            <LinkIcons>
                <TwitterLink href="https://twitter.com/mys_x101" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                </TwitterLink>
                <GitHubLink href="https://github.com/kuroppe1819/flexbox-cheat-site" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                </GitHubLink>
            </LinkIcons>
        </HeaderMain>
    );
};

const HeaderMain = styled.header`
    ${tw`text-sm flex h-16 justify-center items-center bg-white shadow-md`}
`;

const HeaderTitle = styled.h1`
    ${tw`m-0 text-blue-900 text-2xl font-bold`};
`;

const LinkIcons = styled.div`
    ${tw`absolute right-0`};
`;

const TwitterLink = styled.a`
    ${tw`inline-block h-8 mr-5 text-blue-900 hover:text-blue-400`};

    @media ${deviceMaxWidth.mobileL} {
        ${tw`mr-3`}
    }

    @media ${deviceMaxWidth.mobileM} {
        ${tw`hidden`}
    }
`;

const GitHubLink = styled.a`
    ${tw`inline-block h-8 mr-5 text-blue-900 hover:text-blue-400`};

    @media ${deviceMaxWidth.mobileL} {
        ${tw`mr-3`}
    }
`;

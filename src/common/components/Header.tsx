import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'tailwind.macro';

export const Header = (): ReactElement => {
    return (
        <HeaderMain>
            <HeaderTitle>FlexBox Cheat Site</HeaderTitle>
            <LinkIcons>
                <ExternalLink>
                    <FontAwesomeIcon icon={['fas', 'share-alt']} size="2x" />
                </ExternalLink>
                <ExternalLink>
                    <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                </ExternalLink>
            </LinkIcons>
        </HeaderMain>
    );
};

const HeaderMain = styled.header`
    ${tw`text-sm flex h-16 justify-center items-center bg-white shadow-md`}
`;

const HeaderTitle = styled.h1`
    ${tw`m-0 text-blue-900`};
`;

const LinkIcons = styled.div`
    ${tw`absolute right-0 text-blue-900`};
`;

const ExternalLink = styled.a`
    ${tw`inline-block h-8 mr-5`};
`;

import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

export const PrivacyPolicy = (): ReactElement => {
    return (
        <Main>
            <h1>プライバシーポリシー</h1>
        </Main>
    );
};

const Main = styled.main`
    ${tw``}
`;

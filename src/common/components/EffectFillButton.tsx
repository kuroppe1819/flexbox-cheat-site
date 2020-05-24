import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const EffectFillButton = (): ReactElement => {
    return <Button></Button>;
};

const Button = styled.button`
    ${tw`relative inline-block text-lg text-blue-400 no-underline select-none border border-solid border-blue-400`};
`;

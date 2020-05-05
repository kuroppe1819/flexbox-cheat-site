import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export type Props = {
    numberText: string;
};

export const ExampleItem = (props: Props): ReactElement => {
    return (
        <Item>
            <ItemText>{props.numberText}</ItemText>
        </Item>
    );
};

const Item = styled.div`
    ${tw`m-px bg-blue-400 w-8 h-8 flex justify-center items-center`}
`;

const ItemText = styled.div`
    ${tw`inline-block text-blue-100 text-lg`}
`;
